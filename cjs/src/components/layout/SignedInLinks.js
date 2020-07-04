import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {

  const stylus = {
    paddingTop : '25px',
    marginLeft : '20px'
  }
  
  return (
    
    <div>
      <ul className="right">
        
        <li><NavLink to='/create'>Create New Report</NavLink></li>
        <li><a onClick={props.signOut}>LogOut</a></li>
        
        <li><NavLink to='/profile/' className="btn btn-floating black darken-2">
          {props.profile.initials}
        </NavLink></li>
        <li className="fa fa-fw fa-bell" style={stylus} ></li>
        
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)