import React from 'react'
import { Outlet } from 'react-router-dom'
import './LoginLayout.css'

function LoginLayout() {
  // Login Page va Register page duoc bao boc boi LoginLayout
  return (
    <div>
      <h1>LoginLayout</h1>
      <Outlet />
    </div>
  )
}

export default LoginLayout
