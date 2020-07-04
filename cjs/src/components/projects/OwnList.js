import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'



const OwnList = ({users, auth, counts}) => {
  var go = auth.uid;
  return (
    <div className="user-list section">
      { users && users.map(user => {
        var match = user.id;
        var nameF = user.firstName;
        var nameL = user.lastName;
        var email = auth.email;
        
        if( go == match){
        return (
          <div className="infos">
        <p><b style={{fontWeight: "bold"}}>Name  : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{nameF} {nameL}</b></span></p>
        <p><b style={{fontWeight: "bold"}}>Email : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{email}</b></span></p>
        <p><b style={{fontWeight: "bold"}}>Number of My Reports : </b><span className="blue-text"><b style={{fontWeight: "bold"}}></b></span></p>
        
        </div>
        
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
)(OwnList)