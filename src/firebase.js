// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCBHPL6h9VG8Ov77OKTNDnHcdX_MSAI4",
  authDomain: "react-interview-practice.firebaseapp.com",
  projectId: "react-interview-practice",
  storageBucket: "react-interview-practice.appspot.com",
  messagingSenderId: "1062218506964",
  appId: "1:1062218506964:web:9b12c71c01e32fbac75141",
  measurementId: "G-CPL77EX8N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)