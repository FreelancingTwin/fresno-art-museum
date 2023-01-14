import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(<RxHamburgerMenu/>)
    
    const hamburgerToggle = () => {
        toggleDropdown()
      if( hamburger.type.name === 'RxHamburgerMenu'){
        setHamburger(<RxCross1/>)
        } else {
        setHamburger(<RxHamburgerMenu/>)
        
      }
    }

    function toggleDropdown(){
      document.getElementsByClassName('dropdown')[0]
              .classList
              .toggle('dropdown-hidden')
    }
  return (
    <div className="parentNavbar">
    <div className='navbar'>
      <img className="logo" src="src/views/assets/logo.png" alt="logo"/>
      <h1 className='hamburger' onClick={hamburgerToggle}>{hamburger}</h1>
    </div>
    {/* <Dropdown/> */}
    </div>
  )
}

export default Navbar
