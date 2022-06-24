import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3HTrObL-GnGMVJJdiJbJsoF2NL9y21ps",
  authDomain: "clone-43e9c.firebaseapp.com",
  projectId: "clone-43e9c",
  storageBucket: "clone-43e9c.appspot.com",
  messagingSenderId: "624897071977",
  appId: "1:624897071977:web:a0fe92575177f6b1fd3bf8",
  measurementId: "G-DLGDV4YBM0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
