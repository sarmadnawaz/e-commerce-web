import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = new GoogleAuthProvider();
const auth = getAuth();

provider.setCustomParameters({
  prompt: "select_account",
});


const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
// Sign In action
const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try{
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
  }catch(error){
    console.log(error.code)
    switch(error.code){
      case 'auth/user-not-found':
        throw new Error('User not found')
      case 'auth/wrong-password':
        throw new Error('invalid password')  
      default :
        throw new Error(error.code)
    }
  }
} 
// Sign Up action
const createAuthUserWithEmailAndPassword = async (email, password) => {
  try{
    if (!email || !password) return;
    const res =  await createUserWithEmailAndPassword(auth, email, password);
    return res
  }catch(error){
    switch(error.code){
      case 'auth/weak-password':
        throw new Error('password must be greater then 6 characters')
      case 'auth/email-already-in-use' :
        throw new Error('Email is already in use of another User')  
      default :
        throw new Error(error.code)
    }
  }
};
// Creating User document in firebase
const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", `${userAuth.uid}`);
  // check it if user already exist
  const userSnapshot = await getDoc(userDocRef);
  // if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user document", error.message);
    }
  }
  // if user exist then do nothing
  return userDocRef;
};

const signOutUser = () => signOut(auth)

export {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser
};
