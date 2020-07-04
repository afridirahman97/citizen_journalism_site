import React from 'react'
import OwnProjectSummary from './OwnProjectSummary'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const OwnProjectList = ({projects,auth,counts}) => {
 var go = auth.uid;
 var counts = 0;
 
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        counts++;
        var match = project.authorId;
        if( go == match){
        return (
          
          <Link to={'/project/' + project.id} key={project.id}>
            <div className="checking">
            
             </div>
            <OwnProjectSummary project={project} />
          </Link>
        )
        }
      })}  
      
    </div>
  )
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    
    auth: state.firebase.auth

  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' 
      }
  ])
)(OwnProjectList)