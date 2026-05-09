import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfigManual from '../../firebase-applet-config.json';

// Use environment variables if they exist (standard for Vercel/Production), 
// otherwise fallback to the local config file.
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfigManual.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || firebaseConfigManual.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || firebaseConfigManual.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || firebaseConfigManual.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || firebaseConfigManual.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || firebaseConfigManual.appId,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || firebaseConfigManual.measurementId,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || firebaseConfigManual.firestoreDatabaseId
};

const app = initializeApp(config);

// Use initializeFirestore with long polling to bypass potential proxy/websocket issues in the container
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, config.firestoreDatabaseId);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Adding scopes for Google Business Profile Management
googleProvider.addScope('https://www.googleapis.com/auth/business.manage');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

export const signIn = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);

// Test Connection with detailed logging
async function testConnection() {
  try {
    // Try to fetch a non-existent doc to verify connectivity
    await getDocFromServer(doc(db, 'system', 'ping'));
    console.log("Firestore connection test successful.");
  } catch (error: any) {
    console.error("Firestore Connectivity Test failed:", error.message);
    if (error.message?.includes('the client is offline') || error.message?.includes('Could not reach Cloud Firestore backend')) {
      console.error("CRITICAL: Your application cannot reach Firebase. Please check if your project is correctly provisioned or if network restrictions apply.");
    }
  }
}
testConnection();
