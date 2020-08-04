import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  return (
    <nav>
    <div class="nav-wrapper grey">
        <Link 
            to="/About" 
            className="brand-logo right"
        >
            Mónica Polanco Fabián
        </Link>
      <ul id="nav-mobile" class="hide-on-small-and-down">
      <li>
                <Link 
                    to="/About" 
                    className={location.pathname === "/About" || location.pathname === "/About" ? "nav-link active" : "nav-link"}
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    to="/Portfolio" 
                    className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </Link>                
            </li>
            <li>
                <Link 
                    to="/Contact" 
                    className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </Link>  
            </li>      
            <li id="resume">
            <a href="./Assets/Resume.pdf">Résumé</a>
            </li>                 
      </ul>
    </div>
  </nav>
  );
}

export default Nav;