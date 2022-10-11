import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword
} from "../../utilz/firsbase/firebase.utils";
import AuthForm from "../../components/authForm/AuthForm.component";
import { FcGoogle } from 'react-icons/fc'
import './Authentication.styles.scss'

function Authentication() {

useEffect(() => {
const getRedirectUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getRedirectUser();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
  };

  async function handleSignUpForm({ displayName, email , password }){
    try{
      const { user }  = await createAuthUserWithEmailAndPassword(email, password);
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
    }catch(error){
      alert(error)
      throw new Error('error')
    }
  }

  async function handleSignInForm({ email, password }){
    try{
      const response = await signInAuthUserWithEmailAndPassword(email, password);
    }catch(error){
      alert(error)
      throw new Error('error')
    }
  }

  return (
    <div className="authentication-container">
      <AuthForm onSubmitHandler={handleSignUpForm} type='signup' />
      <AuthForm onSubmitHandler={handleSignInForm} type='signin' />
      <div className="authentication-container-google">
      <h1>Sign in directly with google</h1>
      <button onClick={logGoogleUser}><FcGoogle style={{ fontSize : '18px'}} /> Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}><FcGoogle style={{ fontSize : '18px'}} /> Sign in with Google Redirect</button>
    </div>
    </div>
  );
}

export default Authentication;
