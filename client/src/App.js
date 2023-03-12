import { React, useState } from 'react';
import { BrowserRouter as Route, Navigate, Outlet}
from 'react-router-dom';
import Home from "./pages/Home"
import './App.css';
import './pages/SignUpLogin.css';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Featured from './pages/Featured';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (

    <div>
    <Navbar>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Featured/>} />
      <Route path='/projects' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Navigate to='/'/>
    </Navbar>
    <Outlet />

    </div>
    );
}


export default App;
