// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIZ0JQcNcUvay9OkMM9r8VM2iXTNwYLUI",
  authDomain: "adminimpresilk.firebaseapp.com",
  projectId: "adminimpresilk",
  storageBucket: "adminimpresilk.appspot.com",
  messagingSenderId: "48515276076",
  appId: "1:48515276076:web:a38386447a4deee698e089",
  measurementId: "G-SZ1W39WZED"
};


export const appFirebase = initializeApp(firebaseConfig, 'impresilk');
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);