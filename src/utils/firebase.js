import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCKGsYcdGDOiKkP5v8xNMwE8coHeyylN80",
    authDomain: "gamesource-148c4.firebaseapp.com",
    projectId: "gamesource-148c4",
    storageBucket: "gamesource-148c4.firebasestorage.app",
    messagingSenderId: "438623665824",
    appId: "1:438623665824:web:570f5ca1578080467393c5"
  };

  initializeApp(firebaseConfig);

  const DB = getFirestore();
  const AUTH = getAuth();

  export { DB, AUTH };