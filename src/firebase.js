import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAq_DWoKL1wsO6PtF9R1qazC9ApOzfXAR8",
  authDomain: "clone-beginner-c2125.firebaseapp.com",
  projectId: "clone-beginner-c2125",
  storageBucket: "clone-beginner-c2125.appspot.com",
  messagingSenderId: "178602351894",
  appId: "1:178602351894:web:942c24f4847a2fcbd24437"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth,provider};