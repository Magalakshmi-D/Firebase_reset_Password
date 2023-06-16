// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoIekEmq1MH4AJfh-7o4ucIj1QmZDT2cQ",
  authDomain: "fir-yt-a0686.firebaseapp.com",
  projectId: "fir-yt-a0686",
  storageBucket: "fir-yt-a0686.appspot.com",
  messagingSenderId: "72432863822",
  appId: "1:72432863822:web:9bf1e51ac2e9d27db0911f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);