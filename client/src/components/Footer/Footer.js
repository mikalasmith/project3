import React from "react";
import Footerimage from "./img/footerimg.png"
import "./Footer.css";

const Footer = () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
        <img src={Footerimage}></img>
        <p>Pay it Forward</p>
    </div>
);

export default Footer;