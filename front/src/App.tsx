import React from 'react';
import './core/assets/styles/styles.scss';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./Routes";

function App() {
  return (
    <>
        <ToastContainer />
        <Routes/>
    </>
  );
}

export default App;
