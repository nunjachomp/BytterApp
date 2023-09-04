import React, { useEffect, useContext } from 'react';
import BytList from '../Components/BytList';
import AddBytForm from '../Components/AddBytForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BytContext } from '../Context/BytContext';
import { UserContext } from '../Context/UserContext';
import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import {db} from '../index'

function BytPage() {
  const {setTweets, loading, setLoading} = useContext(BytContext)
  const {userId} = useContext(UserContext)
  const tweetsCollection = collection(db, 'tweets')

  async function addByt(bytMessage) {
    const newTweet = { content: bytMessage, userName: userId, date: new Date().toISOString()}

    try {
      setLoading(true)
      const tweetRef = await addDoc(tweetsCollection, newTweet);
    } catch (error) {
      toast("Error Posting Byt!");
    }
    setLoading(false)
  }

  useEffect(()=>{
    const q = collection(db, "tweets")
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const tweetsArray = [];
    querySnapshot.forEach((tweet) => {
      const tweetWithId2 = {
        id: tweet.id, ...tweet.data()
      }
    tweetsArray.push(tweetWithId2);
  });
  setTweets(tweetsArray)
});
return () => {unsubscribe()}
},[])

  return (
    <>
      <div className='container'>
        <AddBytForm addByt={addByt} />
      </div>
      <div className='ListItem'>
        <BytList /> 
      </div>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default BytPage;
