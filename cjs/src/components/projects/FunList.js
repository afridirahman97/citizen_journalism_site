import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const FunList = ({projects}) => {
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

  return (
    <div className="project-list section">
      { projects && projects.map(project => {
           var match=project.Fun;
           var match_again ="on" ;
 
           if(match_again == match){
        return (
            <div className="amni">
          <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
          </div>
        )
      }
      })
    }  
    </div>
  )
}

export default FunList