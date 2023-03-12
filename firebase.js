// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXyhBV0ClzJ8F9b8UrQci4ZEB9mdGAYe0",
  authDomain: "financial-news-blog-project.firebaseapp.com",
  projectId: "financial-news-blog-project",
  storageBucket: "financial-news-blog-project.appspot.com",
  messagingSenderId: "158243635687",
  appId: "1:158243635687:web:97edfaa36e0c655525fd42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 