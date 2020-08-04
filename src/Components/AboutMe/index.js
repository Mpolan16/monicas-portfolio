import React from "react";
import aboutMe from '../..//utils/aboutMe.json';

function AboutMe() {
  return (
      aboutMe.map((aboutMe,i)=>{
        return(
          <div Key={i}>
            <div>
              <h4 id="aboutMeHeader">{aboutMe.Title}</h4>
              <br/>
              <img src={aboutMe.Image} alt={aboutMe.Alt} id="headshot" width="400"/>
              <br/><br/>
              <p id="abouttext">
                  {aboutMe.Desc}
              </p>
          </div>
          </div>
        )
      })
  );
}

export default AboutMe;