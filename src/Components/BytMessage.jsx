import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BytContext } from '../Context/BytContext';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../index';

export default function BytMessage({byt}) {
  const {loading, setLoading} = useContext(BytContext)

  const [user, setUser] = useState({})

  const getSingleUser = async () => {

      try {
      const docRef = doc(db, "users", byt.userName);
      const docSnap = await getDoc(docRef);
      const userInfo = docSnap.data()
      setUser(userInfo) 
      } catch(err) {
        console.log(err)
      }
  }
  
  useEffect(() => {
    getSingleUser()
  }, [byt])
 
  const handleDeleteByt = async () => {
    setLoading(true)
    await deleteDoc(doc(db, "tweets", byt.id))
    setLoading(false)
  }

  return ( //the repeating structure of the displayed messages list
    <div className='individualByt'>
      <label>
        <div className='boxBoy'>
          <div className='userName'>{user.userName}</div>
          <div className='note'>{byt.content}</div>
          <p className='date'>{byt.date}</p>
          <img src={user.image} alt={"Profile Image"} className='image'/>
          {loading && (<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>)}
          <Button className="deleteBytButton" onClick={handleDeleteByt}>Delete Byt</Button>
        </div>
      </label>
    </div>
  );
}
