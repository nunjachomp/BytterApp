import React, { useContext, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, db } from '../index'
import { UserContext } from "../Context/UserContext";
import "./MyByts.css";

const MyByts = () => {
  const {userId, userName} = useContext(UserContext)
  const [userNameText, setUserNameText] = useState(userName || '')
  const [userImage, setUserImage] = useState('')
 
  const uploadPhotoandUserName = async (e) => {
    e.preventDefault()
    const storageRef = ref(storage, `/images/${userImage.name}`)
    await uploadBytes(storageRef, userImage)
    const imageUrl = await getDownloadURL(storageRef)
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      image: imageUrl,
      userName: userNameText
    });
  }
  
  return (
    <div className="outerUserNameContainer">
        <div className="introUserNameTest">A good username and photo says a lot about who you are. <br/>People will remember you for years to come!</div>
      <div className="addUserNameBox">
        <input type="text" className="addUserName" placeholder="Don't worry, you can change this later!" value={userNameText} onChange={e => setUserNameText(e.target.value)}></input>
        <button className="setUserNameButton" onClick={uploadPhotoandUserName}>Add UserName!</button>
      </div>
      <div className="addProfPicBox" onChange={e => {setUserImage(e.target.files[0])}}>
        <input type="file" className="addProfPic" placeholder="Select Profile Pic"></input>
      </div>
    </div>
  );
};

export default MyByts;


