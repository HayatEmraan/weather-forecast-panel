// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8l1u2ps2rrUbUU8kkbSXNCScE3NvYZXk",
  authDomain: "weather-forecast-97eb4.firebaseapp.com",
  projectId: "weather-forecast-97eb4",
  storageBucket: "weather-forecast-97eb4.appspot.com",
  messagingSenderId: "1051279490123",
  appId: "1:1051279490123:web:cecb72bd5cdf6e81f7e1ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
