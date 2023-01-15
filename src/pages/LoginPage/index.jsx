import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div>
      <form onSubmit={handleLogin}>
        <label>Username: </label>
        <input type={"text"} />
        <label>Password: </label>
        <input type={"password"} />
        <button type='submit'>Submit</button>
      </form>
      <Link to='/login-layout/register'>You don't have account?</Link>
    </div >
  )
}

export default LoginPage
