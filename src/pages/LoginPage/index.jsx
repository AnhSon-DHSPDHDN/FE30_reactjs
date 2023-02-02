import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.scss'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    // Check dieu kien login
    // VD: username = admin,
    // Pass = admin
    navigate('/')
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleLogin} className='login-form'>
        <label>Username: </label>
        <input type={"text"} />
        <label>Password: </label>
        <input type={"password"} />
        <button type='submit'>Submit</button>
        <div className='login-form__link'>
          <Link to='/login-layout/register'>You don't have account?</Link>
        </div>
      </form>

    </div >
  )
}

export default LoginPage
