import React from 'react'
import "./CSS/LoginSignUp.css"

export const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-Fields">
          <input type="text" placeholder='Your Name ' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginSignUp-login">Already have an account <span>Login Here</span></p>
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms,conditions of privacy policy</p>
        </div>

      </div>
    </div>
  )
}
