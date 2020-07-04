import React from 'react';
import "../Css/card-style.css"
import moment from 'moment'

const ProjectSummary = ({project}) => {

  const stylus ={
   marginBottom :"35px"
  }
  

  return (
    <div className="card z-depth-0 project-summary" style={stylus} >
      <div className="overflow">
      <img src={project.ImageUrl} height="350" width="660" className="new_dim"></img>
      </div>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "><b style={{fontWeight: "bold"}}>{project.title}</b></span>
        <div className="bottom_part">
        <p>Report Posted by {project.authorFirstName} {project.authorLastName}</p>
        <div>{moment(project.createdAt).calendar()}</div>
        </div>
      </div>
    </div>
  )
}


export default ProjectSummary