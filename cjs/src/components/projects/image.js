import React, { Component } from 'react'
import firebase from '../../config/fbConfig'




class image extends Component {
  
    state = {
        url : '',
        image : null
    }

   

   handleChanges = (e) => {
        if(e.target.files[0]){
          this.setState({
            image: e.target.files[0]
          })
        }
        console.log(e.target.files[0]);
      }

      handleUpload = () =>
  {
    const {image} = this.state;
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(this.state.image)
    uploadTask.on('state_changed', (snapshot) => {console.log('snapshot')},
    (error) => {console.log(error);},
    () => {firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => this.setState({url}))})
    
  }
  
    


render() {
    const { auth} = this.props;
   // if (!auth.uid) return <Redirect to='/signin' /> 
    return (
        <div className="container center">
            <input type="file" onChange={this.handleChanges} />
            <img src={this.state.url} height="200" width="200" />
            <div className="Buttons">
            <button class="Submit-button" onClick={this.handleUpload}>Upload Image First</button>
        </div>
        <p><b style={{fontWeight: "bold",fontSize: 20}}>Copy The Url Below</b></p>
        <p>{this.state.url}</p>
        <p><b style={{fontWeight: "bold",fontSize: 20}}>Go back to previous page and paste the url at Image section</b></p>
        </div>

       
        
         )
        }
      }

     export default image