import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AllOpportunities from "./pages/AllOpportunities";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostOpportuniy from './pages/PostOpportunity';
import Homepage from './pages/Homepage';
import VolunteerProfile from './pages/VolunteerProfile';
import VolunteerSignup from './pages/VolunteerSignup';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/postopportunity" component={PostOpportuniy} />
          <Route exact path="/allopportunities" component={AllOpportunities} />
          <Route path="/home" component={Homepage} />
          <Route path ="/volunteerprofile" component={VolunteerProfile} />
          <Route path="/volunteersignup" component={VolunteerSignup} />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
