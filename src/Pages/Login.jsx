import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context/UserContext'
import { auth } from "../index"
import "./Login.css";
import '../Images/gwiggs.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUserId} = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const userId = res.user.uid
      localStorage.setItem("userid", userId)
      setUserId(userId)
    } catch (err) {
      console.log(err)
    }
    navigate('/all-a-byt-me')
  }


  return (
    <form className="outerLoginContainer" onSubmit={handleLogin}>
      <div className="loginWelcome">Welcome to Bytter™! <br/>The Loud Speaker of the internet!</div>
      <div className="loginContainer">
        <div className="loginText">Login</div>
        <div className="loginInputBox">
          <input type="email" className="loginUserName" placeholder="email@mail.com" value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" className="loginPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button className="loginButton">Enter The BytterVerse</button>
          <p className="or">- Or -</p>
          <div><img src={require('../Images/gwiggs.png')}  width="120" height="30"  className="googleButton"/></div>
        </div>
      </div>
    </form>
  );
};

export default Login;
