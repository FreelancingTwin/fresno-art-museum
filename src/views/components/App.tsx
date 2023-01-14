import React from 'react'

import Hero from "./Hero"
import Navbar from './Navbar'
import Banner from './Banner'
import Programs from './Programs'
import Footer from './Footer'
import Dropdown from "./Dropdown"
const App = () => {
  return (
    <div>
    <Navbar />
    <Banner />
    <Dropdown/>
    <Hero />
    <Programs/>
    <Footer/>
    </div>
  )
}

export default App
