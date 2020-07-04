import React, { Component } from 'react'
import OwnProjectList from '../projects/OwnProjectList'
import OwnList from '../projects/OwnList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Notifications from './Notifications'




class profile extends Component {
  render() {
    const { projects, auth, users,notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signup' /> 

    return (    
        <div className="dashboard container">
         <div className="col s12 m6">
          <form className="white">
          <div className="container center">
          <p><span className="blue-text"><b style={{fontWeight: "bold",fontSize: 25}}>My Informations</b></span></p>
            </div>
          <OwnList users={users} />
            </form>            
            
         </div>
       


         <div className="col s12 m6">
         <Notifications notifications={notifications} />
          </div>
         
          <div className="col s12 m6">
          <OwnProjectList projects={projects} />
          </div>
          
        </div>

      
        
     
      
      
     
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy:['createdAt','desc'] },
    { collection: 'notifications',limit:3,orderBy:['time','desc']}      
  ])
)(profile)