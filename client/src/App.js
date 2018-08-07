import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "/.component/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
