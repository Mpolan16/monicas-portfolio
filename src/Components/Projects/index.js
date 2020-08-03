import React from 'react';
import projects from '../../utils/projects.json';

function Projects() {
    return(
        projects.map((project,i)=>{
            return(
            <div key={i}>
            <div className="card">
              <div className="card-image">
                <img src= {project.Image} alt= {project.Alt}/>
                <span className="card-title purple">{project.Title}</span>
              </div>
              <div className="card-action">
                <a href={project.GitHub}>GitHub</a>
                <a href={project.Website}>Website</a>
                <div className="card-content">
                  <p><i className="fas fa-tools"></i>  {project.Tools} </p>
                </div>
              </div>
            </div>
        </div>
            )
        })
        
    );
}

export default Projects;