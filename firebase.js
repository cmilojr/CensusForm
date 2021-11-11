// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  get,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
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
const db = getDatabase(app);

const writeUserData = (route, obj) => {
  set(ref(db, route), obj);
}

const readData = (route) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, route)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return(snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  db,
  ref,
  set,
  writeUserData,
  readData
}
