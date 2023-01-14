import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(<RxHamburgerMenu/>)
    
    const hamburgerToggle = () => {
        toggleDropdown()
      if(hamburger.type.name === 'RxHamburgerMenu'){
        setHamburger(<RxCross1/>)
        } else {
        setHamburger(<RxHamburgerMenu/>)
        
      }
    }
    let hiddenDropdown = document.getElementsByClassName('dropdown')
    console.log(hiddenDropdown[0])
    function toggleDropdown(){
              hiddenDropdown[0]
              .classList
              .toggle('dropdown-hidden')
    }
    // hiddenDropdown[0].addEventListener('blur', ()=>{
    //   console.log('araaraara')
    //   hiddenDropdown[0].classList.add('dropdown-hidden')
    // })
    // document.body.addEventListener('onfocus', ()=>{
    //   console.log('araaraara')
    //   // hiddenDropdown[0].classList.add('dropdown-hidden')
    // })
  return (
    <div className="parentNavbar">
    <div className='navbar'>
      <img className="logo" src="../assets/logo.png" alt="logo"/>
      <h1 className='hamburger' onClick={hamburgerToggle}>{hamburger}</h1>
    </div>
    {/* <Dropdown/> */}
    </div>
  )
}

export default Navbar
