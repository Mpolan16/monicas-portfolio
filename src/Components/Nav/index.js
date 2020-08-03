import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-dark fixed-top">    
        <a className="navbar-brand" id="navbar_name" href="/">Mónica Polanco Fabián</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-5">
                    <Link 
                        to="/About" 
                        className={location.pathname === "/About" || location.pathname === "/About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item mr-5">
                    <Link 
                        to="/Portfolio" 
                        className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </Link>                
                </li>
                <li className="nav-item mr-5">
                    <Link 
                        to="/Contact" 
                        className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>  
                </li>      
                <li className="nav-item mr-5">
                <a href="./Assets/Resume.pdf" class="black-text text-lighten-3">Résumé</a>
                </li>                 
            </ul>
            </div>
    </nav>
  );
}

export default Nav;