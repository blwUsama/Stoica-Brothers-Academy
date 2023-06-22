import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({Open, toggleFunction}) {
    let className = Open ? "dropdown-menu open" : "dropdown-menu closed"
    return(
        <div className={className}>
            <Link to="/about"  onClick={toggleFunction}> Despre noi </Link>
            <a> Antrenori </a>
            <a> Tarife </a>
            <a> Program </a>
            <a> Galerie </a>
            <a> Contact </a>
        </div>
    )
}

export default Dropdown;