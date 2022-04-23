// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwjVKOLYdfO3OD2FRNUf2sI_4Su23tSJs",
  authDomain: "genius-car-services-5689b.firebaseapp.com",
  projectId: "genius-car-services-5689b",
  storageBucket: "genius-car-services-5689b.appspot.com",
  messagingSenderId: "738776359474",
  appId: "1:738776359474:web:22e9d270a5fe22e67b122b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
