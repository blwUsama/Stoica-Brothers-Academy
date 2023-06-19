import React, { useState } from 'react';
import Dropdown from './Dropdown'
import logo from './images/logo-cut.png';
import hamburger from './images/hamburger.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    if(isOpen)
      {
        setIsOpen(false);
      }
    else
      setIsOpen(true);
    
  }

    return(
        <nav className='nav-bar'>
        <div className='nav-container'>
          <img className='nav-logo' src={logo} />
          <div id='empty-nav-space'></div>
          <a> Despre noi </a>
          <a> Antrenori </a>
          <a> Tarife </a>
          <a> Program </a>
          <a> Galerie </a>
          <a> Contact </a>
          <img className="hamburger" src={hamburger} onClick={handleMenuToggle}/>
          {isOpen ? ( <Dropdown Open = {true}/>) : ( <Dropdown Open = {false}/>)}
        </div>
      </nav>
    )
}

export default Navbar;