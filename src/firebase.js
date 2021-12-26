// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyBVl9aiiEeLct1RBRIWgS59q2J_JSEAcBE",
//   authDomain: "childrenanxiety21.firebaseapp.com",
//   projectId: "childrenanxiety21",
//   storageBucket: "childrenanxiety21.appspot.com",
//   messagingSenderId: "753736987583",
//   appId: "1:753736987583:web:205b463ca64492cd9ee70a"
  apiKey: "AIzaSyBFBipAW-m2-_Guud6i_sQr5T_759gB38s",
  authDomain: "drfitness-394fb.firebaseapp.com",
  projectId: "drfitness-394fb",
  storageBucket: "drfitness-394fb.appspot.com",
  messagingSenderId: "159169281920",
  appId: "1:159169281920:web:efc41f411bf79ac2fb4b65",
  measurementId: "G-RY7YJGX2WR"
};

// Initialize Firebase  
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);