import React from 'react';
import Header from './Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';



export default function Layout() {

  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
