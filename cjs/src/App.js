import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import CreateComment from './components/projects/CreateComment'
import profile from './components/dashboard/profile'
import image from './components/projects/image'
import CreateReport from './components/projects/CreateReport';
import Sidebar from './components/layout/Sidebar'
import ParticleContainer from './components/layout/ParticleContainer'
import Fun from './components/dashboard/Fun'
import Health from './components/dashboard/Health'
import GoodNews from './components/dashboard/GoodNews'
import Sports from './components/dashboard/Sports'
import Condolence from './components/dashboard/Condolence'
import Observation from './components/dashboard/Observation'
import Eventt from './components/dashboard/Eventt'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
     
      <ParticleContainer />
      <div className="App"
       style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
         >
        
          <Navbar />
          <Sidebar />
          
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route exact path='/fun'component={Fun} />
            <Route exact path='/health'component={Health} />
            <Route exact path='/event'component={Eventt} />
            <Route exact path='/sports'component={Sports} />
            <Route exact path='/condolence'component={Condolence} />
            <Route exact path='/goodnews'component={GoodNews} />
            <Route exact path='/observation'component={Observation} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/comment/:id'component={CreateComment} />
            <Route path='/report/:id'component={CreateReport} />
            <Route path='/profile'component={profile} />
            <Route path='/image'component={image} />
          
            
          </Switch>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;