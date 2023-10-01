import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({isOpen, toggleFunction}) {
    let className = isOpen ? "dropdown-menu open" : "dropdown-menu closed"
   
   

    return(
        <div className='parent-container'>
            <div className={className}>
                <Link to="/"  onClick={toggleFunction}> Acasa </Link>
                <Link to="/about"  onClick={toggleFunction}> Despre noi </Link>
                <Link to="/antrenori" onClick={toggleFunction}> Antrenori </Link>
                <Link to="/antrenamente" onClick={toggleFunction}> Antrenamente </Link>
                <Link to="/contact" onClick={toggleFunction}> Contact </Link>
            </div>

            {/* this div is created just to offer a clickable area for 
                closing the dropdown menu beside the hamburger icon. It occupies
                20% of the width, the dropdown menu having 80% */}
            
            <div className={ isOpen ? "open rest-of-width" : "closed rest-of-width"} onClick={toggleFunction}>

            </div>
        </div>
    )
}

export default Dropdown;