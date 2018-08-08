import React from "react";
import "./VolunteerSignup.css";

const VolunteerSignup = () => (

<div class="container">
<h2 class="title">Thanks for joining us!</h2>
            <div class="row">
            <div class="col back">
                <form method="POST" action="registration" class="needs-validation" novalidate>
                  <div class="form-group">
                        <label for="validationUserName">User name</label>
                        <input type="text" class="form-control" id="username" name="username" placeholder="User name"></input>
                        <div class="valid-feedback">
                                Looks good!
                              </div>
                    </div>
                    <div class="form-group">
                        <label for="validationEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                        <div class="valid-feedback">
                                Looks good!
                              </div>
                    </div>
                    
                    <div class="form-group">
                            <label for="validationPassword">Password</label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Password"></input>
                            <div class="valid-feedback">
                                    Looks good!
                                  </div>
                        </div>
                        <div class="form-group">
                                <label for="validationreenterPassword">Re-Enter Password</label>
                                <input type="password" class="form-control" id="reenterPassword" name="passwordMatch" placeholder="Password"></input>
                            </div>
                    <button type="submit" class="btn btn-lg greenButton vol" id="userSubmit">Submit</button>
                    <div class="valid-feedback">
                            Looks good!
                          </div>
                </form>
            </div>
        </div>
</div>
);

export default VolunteerSignup;