import React, { useEffect, useContext } from 'react';
import BytList from '../Components/BytList';
import AddBytForm from '../Components/AddBytForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BytContext } from '../Context/BytContext';

function BytPage() {
  const {userName, setTweets, rerenderFlag, setRerenderFlag, loading, setLoading} = useContext(BytContext)

  async function addByt(bytMessage) {
    try {
      const response = await axios.post(
        'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet',
        {
          content: bytMessage,
          userName: userName,
          date: new Date().toISOString()
        }
      );
      setTweets(prevTweets => [
        ...prevTweets,
        {
          content: bytMessage,
          date: new Date().toLocaleDateString()
        }
      ]);
      setRerenderFlag(prevState => !prevState); // Update the rerender flag
    } catch (error) {
      toast("Error Posting Byt!");
    }
  }

  const fetchBytListServer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet'
      );
      const { tweets } = response.data;
      setTweets(tweets);
    } catch (error) {
      toast("Error Fetching Byts! Check Internet Connection");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBytListServer();
    const bytRefresh = setInterval(fetchBytListServer, 10000);
    return () => clearInterval(bytRefresh)
  }, [rerenderFlag]);

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
