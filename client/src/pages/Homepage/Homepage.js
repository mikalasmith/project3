import React from "react";
import "./Homepage.css";


const Homepage = () => (
<div>
<div className="container" id="mainbg">
  <div className="layer">
  </div>
  <div className="holder">
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center btn-box">
      <h1 className="display-6 text-primary">Welcome to Helping Hands</h1>
      <p className="lead">a place to connect volunteers with volunteer opportunities
        <area shape="circle" coords="" href="" alt=""></area>
      </p>
      <button type="button" className="greenButton adjust-btn btn-lg vol" id="find-btn"><a href="/view_all_opportunity">find opportunities</a></button>
      <button type="button" className="greenButton adjust-btn btn-lg vol"><a href="/submit_opportunity">post opportunities</a></button>
      </div>
  </div>
</div>

<div class="siteDetails">

<button class="collapsible" id="dropDown1">
  <i class="fas fa-chevron-circle-down"></i> About Us</button>
<div class="content" id="collapse1">
  <p>We are an organization created to help connect volunteers with volunteer opportunities. We want to be a simply way
    for volunteers and organizations to connect. With our app, you are able to both post, find, and sign up for opportunities
    that interest you. Connection to our communities and to each other is important and we strive to provide a simple way to facilitate that connection.
  </p>
</div>

<button class="collapsible" id="dropDown2">
  <i class="fas fa-chevron-circle-down"></i> The Mission</button>
<div class="content" id="collapse2">
  <p>Our mission is simple: We want to provide a simple way for people to share volunteer opportunities that they know about and to find new 
    ones that interest them.</p>
</div>
<button class="collapsible" id="dropDown3">
  <i class="fas fa-chevron-circle-down"></i> Frequently Asked Questions</button>
<div class="content" id="collapse3">
  <p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula
    urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis.
    Pellentesque lacinia dolor in faucibus iaculis.</p>
    
    <p>A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate,
    tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis
    ipsum venenatis consectetur. Donec sed tempus est.</p>

  <p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula
    urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis.
    Pellentesque lacinia dolor in faucibus iaculis.</p>
    
    <p>A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate,
    tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis
    ipsum venenatis consectetur. Donec sed tempus est.</p>
</div>

<button class="collapsible" id="dropDown4">
  <i class="fas fa-chevron-circle-down"></i> Contact Us</button>
<div class="content" id="collapse4">
  <p>We would love to connect with you!</p>
  <p>Email: info@helpinghands.org</p>
  <p>Phone: (555)-555-555</p>
</div>
</div>
</div>
);

export default Homepage;
