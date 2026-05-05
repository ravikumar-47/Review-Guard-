import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface AnalysisResponse {
  classification: "Positive" | "Critical";
  draftedResponse: string;
  improvementAnalysis?: string;
}

export interface BatchInsightResponse {
  summary: string;
  recommendations: string;
}

export interface PerformanceReport {
  type: "Weekly" | "Monthly";
  performanceScore: number;
  sentimentAnalysis: string;
  topComplaints: string[];
  growthRecommendations: string;
}

export async function analyzeReview(reviewText: string, businessCategory: string): Promise<AnalysisResponse> {
  const prompt = `
    You are an expert AI Reputation Manager for a ${businessCategory}.
    Your goal is to help this business manage its Google Business Profile reviews efficiently.

    Workflow:
    1. Analyze the incoming 'User Review' text carefully.
    2. Review Classification: Identify if the review is Positive (4-5 stars) or Critical (1-3 stars).
    3. Drafting Response:
       - For positive reviews: express gratitude, mention returning soon.
       - For critical reviews: apologize sincerely without excuses, ask for a chance to fix it, and provide a placeholder like '[Insert Contact Person Name/Phone]' for offline resolution.
    4. Gap Analysis (For Critical Reviews only):
       - Summarize specific complaints in 2-3 bullet points.
       - Provide actionable, practical suggestions for a ${businessCategory} owner to fix these service gaps.

    User Review: "${reviewText}"

    Output Format (JSON):
    {
      "classification": "Positive" | "Critical",
      "draftedResponse": "Professional response text",
      "improvementAnalysis": "Markdown formatted string for improvement suggestions"
    }

    Return ONLY raw JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    const resultText = response.text || "{}";
    return JSON.parse(resultText) as AnalysisResponse;
  } catch (error) {
    console.error("Error analyzing review:", error);
    throw new Error("Failed to analyze review. Please try again.");
  }
}

export async function generateBatchInsights(reviews: { text: string; rating: number }[], businessCategory: string): Promise<BatchInsightResponse> {
  const reviewsText = reviews.map((r, i) => `Review ${i + 1} (${r.rating} stars): ${r.text}`).join('\n\n');
  
  const prompt = `
    You are a Business Strategy Consultant. You are analyzing a batch of critical reviews for a ${businessCategory}.
    
    Goal: Provide a high-level summary and strategic recommendations after reaching 10 critical reviews.
    
    Reviews Data:
    ${reviewsText}
    
    Tasks:
    1. Summary: Synthesize the major recurring themes from these 10 reviews. What is the biggest pain point?
    2. Recommendations: Provide 3-5 high-impact, practical business improvements (e.g., equipment maintenance, staff etiquette, specific service protocol changes).
    
    Output Format (JSON):
    {
      "summary": "Synthesized markdown summary",
      "recommendations": "Markdown list of actionable items"
    }
    
    Return ONLY raw JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text || "{}") as BatchInsightResponse;
  } catch (error) {
    console.error("Error generating batch insights:", error);
    throw new Error("Failed to generate batch insights.");
  }
}

export async function generatePerformanceReport(
  reviews: { text: string; rating: number; classification: string }[], 
  businessCategory: string,
  type: "Weekly" | "Monthly"
): Promise<PerformanceReport> {
  const reviewsText = reviews.map((r, i) => `[Rating: ${r.rating}] Review ${i + 1}: ${r.text}`).join('\n');
  
  const prompt = `
    You are a Senior Business Analyst. Create a ${type} Performance Report for a ${businessCategory}.
    
    Data for the last ${type === 'Weekly' ? '7' : '30'} days:
    ${reviewsText}
    
    Requirements:
    1. Performance Score: A number from 0-100 based on ratings and sentiment.
    2. Sentiment Analysis: A brief paragraph describing current customer mood.
    3. Top Complaints: A list of the 3 most common issues.
    4. Growth Recommendations: Detailed, actionable advice to scale the business and improve reputation.
    
    Output Format (JSON):
    {
      "type": "${type}",
      "performanceScore": number,
      "sentimentAnalysis": "Markdown string",
      "topComplaints": ["complaint 1", "2", "3"],
      "growthRecommendations": "Markdown string"
    }
    
    Return ONLY raw JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: { responseMimeType: "application/json" }
    });

    return JSON.parse(response.text || "{}") as PerformanceReport;
  } catch (error) {
    console.error("Error generating report:", error);
    throw new Error(`Failed to generate ${type} report.`);
  }
}
