import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAq97CsCZn3TomAfhaukiQOh-zSCvF-GY4",
  authDomain: "chat-now-a0bf0.firebaseapp.com",
  projectId: "chat-now-a0bf0",
  storageBucket: "chat-now-a0bf0.appspot.com",
  messagingSenderId: "830950756413",
  appId: "1:830950756413:web:04f5e6ce5004ad0d919a54",
  measurementId: "G-PK77F7Q270"
});



export const auth = firebase.auth();
export const firestore = firebase.firestore();
// const analytics = firebase.analytics();

export default firebase;