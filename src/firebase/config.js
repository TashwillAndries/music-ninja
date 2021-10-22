import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFJw6-mPn3Aj_ITZjboAAwuApcBEnfnMk",
  authDomain: "muso-ninjas-8cfa5.firebaseapp.com",
  projectId: "muso-ninjas-8cfa5",
  storageBucket: "muso-ninjas-8cfa5.appspot.com",
  messagingSenderId: "39040066809",
  appId: "1:39040066809:web:d50777b122f82dd9e9ae28",
};

// init firebase app
firebase.initializeApp(firebaseConfig);

// init services
const projectFire = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFire, projectAuth, timestamp };
