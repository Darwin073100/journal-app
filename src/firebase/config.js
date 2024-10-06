// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9GFelmJUXX84rCpI9Iegrh1mzejE2vyE",
  authDomain: "react-curso-5559d.firebaseapp.com",
  projectId: "react-curso-5559d",
  storageBucket: "react-curso-5559d.appspot.com",
  messagingSenderId: "454873946972",
  appId: "1:454873946972:web:6ac80b7198a52993bfbf99"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );