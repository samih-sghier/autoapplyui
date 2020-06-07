import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBSZMM-ZRRcDJEH-APBCtbhX7uf83hhFyM",
    authDomain: "autologin-e4a0f.firebaseapp.com",
    databaseURL: "https://autologin-e4a0f.firebaseio.com",
    projectId: "autologin-e4a0f",
    storageBucket: "autologin-e4a0f.appspot.com",
    messagingSenderId: "602416786778",
    appId: "1:602416786778:web:67f53d7d46a581bf355763",
    measurementId: "G-B6Y5FZEH57"
  };
  firebase.initializeApp(firebaseConfig)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  
  const provider = new firebase.auth.GoogleAuthProvider()
  export function signInWithGoogle() {
      auth.signInWithPopup(provider)
  }
  export  const signOut = auth.signOut()
