// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5W8ci283pepwak-xjzUZ1vtAfNDjY_6Y",
  authDomain: "cpimpresilk.firebaseapp.com",
  projectId: "cpimpresilk",
  storageBucket: "cpimpresilk.appspot.com",
  messagingSenderId: "531505868005",
  appId: "1:531505868005:web:38c1bdb44c444edb5eb80c",
  measurementId: "G-XKGR1CX84D"
};


export const appFirebase = initializeApp(firebaseConfig, 'impresilk');
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const storage = getStorage(appFirebase)
export const storageRef = ref(storage);