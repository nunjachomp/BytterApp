import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../index"
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "users", res.user.uid), {
        email: email,
        password: res.user.reloadUserInfo.passwordHash
      });
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="outerSignUpContainer" onSubmit={handleSignUp}>
    <div className="signUpContainer">
      <div className="signUpText">Sign up for Free!</div>
      <div className="signUpInputBox">
        <div>Sign up email</div>
        <input type="email" className="signUpUserName" placeholder="email@mail.com" value={email} onChange={e => setEmail(e.target.value)} required></input>
        <div className='reminder'>Make a password you'll remember!</div>
        <input type="password" className="signUpPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required></input>
        <button className="signUpButton" type="submit">Sign Up!</button>
      </div>
    </div>
  </form>
  )
}

export default SignUp