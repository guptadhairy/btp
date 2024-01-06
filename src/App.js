import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import Dashboard from './admin/Dashboard';
import CreateCourse from './admin/CreateCourse';
import Users from './admin/Users';
import AdminCourses from './admin/AdminCourses';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from "protected-route-react"
import AboutUs from './components/AboutUs';
// import Loader from './components/Loader';

function App() {
  // window.addEventListener('contextmenu', e =>{
  //   e.preventDefault();
  // });

  const { isAuthenticated, user, message, error } = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/courses' element={<Course />} />
              <Route path='/login' element={
                <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                  <Login />
                </ProtectedRoute>
              } />
              <Route path='/register' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <Register />
              </ProtectedRoute>} />
              <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <ForgetPassword />
              </ProtectedRoute>} />
              <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <ResetPassword />
              </ProtectedRoute>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/request' element={<RequestCourse />} />
              <Route path='/subscribe' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <Subscribe user={user} />
              </ProtectedRoute>} />
              <Route path='/paymentsuccess' element={<PaymentSuccess />} />
              <Route path='/paymentfail' element={<PaymentFail />} />
              <Route path='/course/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                <CoursePage user={user} />
              </ProtectedRoute>} />
              <Route path='/profile' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user}/>
                </ProtectedRoute>
              } />
              <Route path='/changepassword' element={<ChangePassword />} />
              <Route path='/updateprofile' element={<UpdateProfile user={user} />} />

              <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === "admin"}>
                <Dashboard />
              </ProtectedRoute>} />
              <Route path='/admin/createcourse' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === "admin"}>
                <CreateCourse />
              </ProtectedRoute>} />
              <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === "admin"}>
                <Users />
              </ProtectedRoute>} />
              <Route path='/admin/courses' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === "admin"}>
                <AdminCourses />
              </ProtectedRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
    </Router>
  );
}

export default App;
