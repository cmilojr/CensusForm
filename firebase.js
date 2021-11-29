// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

//import firebase from 'firebase/compat/app';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
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

let code
const codes = (ECN, CFN) => {
  code = "users/"+ECN // + "/" + CFN
}

const readData = (credentials) => {
  const dbRef = ref(getDatabase());
  if (credentials) {
    return get(child(dbRef, credentials))
  }
  return get(child(dbRef, code))
}

const updatedb = (obj) => {
  const db = getDatabase();
  return update(ref(db, code), obj)
}

const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const signout = () => {
  const auth = getAuth();
  return signOut(auth)
}

export {
  onAuthStateChanged,
  writeUserData,
  createUser,
  readData,
  updatedb,
  signout,
  signin,
  codes,
  auth,
  ref,
  set,
  db,
}