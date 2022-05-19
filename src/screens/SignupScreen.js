import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import "./SignupScreen.css"

const SignupScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()


    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then( () => {})
        .catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => { navigate('/') })
        .catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <div className="signupScreen__rememeber">
                    <div>
                        <input type="checkbox"/>
                        <label className="signupScreen__rememberLabel">Remember me</label>
                    </div>
                    <span href="#">Need help?</span>
                </div>
                <div className="signupScreen__new">
                    <h4>New to netflix? <span onClick={register}>Sign up now.</span></h4>
                </div>
            </form>
        </div>
    )
}

export default SignupScreen