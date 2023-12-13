import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Course from "./components/Course";
import Login from './auth/Login';
import Register from "./auth/Register";
import ForgetPassword from './auth/ForgetPassword';
import ResetPassword from './auth/ResetPassword';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
