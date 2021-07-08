import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNFuHqFzMdsncBBk9HAUAL1nWfEFc4doQ",
  authDomain: "crwn-clothing-4824b.firebaseapp.com",
  projectId: "crwn-clothing-4824b",
  storageBucket: "crwn-clothing-4824b.appspot.com",
  messagingSenderId: "729505406559",
  appId: "1:729505406559:web:735f8874d27b5a64ad85ea",
  measurementId: "G-1QVECSS2EG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
