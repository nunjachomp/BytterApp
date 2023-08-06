import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BytContextProvider } from "../src/Context/BytContext";
import './index.css';
import App from './App';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA0HBtnJzshbkiZXhFrBpaTO9q_U5kz-n0",
    authDomain: "bytterapp.firebaseapp.com",
    projectId: "bytterapp",
    storageBucket: "bytterapp.appspot.com",
    messagingSenderId: "134938456952",
    appId: "1:134938456952:web:1528ed756f8efc7f79ce8d"
  };

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <BytContextProvider>
    <App />
    </BytContextProvider>
    </BrowserRouter>
);

