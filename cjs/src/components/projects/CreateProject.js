import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


class CreateProject extends Component {
  state = {
    title: '',
    location:'',
    content: '',
    ImageUrl:'',
    Health:'',
    Fun:'',
    Event:'',
    Sports:'',
    GoodNews:'',
    Condolence:'',
    Observasion:''
   
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

 
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Report</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Report Title</label>
          </div>
          <div className="input-field">
            <input type="text" id='location' onChange={this.handleChange} />
            <label htmlFor="location">Report Location</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Report Content</label>
          </div>

          <div className="card-action grey lighten-3 black-text">Please Select the catagory of the news

          <div className="input-field">
            <input type="checkbox" id='Health' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Health'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='Fun' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Fun'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='Event' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Event'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='Sports' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Sports'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='GoodNews' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Good News'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='Condolence' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Condolence'}&nbsp;&nbsp;&nbsp;
            <input type="checkbox" id='Observasion' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Observasion'}&nbsp;&nbsp;&nbsp;
          </div>

          </div>

          <div className="input-field">
            <input type="text" id='ImageUrl' onChange={this.handleChange} />
            <label htmlFor="ImageUrl">Report Image</label>
          </div>
           
          <div className="input-field">
            <Link to={'/image'}><button>Upload Image</button></Link>
          </div>
                     
          <div className="input-field">
            <button className="btn blue darken-2">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)