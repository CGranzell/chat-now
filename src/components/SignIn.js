import React from 'react'

import { auth } from '../api/api'
import firebase from '../api/api'
import classes from './SignIn.module.css'

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button onClick={signInWithGoogle} className={classes.btn}>Sign In With Google</button>
    </>
  )
}

export default SignIn;