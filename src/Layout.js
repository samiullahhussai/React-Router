import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import React from 'react'
import Footer from "./components/Footer/Footer";

function Layout() {
    return (
      <>
      <Header />
            <Outlet />
            <Footer/>
            </>
  )
}

export default Layout