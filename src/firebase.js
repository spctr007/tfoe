// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgLHxdVNx6IKf0WPMj7vPQ2tu5DefHe90",
    authDomain: "tfoe-b7906.firebaseapp.com",
    projectId: "tfoe-b7906",
    storageBucket: "tfoe-b7906.appspot.com",
    messagingSenderId: "437957251370",
    appId: "1:437957251370:web:6acb71fdba1dfccb694e53",
    measurementId: "G-06MC4KY66F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);