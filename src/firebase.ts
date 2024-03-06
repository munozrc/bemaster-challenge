import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCXQ_Qwbr9AP4GaMUw2p225_WpxjjIpJFw",
  authDomain: "bemaster-challenge-60b29.firebaseapp.com",
  projectId: "bemaster-challenge-60b29",
  storageBucket: "bemaster-challenge-60b29.appspot.com",
  messagingSenderId: "1003222709010",
  appId: "1:1003222709010:web:50ba4295ea94808b37f9cb"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)