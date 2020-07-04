import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReport } from '../../store/actions/projectActionsRep'
import { Redirect } from 'react-router-dom'



class CreateReport extends Component {

  state = {
    
    Ureport: '',
    report1: '',
    report2: '',
    report3: '',
    report4: '',
  }

  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createReport(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signup'/>
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">What is the Problem </h5>
          <div className="input-field">
            <input type="checkbox" id='report1' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'This report is fake'}<br></br>
            <input type="checkbox" id='report2' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'It contains yellow journalism'}<br></br>
            <input type="checkbox" id='report3' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'It contains false facts'}<br></br>
            <input type="checkbox" id='report4' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'The news is misleading and objectionable'}<br></br>
            
          </div>
          
          <br></br>
          
          
          <h5 className="grey-text text-darken-3">Is there any other Problem </h5>
          <div className="input-field">
          <input type="text" id='Ureport' onChange={this.handleChange} />
            <label htmlFor="Other Problem">Other Problem</label>

          </div>
          
        
                     
          <div className="input-field">
            <button className="btn blue darken-2">Post</button>
          </div>
        </form>
      </div>

    )
    }
    
  }


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    projects : state.firestore.data.projects
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createReport: (report) => dispatch(createReport(report))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReport)