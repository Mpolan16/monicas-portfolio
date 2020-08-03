import React from 'react';



function Footer() {
    return (
        <footer className="footer">
        <div className="container">
        <div className="row">
          <div className="col l4 offset-l2 s12" id="footerIcons">
            <a className="right black-text text-lighten-3" href="https://www.linkedin.com/in/monicapolancofabian/"><i className="fab fa-linkedin"></i></a>
            <a className="right black-text text-lighten-3" href="https://github.com/Mpolan16"> <i className="fab fa-github"></i></a>
            <a className="right black-text text-lighten-3" href="mailto:monicapolancofabian15@gmail.com"><i className="far fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center black-text text-lighten-3">
        © 2020 Copyright
        </div>
      </div>
        </footer>
    );
}

export default Footer;