import React from 'react'

function SignUp() {
  return (
    <div className='loginSignUpContainer'>
      <h3 className='loginSignUpTitle'>Sign Up</h3>
      <input className='usernameInput' placeholder='Username'></input>
      <input className='emailInput' placeholder='Email'></input>
      <input className='passwordInput' placeholder='Password'></input>
      <button className='signUpLoginButton'>Sign Up</button>
    </div>
  )
}

export default SignUp