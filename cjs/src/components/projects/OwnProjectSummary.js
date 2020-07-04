import React from 'react'
import moment from 'moment'

const OwnProjectSummary = ({project}) => {
  return (
    <div className="container center">
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "><b style={{fontWeight: "bold"}}>{project.title}</b></span>
        
        <div>Posted on {moment(project.createdAt).calendar()}</div>
      </div>
    </div>
  </div> 
  )
}

export default OwnProjectSummary