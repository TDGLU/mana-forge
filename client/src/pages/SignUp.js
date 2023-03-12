import React from 'react'

import './SignUpLogin.css';

function SignUp() {
  return (
    <div className='loginSignUpContainer'>
      <div className='loginSignUpTitle'>Sign Up</div>
      <input className='usernameInput' placeholder='Username'></input>
      <input className='emailInput' placeholder='Email'></input>
      <input className='passwordInput' placeholder='Password'></input>
      <button className='signUpLoginButton'>Sign Up</button>
    </div>
  )
}

export default SignUp