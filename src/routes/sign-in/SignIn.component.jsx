import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
  createAuthUserWithEmailAndPassword,
} from "../../utilz/firsbase/firebase.utils";
import SignUpForm from "../../components/signUp/SignUpForm.component";
import { FcGoogle } from 'react-icons/fc'
import './SignIn.styles.scss'

function SignIn() {

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
    console.log(user);
  };

  async function handleSignUpForm({ displayName, email , password }){
    const { user }  = await createAuthUserWithEmailAndPassword(email, password);
    const userDocRef = await createUserDocumentFromAuth(user, { displayName });
  }

  return (
    <div className="sign-in-container">
      <SignUpForm onSubmitHandler={handleSignUpForm}/>
      <SignUpForm onSubmitHandler={handleSignUpForm} type='signin' />
      <div className="sign-in-container-google">
      <h1>Sign in directly with google</h1>
      <button onClick={logGoogleUser}><FcGoogle style={{ fontSize : '18px'}} /> Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}><FcGoogle /> Sign in with Google Redirect</button>
    </div>
    </div>
  );
}

export default SignIn;
