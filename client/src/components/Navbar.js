import React from 'react';
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Navbar() {
  return (
    <>
      <nav
      className='navbar' >
      <Link className='home-btn' to ='/'>Home</Link>
        <ul>
          <li>
            <Link to ='/featured'>Featured</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar