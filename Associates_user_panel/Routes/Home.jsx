/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage from '../Components/HeroImage'
import Services from '../Components/Services'
import Intro from '../Components/Intro'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <Services/>
      <Intro/>
    </div>
  )
}

export default Home
