import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBXyhBV0ClzJ8F9b8UrQci4ZEB9mdGAYe0",
  authDomain: "financial-news-blog-project.firebaseapp.com",
  projectId: "financial-news-blog-project",
  storageBucket: "financial-news-blog-project.appspot.com",
  messagingSenderId: "158243635687",
  appId: "1:158243635687:web:97edfaa36e0c655525fd42",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
