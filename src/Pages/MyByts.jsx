import React, { useRef, useContext } from "react";
import { BytContext } from "../Context/BytContext";
import "./MyByts.css";

const MyByts = () => {
  const {userName, setUserName} = useContext(BytContext)
  const userNameInputRef = useRef('')

  const handleUserNameChange = () => {
      const newUserName = userNameInputRef.current.value;
      setUserName(newUserName);
      localStorage.setItem('savedUserName', JSON.stringify(newUserName));
      userNameInputRef.current.value =('')
    };

  return (
    <div className="outerUserNameContainer">
        <div className="introUserNameTest">A username can say a lot about who you are, and what you're about. <br/>A good username will make people remember you for years to come.</div>
      <div className="addUserNameBox">
        <input type="text" className="addUserName" placeholder="Don't worry, you can change this later!" ref={userNameInputRef} ></input>
        <button className="setUserNameButton" onClick={handleUserNameChange}>Add UserName!</button>
      </div>
      <div className="currentUser">UserName: {userName}</div>
    </div>
  );
};

export default MyByts;


