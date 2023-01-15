import React, { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const [hamburger, setHamburger] = useState(()=><RxHamburgerMenu key='1'/>)
   
    let hiddenDropdown = document.getElementsByClassName('dropdown')
    // console.log(hiddenDropdown)
    function toggleDropdown(){
              hiddenDropdown[0]
              .classList
              .toggle('dropdown-hidden')
              // console.log('Clicked hamburger')

      if(hamburger.key === '1'){
      setHamburger(<RxCross1 key='2'/>)
        } else if(hamburger.key === '2'){
        setHamburger(<RxHamburgerMenu key='1' />)
      }

      console.log(hamburger.key)
    }

     
  return (
    <div className="parentNavbar">
    <div className='navbar'>
      <img className="logo" src="../assets/logo.png" alt="logo"/>
      <h1 className='hamburger' onClick={toggleDropdown}>{hamburger}</h1>
    </div>
    {/* <Dropdown/> */}
    </div>
  )
}

export default Navbar
