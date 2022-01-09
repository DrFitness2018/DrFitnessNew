// Import the functions you need from the SDKs you need
/*eslint-disable  */
import firebase, { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/database';
import {getFirestore} from 'firebase/firestore'
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";


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
const Firebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth();

export function signup(email,password){
  return firebase.createUserWithEmailAndPassword(auth,email,password);
}
export const db = firebase.getFirestore(firebase);

export {firebase,auth};