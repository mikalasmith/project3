import React from "react";
import volunteerHands from "./img/volunteerHands.png";
import "./Nav.css";

const Nav = () => (
    <div>
    {/*THIS IS FOR SMALL SCREEN ONCE I FIGURE OUT MEDIA QUERIES IN REACT*/}
    {/*<div class="smallLogo">
        <img src="/assets/img/volunteerHands.png"></img>
        <a href="/">Helping Hands</a>
    </div>*/}
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white sticky-top navbar">
        <img src={volunteerHands} id="bgimg"></img>
    <h5 className="my-0 mr-md-auto font-weight-normal" id="site-name"><a href="/">Pay it Forward</a></h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a className="p-2 text-dark" href="/">home
        <span className="sr-only">(current)</span>
        </a>
      {/*THIS WILL NEED TO BE FOR IF SIGNED IN BUT UNSURE HOW TO DO WITH REACT RIGHT NOW*/}
      {/*<a class="p-2 text-dark" href="/profile">profile</a>
        <a class="p-2 text-dark" href="/opportunities">opportunities</a>
        <a class="btn btn-outline-primary" href="/logout">log out</a>*/}
    <a className="p-2 text-dark" href="/singup">sign up</a>
    </nav>
        <a className="btn btn-outline-primary" href="/singin">log in</a>
   </div> 
   </div>
);

export default Nav;