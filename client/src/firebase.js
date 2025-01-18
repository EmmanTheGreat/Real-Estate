// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-df8b7.firebaseapp.com",
  projectId: "mern-estate-df8b7",
  storageBucket: "mern-estate-df8b7.firebasestorage.app",
  messagingSenderId: "173290137560",
  appId: "1:173290137560:web:3b940f7a6627d09479f4ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);