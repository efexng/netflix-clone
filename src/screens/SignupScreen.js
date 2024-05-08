import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../firebase';

function SignupScreen () {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  }
  return (
    <div className='SignupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="text" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <button type='submit' onClick={signIn} className="signupscreen_gSignInButton">Sign In</button>

        <h4> <span className='SignupScreen_gray'>New to Netflix?</span> <span className='SignupScreen_link' onClick={register} >Sign Up now</span></h4>
      </form>
    </div>
  )
}

export default SignupScreen 
