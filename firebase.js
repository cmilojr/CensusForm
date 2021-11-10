// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXiU1FiNJHBpxawY7SsblCfFV5dRPH7rk",
  authDomain: "bolumbia-e8c44.firebaseapp.com",
  databaseURL: "https://bolumbia-e8c44-default-rtdb.firebaseio.com",
  projectId: "bolumbia-e8c44",
  storageBucket: "bolumbia-e8c44.appspot.com",
  messagingSenderId: "1075351382092",
  appId: "1:1075351382092:web:7e377c267cf064d34a6ce9"
};

// Initialize Firebase
let app
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = getAuth()

export {
  auth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
}
