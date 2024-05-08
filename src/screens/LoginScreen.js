import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen'; // Import your SignInScreen component here

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginscreen'>
            <div className="loginscreen_background">
                <img className='loginscreen_logo' src="https://fbi.cults3d.com/uploaders/27512146/illustration-file/4cd53c3b-bd3c-4cf1-999e-e9160186fbd0/Netflix-logo.png" alt="" />
                <button onClick={() => setSignIn(true)} className='loginscreen_button'>Sign In</button>
            </div>

            <div className="loginscreen_gradient">
            </div>
            <div className="loginscreen_body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <form className="loginscreen_input">
                            <input className="loginscreen_inputEmail" type="text" placeholder="Email address" />
                            <button onClick={() => setSignIn(true)} className="loginscreen_inputButton">GET STARTED</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;
