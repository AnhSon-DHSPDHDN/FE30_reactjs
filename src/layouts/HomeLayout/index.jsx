import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const HomeLayout = (props) => {
  const isLogged = useSelector(state => state.users.isLogged)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      console.log('navigate');
      navigate('/login-layout')
    }
  }, [])

  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

export default HomeLayout
