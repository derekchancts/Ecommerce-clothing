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


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc('users/kCYlntaTzQ3C5QLOB1LW'))

  // const userRef = firestore.doc('users/kCYlntaTzQ3C5QLOB1LW')
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // console.log(snapShot)

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.log('user data created');
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
