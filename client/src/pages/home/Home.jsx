import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/nav/Navbar';

function Home() {
  return (
    <div className='dark:bg-black'>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home