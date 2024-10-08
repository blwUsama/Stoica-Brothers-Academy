import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './styles/Navbar.css';
import Dropdown from './Dropdown'
import logo from './images/logo-cut.png';
import hamburger from './images/hamburger.png'
import {Link} from 'react-router-dom';

function Navbar() {

  // state that toggles the dropdown menu from visible to hidden
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
          <Link to="/"> Acasa </Link>
          <Link to="/about"> Despre noi </Link>
          <Link to="/antrenori"> Antrenori </Link>
          <Link to="/program"> Program </Link>
          <Link to="/preturi"> Preturi </Link>
          <Link to="/contact"> Contact </Link>
          <img className="hamburger" src={hamburger} onClick={handleMenuToggle}/>
          {isOpen ? ( <Dropdown isOpen = {true} toggleFunction={handleMenuToggle}/>) : ( <Dropdown isOpen = {false}/>)}
        </div>
      </nav>
    )
}

export default Navbar;