import React from 'react'
import Hero from './../components/Page_Home/Hero/Hero';
import About from './../components/Page_Home/About/About';
import Reservation from './../components/Page_Home/Reservation/Reservation';
import Menu from '../components/Page_Home/Menu/Menu';
import Today from '../components/Page_Home/Today/Today';

export default function Home() {
  return (
    <article>
      <Hero />
      <About />
      <Reservation />
      <Menu />
      <Today />
    </article>
  )
}
