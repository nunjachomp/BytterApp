import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BytContext } from "./Context/BytContext";
import BytPage from "./Pages/BytPage";
import NavBar from "./Components/NavBar";
import MyByts from "./Pages/MyByts";
import WelcomePage from "./Pages/WelcomePage";

const App = () => {
  const {userName, storedUserName} = useContext(BytContext)
  
  useEffect(() => {
    localStorage.setItem('saveadUserName', JSON.stringify(userName));
  }, [userName, storedUserName]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<BytPage />} />
        <Route path="/all-a-byt-me" element={<MyByts />} />
      </Routes>
    </>
  );
};

export default App;
