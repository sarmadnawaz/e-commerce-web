import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_account"
})

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider)


const db = getFirestore();

const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', `${userAuth.uid}`)
    // check it if user already exist
    const userSnapshot = await getDoc(userDocRef);
    // if user does not exist
    if(!userSnapshot.exists()){
        const  { displayName , email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        }catch(error){
            console.log('error creating the user document', error.message)
        }
    }
    // if user exist then do nothing
    return userDocRef
}





















export { auth, signInWithGooglePopup, createUserDocumentFromAuth }