
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1JcUzT8ccoSdcbyvZOnMUlXar_rMN_Q",
  authDomain: "sab-b56a5.firebaseapp.com",
  projectId: "sab-b56a5",
  storageBucket: "sab-b56a5.firebasestorage.app",
  messagingSenderId: "859300545252",
  appId: "1:859300545252:web:76c41997a51089fce9a2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;