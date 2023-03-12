import React from 'react'

function Login() {
  return (
    <div className='loginSignUpContainer'>
      <h3 className='loginSignUpTitle'>Login</h3>
      <input className='usernameInput' placeholder='Username'></input>
      <input className='passwordInput' placeholder='Password'></input>
      <button className='signUpLoginButton'>Login</button>
    </div>

  )
}

export default Login