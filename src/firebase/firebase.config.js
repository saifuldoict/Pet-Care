// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtS3YEUtNIikvrV8JV0VhWPDtMFxZm3Cc",
  authDomain: "pet-care-6cf1c.firebaseapp.com",
  projectId: "pet-care-6cf1c",
  storageBucket: "pet-care-6cf1c.firebasestorage.app",
  messagingSenderId: "947464386413",
  appId: "1:947464386413:web:79aef0e967582c6e7a4c64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;