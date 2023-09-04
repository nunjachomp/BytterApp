import React, {useContext} from "react";
import "./WelcomePage.css";
import {Link} from 'react-router-dom';
import { UserContext } from "../Context/UserContext";

const WelcomePage = () => {
  const {userName} = useContext(UserContext)

  return (
    <div className="welcomePageContainer">
      <div className="greetingText">Welcome back <br/>{userName}!</div>
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
