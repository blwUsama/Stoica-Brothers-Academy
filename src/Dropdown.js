import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({Open, toggleFunction}) {
    let className = Open ? "dropdown-menu open" : "dropdown-menu closed"
    return(
        <div className={className}>
            <Link to="/"  onClick={toggleFunction}> Acasa </Link>
            <Link to="/about"  onClick={toggleFunction}> Despre noi </Link>
            <Link to="/antrenori" onClick={toggleFunction}> Antrenori </Link>
            <Link to="/antrenamente" onClick={toggleFunction}> Antrenamente </Link>
            <a> Galerie </a>
            <a> Contact </a>
        </div>
    )
}

export default Dropdown;