import React, {useContext} from "react";
import "./WelcomePage.css";
import {Link} from 'react-router-dom';
import { BytContext } from "../Context/BytContext";

const WelcomePage = () => {
  const {userName} = useContext(BytContext)

  return (
    <div className="welcomePageContainer">
      <div className="greetingText">Welcome back {userName}!</div>
      <div className="getBytting">
        <div className="directTo">Jump back in to the conversation!</div>
        <Link to="/home">
        <button className="getByttingButton">Get Bytting!</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
