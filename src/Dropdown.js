import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Dropdown({isOpen, toggleFunction}) {
    
    let className = isOpen ? "dropdown-menu open" : "dropdown-menu closed"

    function handleMenuBack(event) {
        event.preventDefault();
        if(isOpen)
        {
            event.preventDefault();
            toggleFunction();
            //   setIsOpen(false);
            //   window.history.replaceState(null, "", window.location.href); // Prevent navigating back in history
            // console.log(`class after back ${className}`);
        }
      }
    
      useEffect(() => {
        // console.log(`class before back: ${className}`)
        window.addEventListener("popstate", toggleFunction);
    
        return () => { // i think this removal is redundant because the navbar never 
                       // unmounts but it's still good practic
          window.removeEventListener("popstate", toggleFunction);
        }
      }, [])

      useEffect(() => {
        // console.log(`class changed to ${className}`);
      }, [className]);
    

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