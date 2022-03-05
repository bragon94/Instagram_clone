// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWs36Zj15IwucbKZbVbZl96ht_V0XwLj4",
  authDomain: "instagram-clone-eeb3d.firebaseapp.com",
  projectId: "instagram-clone-eeb3d",
  storageBucket: "instagram-clone-eeb3d.appspot.com",
  messagingSenderId: "272741060149",
  appId: "1:272741060149:web:b50cbbfae5cfdf67522b7c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
