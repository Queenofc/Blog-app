import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
  <div className='auth'>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='password'/>
      <button>Login</button>
      <p>Don't have an account?</p>
      <span> Click here to  <Link to ="/Register"> Register</Link>  </span>
    </form>
  </div>
  )
  
}

export default Login