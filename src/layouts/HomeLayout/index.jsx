import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const HomeLayout = (props) => {
  return <>
    <Header />
    {props.children}
    <Footer />
  </>
}

export default HomeLayout
