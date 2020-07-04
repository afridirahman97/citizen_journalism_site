import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'
import "../Css/other.css"




const ProjectDetails = (props) => {
  const { comments,project, auth } = props;
  //if (!auth.uid) return <Redirect to='/signin' /> 
  var parts = window.location.pathname.split('/');
  var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  


  const style ={
   height:'600px',
   width:'600px'
  }
  

  if (project) {
    return (
      
      <div className="container section project-details" style={style}>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"><b style={{fontWeight: "bold"}}>{project.title}</b></span>
            
            <p>{project.content}</p>
          </div>
             
          <div className="card-action">
          <div className="overflows">

            <img src={project.ImageUrl}  height="450" width="675" alt="a" />
          </div>
          </div>
          <div className="card-action grey lighten-3 grey-text">
            <div>Report Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{project.location}</div>
            <div>{moment(project.createdAt).calendar()}</div>
          </div>
         
          <br></br>
          <div className="card-action grey lighten-2 grey text"></div>
          <div className="container center" >
          <b style={{fontWeight: "bold",fontSize: 25}}>Comments</b>
          </div>
          <div className="card-action grey lighten-4 grey-text" >        
          <CommentList comments={comments} />  
          </div>
           <div className="input-field">
             <Link to={'/comment/' + lastSegment} ><button className="btn blue darken-2" >Post a Comment</button></Link>
           </div>
           <br></br>
           <div className="report-field">
           <Link to={'/report/' + lastSegment} ><button className="btn blue darken-2" >Report</button></Link>
           </div>
           <br></br>

        </div>
      </div>
      
      
      
    )
    
  } else {
    return (
      <div className="container center">
        <p>Loading Report...</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

 
  return {
    project: project,
    auth: state.firebase.auth,
    comments: state.firestore.ordered.comments,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    
    
    collection: 'comments'
  }])
)(ProjectDetails)