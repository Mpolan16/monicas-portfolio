import React from 'react';
import { Col, Row, Container } from "../Grid";

function ContactBox(){
    return(
        <Container>
            <Row>
                <Col>
                <form action="mailto:mailto:monicapolancofabian15@gmail.com" method="post" enctype="text/plain">
                    <label for="name">Name</label>
                    <input type="text" id="fname" name="name" placeholder="Name">
                    <label for="lname">Email</label>
                    <input type="text" id="emailentry" name="email" placeholder="email">
                    <label for="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="" style="height:200px"></textarea>
                    <button className="waves-effect waves-light btn-small blue" type="submit">Button</button>
                </form>
                </Col>
            </Row>
     </Container>
    );
}

export default ContactBox;