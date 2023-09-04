import { Routes, Route } from "react-router-dom";
import BytPage from "./Pages/BytPage";
import NavBar from "./Components/NavBar";
import MyByts from "./Pages/MyByts";
import WelcomePage from "./Pages/WelcomePage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Pages/PrivateRoute";

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<PrivateRoute><WelcomePage /></PrivateRoute>} />
        <Route path="/all-a-byt-me" element={<PrivateRoute><MyByts /></PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute><BytPage /></PrivateRoute>} />
      </Routes>
    </>
  );
};

export default App;
