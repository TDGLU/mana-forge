import React from 'react'

function Login() {
  return (
    <div className='loginSignUpContainer'>
      <div className='loginSignUpTitle'>Login</div>
      <input className='usernameInput' placeholder='Username'></input>
      <input className='passwordInput' placeholder='Password'></input>
      <button className='signUpLoginButton'>Login</button>
    </div>

  )
}

export default Login