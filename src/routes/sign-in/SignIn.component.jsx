import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth  } from '../../utilz/firsbase/firebase.utils'

function SignIn(){
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }
    return (
        <div className="sign-in-container">
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn