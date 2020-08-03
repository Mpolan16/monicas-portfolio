import React from "react";
import { Col, Row, Container } from "../Grid";
import headshot from '../../Images/Portfolio_Headshot_HD.png'

function AboutMe() {

  return (
    <Container>
      <Row>
        <Col size="sm-12 center">
          <div>
          <h4 id="aboutMeHeader">About me</h4>
                <br/>
                {/* <!--Image here--> */}
                <img src={headshot} className="img" alt="Monica Polanco" width="400"/>
                <br/><br/>
                {/* <!--About me text--> */}
                <p>
                    I am a Full-Stack Web Developer with a BA from the College of the Holy Cross in Worcester, MA. I recently graduated from UNC Chapel Hill with a certificate in Web Development and developed skills in JavaScript, HTML, CSS, jQuery, Web APIs, Node.js, MySQL, Mongo, React.js, Bootstrap, Git, Express, and Jest, to develop MERN apps serving a variety of platforms. Most recently, I worked with a team of four to develop The Tutor Tracker, a student management system web application designed for educators to organize one on one meetings with their students on an interactive calendar. Known as a team player who is passionate about creating innovative web apps, I am excited to apply what I’ve learned to new opportunities in web development. I love hanging out with my cat, eating spicy food, and learning new languages. I am open to remote opportunites.
                </p>
          </div>
        </Col>
       </Row>
    </Container>

  );
}

export default AboutMe;