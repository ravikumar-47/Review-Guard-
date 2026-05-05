import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// Use initializeFirestore with long polling to bypass potential proxy/websocket issues in the container
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);

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
