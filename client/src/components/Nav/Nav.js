import React from "react";
import volunteerHands from "./img/volunteerHands.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => (
    <div>
    {/*THIS IS FOR SMALL SCREEN ONCE I FIGURE OUT MEDIA QUERIES IN REACT*/}
    {/*<div class="smallLogo">
        <img src="/assets/img/volunteerHands.png"></img>
        <a href="/">Helping Hands</a>
    </div>*/}
    <img src={ volunteerHands }></img>
    <h5 className="my-0 mr-md-auto font-weight-normal" id="site-name">Pay it Forward</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <Link className="p-2 text-dark" to="/">home
        <span className="sr-only">(current)</span>
        </Link>
        <Link className="p-2 text-dark" to="/profile">profile</Link>
        <Link className="p-2 text-dark" to="/allopportunities">opportunities</Link>
       {/*} <a class="btn btn-outline-primary" href="/logout">log out</a>*/}
        <Link className="p-2 text-dark" to="/signup">sign up</Link>
    </nav>
    {/*<a className="btn btn-outline-primary" href="/singin">log in</a>*/}
</div> 
);

export default Nav;