import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyBsT8nhL_NdgLATltcPRTI8DrGddiJAMNQ",
  authDomain: "crown-clothing-e95d4.firebaseapp.com",
  databaseURL: "https://crown-clothing-e95d4.firebaseio.com",
  projectId: "crown-clothing-e95d4",
  storageBucket: "crown-clothing-e95d4.appspot.com",
  messagingSenderId: "803719951282",
  appId: "1:803719951282:web:675547d992dc40f844eaab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
