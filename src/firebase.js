// Import the functions you need from the SDKs you need
/*eslint-disable  */
import { initializeApp } from "firebase/compat/app";
import {getFirestore} from 'firebase/compat/firestore'
import { getAuth , createUserWithEmailAndPassword } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxtRhHcd93wssyTJlqwDbPWpVqECOBSzo",
  authDomain: "drfitness-d7c30.firebaseapp.com",
  projectId: "drfitness-d7c30",
  storageBucket: "drfitness-d7c30.appspot.com",
  messagingSenderId: "767578437714",
  appId: "1:767578437714:web:efdb147c8b67b10d14878b",
  measurementId: "G-3V3F1YD0ZM"
};


// Initialize Firebase  
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
}
export const db = getFirestore(firebase);