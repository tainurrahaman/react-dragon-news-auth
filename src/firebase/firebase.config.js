// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAreObuISHVJqp4z3A0Pe_2iBKhahT71w4",
  authDomain: "dragon-news-auth-6bf7f.firebaseapp.com",
  projectId: "dragon-news-auth-6bf7f",
  storageBucket: "dragon-news-auth-6bf7f.firebasestorage.app",
  messagingSenderId: "948016542929",
  appId: "1:948016542929:web:37203d15322fbe291001f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
