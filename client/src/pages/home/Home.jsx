import React from 'react'
import About from '../../components/about/About';
import Header from '../../components/header/Header';
import Navbar from '../../components/nav/Navbar';

function Home() {
  return (
    <div className='dark:bg-black'>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default Home