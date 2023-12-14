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
import Contact from './components/Contact';
import RequestCourse from './components/RequestCourse';
import Subscribe from './payments/Subscribe';
import PaymentSuccess from './payments/PaymentSuccess';
import PaymentFail from './payments/PaymentFail';
import NotFound from './components/NotFound';
import CoursePage from './components/CoursePage';
import Profile from './profile/Profile';
import ChangePassword from './profile/ChangePassword';
import UpdateProfile from './profile/UpdateProfile';
function App() {
  // window.addEventListener('contextmenu', e =>{
  //   e.preventDefault();
  // });
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
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<RequestCourse />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='/course/:id' element={<CoursePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
