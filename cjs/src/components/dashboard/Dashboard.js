import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Typical from 'react-typical';





class Dashboard extends Component {
  render() {
  
    const { projects, auth, announcements } = this.props;
    //if (!auth.uid) return <Redirect to='/signup' /> 

    
    return (    
  

        <div className="dashboard container">

               <div className="container center">
        <a href="/" className="add_def"><span></span><span></span><span></span><span></span>General News</a>
               </div>

            <div className ="container center" >
              <div className="col s8 m4">
              <form className="grey">

              <div className="a">
                        
              <p><span className="white-text"><b style={{fontWeight: "bold",fontSize: 25}}>
              
              <Typical
              loop={Infinity}
              wrapper ="b"
              
              steps={[
                
                'Stay Home, Stay Safe',
                2000,
                'Wash Your Hands for 20 Seconds',
                2000,
                'Maintain Social distancing',
                2000,
                'Wear Masks',
                2000,
              ]}
              />
              
              </b></span></p>
        
           
      </div>
      </form>

     
      
      </div>

      
          </div>
        
        <div className="container center">
        <div className="col s4 m2">
        <form className="white">
          <div className="input-field">
            <input type="text"/>
            <label>Create Report...</label>
          </div>
          </form>
          
            <ProjectList projects={projects} />
          
          </div>
          
          
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
  
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection : 'projects', orderBy:['createdAt','desc']},
   
  ])
)(Dashboard)