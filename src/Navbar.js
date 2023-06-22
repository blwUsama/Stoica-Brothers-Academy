import React, { useState } from 'react';
import './styles/Navbar.css';
import Dropdown from './Dropdown'
import logo from './images/logo-cut.png';
import hamburger from './images/hamburger.png'
import {Link} from 'react-router-dom';

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
          <Link to="/" onClick={() => {if(isOpen) handleMenuToggle(); }}> <img className='nav-logo' src={logo} /> </Link>
          <div id='empty-nav-space'></div>
          <Link to="/about"> Despre noi </Link>
          <a> Antrenori </a>
          <a> Tarife </a>
          <a> Program </a>
          <a> Galerie </a>
          <a> Contact </a>
          <img className="hamburger" src={hamburger} onClick={handleMenuToggle}/>
          {isOpen ? ( <Dropdown Open = {true} toggleFunction={handleMenuToggle}/>) : ( <Dropdown Open = {false}/>)}
        </div>
      </nav>
    )
}

export default Navbar;