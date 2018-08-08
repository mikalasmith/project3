import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AllOpportunities from "./pages/AllOpportunities";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostOpportuniy from './pages/PostOpportunity';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/postopportunity" component={PostOpportuniy} />
          <Route exact path="/allopportunities" component={AllOpportunities} />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
