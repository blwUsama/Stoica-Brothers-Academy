import React from 'react';

function Dropdown({Open}) {
    let className = Open ? "dropdown-menu open" : "dropdown-menu closed"
    return(
        <div className={className}>
            <a> Despre noi </a>
            <a> Antrenori </a>
            <a> Tarife </a>
            <a> Program </a>
            <a> Galerie </a>
            <a> Contact </a>
        </div>
    )
}

export default Dropdown;