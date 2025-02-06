// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuoticzbnymFbaw6w5-sEHnW1_sXVpIww",
  authDomain: "safe-walk-v3.firebaseapp.com",
  databaseURL: "https://safe-walk-v3-default-rtdb.firebaseio.com",
  projectId: "safe-walk-v3",
  storageBucket: "safe-walk-v3.firebasestorage.app",
  messagingSenderId: "851353634533",
  appId: "1:851353634533:web:b8190bd739d21fa177f60c",
  measurementId: "G-5HNLTMZL69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

console.log("Firebase initialized with config:", firebaseConfig);
console.log("Firestore instance:", db);

export { db };
