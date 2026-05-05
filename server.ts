import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  app.use(express.json());

  // API Route: Simulate Google Review Webhook Receiver
  app.post("/api/webhook/google-review", async (req, res) => {
    const { reviewText, rating, businessCategory, businessId } = req.body;
    
    console.log(`[Webhook] Received review for ${businessId}`);

    // Since AI Studio prohibits backend Gemini calls with auto-injected keys,
    // we return the raw data and let the frontend 'Automation Engine' handle the reply.
    res.json({
      success: true,
      receivedAt: new Date().toISOString(),
      review: { reviewText, rating, businessCategory, businessId }
    });
  });

  // Serve Frontend
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ReviewGuard Server running on http://localhost:${PORT}`);
  });
}

startServer();
