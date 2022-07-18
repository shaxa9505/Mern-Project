import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Login from './components/Login';

function App(props) {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;