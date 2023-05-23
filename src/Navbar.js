import React from 'react';
import logo from './images/logo-cut.png';
import hamburger from './images/hamburger.png'

function Navbar() {
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
          <img className="hamburger" src={hamburger}/>
        </div>
      </nav>
    )
}

export default Navbar;