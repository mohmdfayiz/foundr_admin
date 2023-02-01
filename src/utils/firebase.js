// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Sc_Rcye3fL9vANAOHkSQm6Ix1J0L0JY",
  authDomain: "foundr-f4fd7.firebaseapp.com",
  projectId: "foundr-f4fd7",
  storageBucket: "foundr-f4fd7.appspot.com",
  messagingSenderId: "192182115865",
  appId: "1:192182115865:web:586440110b3f180b119488",
  measurementId: "G-5GT68XP7HE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();