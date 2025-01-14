
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTZVlTlwITJ1KHatf7eN5Kw-OffUMy7Uk",
  authDomain: "save-wildlife-50c69.firebaseapp.com",
  projectId: "save-wildlife-50c69",
  storageBucket: "save-wildlife-50c69.firebasestorage.app",
  messagingSenderId: "304802002052",
  appId: "1:304802002052:web:240e78a5d3da5c6630bed1",
  measurementId: "G-3VJ6JZZQ4V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
