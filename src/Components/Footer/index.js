import React from 'react';
import { Col, Row, Container } from "../Grid";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="col l4 offset-l2 s12" id="footerIcons">
            <a className="right black-text text-lighten-3" href="https://www.linkedin.com/in/monicapolancofabian/"><i className="fab fa-linkedin"></i></a>
            <a className="right black-text text-lighten-3" href="https://github.com/Mpolan16"> <i className="fab fa-github"></i></a>
            <a className="right black-text text-lighten-3" href="mailto:monicapolancofabian15@gmail.com"><i className="far fa-envelope"></i></a>
          </Col>
        </Row>
        <div className="footer-copyright">
          <div className="container center black-text text-lighten-3">© 2020 Copyright</div>
        </div>
      </Container>
    </footer>
    );
}

export default Footer;