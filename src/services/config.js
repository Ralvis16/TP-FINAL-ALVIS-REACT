import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// AIzaSyBDmt2K7nYd8aZ-3vrOgMJAt84NJzISNJA

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ralvismarket-41fa6.firebaseapp.com",
  projectId: "ralvismarket-41fa6",
  storageBucket: "ralvismarket-41fa6.appspot.com",
  messagingSenderId: "193437127282",
  appId: "1:193437127282:web:271be69802acf23b2c68eb",
  measurementId: "G-Z4W20172DP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);