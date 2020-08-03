import React from 'react';
import { Col, Row, Container } from "../Grid";

function ProjectCards(){
    return(
      <Container>
        <Row>
          <Col size="s12">
          {/* enter first card here */}
            <div className="card">
              <div className="card-image">
                <img src="../../Images/Tutor_Tracker_ScreanShot.png" alt="tutortracker"/>
                <span className="card-title purple">The Tutor Tracker</span>
              </div>
              <div className="card-action">
                <a href="https://github.com/Mpolan16/project2-jjem">GitHub</a>
                <a href="https://afternoon-eyrie-99732.herokuapp.com/">Website</a>
                <div className="card-content">
                  <p><i className="fas fa-tools"></i>     Express-Handlebars, Express, Node.js, Sequelize, FullCalendar.io, Moment.js, Bootstrap, JQuery, Javascript, HTML, CSS, and Heroku </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      /* <div className="row">
         <!-- Empty col 1 -->
         <div className="col-sm-3"></div>
         <!-- About me col 2-->
         <div className="col-sm-6">
            <h4 id="aboutMeHeader">Portfolio</h4>
               <!-- Card 1 here (Most Recent: PROJECT 3 HERE)-->
               <!-- <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                      <img src="">
                      <span className="card-title blue"></span>
                    </div>
                    <div className="card-action">
                      <a href="">GitHub</a>
                      <a href="">Website</a>
                    </div>
                  </div>
                </div>
              </div>              -->
               <!-- Card 2 here (PROJECT 2 HERE)-->
               <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                      <img src="Tutor_Tracker_ScreenShot.png">
                      <span className="card-title purple">The Tutor Tracker</span>
                    </div>
                    <div className="card-action">
                      <a href="https://github.com/Mpolan16/project2-jjem">GitHub</a>
                      <a href="https://afternoon-eyrie-99732.herokuapp.com/">Website</a>
                      <div className="card-content">
                        <p><i className="fas fa-tools"></i>     Express-Handlebars, Express, Node.js, Sequelize, FullCalendar.io, Moment.js, Bootstrap, JQuery, Javascript, HTML, CSS, and Heroku </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
               <!-- Card 3 (PROJECT 1) here -->
               <div className="row">
                <div className="col s12 m7">
                  <div className="card">
                    <div className="card-image">
                      <img src="Screen Shot 2020-05-02 at 9.06.15 PM.png">
                      <span className="card-title">Savor</span>
                    </div>
                    <div className="card-action">
                      <a href="https://github.com/CaseyVanAlstyne/Savor">GitHub</a>
                      <a href="https://caseyvanalstyne.github.io/Savor/">Website</a>
                      <div className="card-content">
                        <p><i className="fas fa-tools"></i>     HTML, JavaScript, jQuery, CSS, Materialize, iTunes API, and lyrics.ovh API</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <!-- Card 4 here (Individual Projects)-->
                <div className="row">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src="EatDaBurger.png">
                        <span className="card-title">Eat Da Burger</span>
                      </div>
                      <div className="card-action">
                        <a href="https://github.com/Mpolan16/burger">GitHub</a>
                        <a href="https://ancient-temple-88703.herokuapp.com/">Website</a>
                        <div className="card-content">
                          <p><i className="fas fa-tools"></i>     JavaScript, Express-Handlebars, Express, MySQL, Node.js, CSS, and Heroku</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Card 5 (indi projects) -->
                <div className="row">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src="NoteTakerScreenShot.png">
                        <span className="card-title black">The Note Taker</span>
                      </div>
                      <div className="card-action">
                        <a href="https://github.com/Mpolan16/Note-Taker">GitHub</a>
                        <a href="https://note-taker-appl.herokuapp.com">Website</a>
                        <div className="card-content">
                          <p><i className="fas fa-tools"></i>     JavaScript, Express, MySQL, HTML, Node.js, CSS, and Heroku</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Card 6 here (indi Projects)-->
                <div className="row">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src="TeamGenerator.png">
                        <span className="card-title black">Team Generator</span>
                      </div>
                      <div className="card-action">
                        <a href="https://github.com/Mpolan16/TeamGenerator">GitHub</a>
                        <a href="https://share.getcloudapp.com/bLuevvpA">Video</a>
                        <div className="card-content">
                          <p><i className="fas fa-tools"></i>     JavaScript, HTML, Node.js, and CSS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div> */
    );
}

export default ProjectCards;