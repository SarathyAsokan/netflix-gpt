// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1AZga0hhkF9IVqYH8G_8_4ePLvOid5HM",
  authDomain: "netflixgpt-2f038.firebaseapp.com",
  projectId: "netflixgpt-2f038",
  storageBucket: "netflixgpt-2f038.appspot.com",
  messagingSenderId: "1098302877399",
  appId: "1:1098302877399:web:b19367b2f8d1f0f2efca92",
  measurementId: "G-FG35W910GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();