import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({Open, toggleFunction}) {
    let className = Open ? "dropdown-menu open" : "dropdown-menu closed"
    return(
        <div className={className}>
            <Link to="/about"  onClick={toggleFunction}> Despre noi </Link>
            <a> Antrenori </a>
            <Link to="/preturi"  onClick={toggleFunction}> Preturi </Link>
            <Link to="/program" onClick={toggleFunction}> Program </Link>
            <a> Galerie </a>
            <a> Contact </a>
        </div>
    )
}

export default Dropdown;