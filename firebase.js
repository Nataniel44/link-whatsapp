// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCVKlfhbSCSfcl3xQ2RRLxUpctiR0t8eQ",
  authDomain: "gastrolink-f6fc5.firebaseapp.com",
  projectId: "gastrolink-f6fc5",
  storageBucket: "gastrolink-f6fc5.firebasestorage.app",
  messagingSenderId: "351768259501",
  appId: "1:351768259501:web:8aed5c2ec01c1b71664f24",
  measurementId: "G-V5L5K1Z7LR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
