import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BytContextProvider } from "../src/Context/BytContext";
import { UserContextProvider } from "../src/Context/UserContext";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyA0HBtnJzshbkiZXhFrBpaTO9q_U5kz-n0",
  authDomain: "bytterapp.firebaseapp.com",
  projectId: "bytterapp",
  storageBucket: "bytterapp.appspot.com",
  messagingSenderId: "134938456952",
  appId: "1:134938456952:web:1528ed756f8efc7f79ce8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <BytContextProvider>
        <App />
      </BytContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

