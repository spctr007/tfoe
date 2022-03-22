// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLwPYhJP0QaXzeD9ZW45T5PUXelOhUJAs",
    authDomain: "tfoe-de68d.firebaseapp.com",
    projectId: "tfoe-de68d",
    storageBucket: "tfoe-de68d.appspot.com",
    messagingSenderId: "641077713028",
    appId: "1:641077713028:web:9a0cf7bb7e3637ec388ad1",
    measurementId: "G-5JFQHB3GFY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);