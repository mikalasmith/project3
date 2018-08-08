import React from "react";

const PostOpportuniy = props => (

<div className="container">
<div className="back subOppForm spacer">     
    <form method="POST" action="/submit_opportunity">
      <div className="form-group">
        <legend>Go ahead and post an opportunity:</legend>
        <div className="form-group">
          <label for="validationOrgname">organization name:</label>
          <input type="text" className="form-control" id="orgname" name="orgname" placeholder="Organization Name"></input>
        </div>
        <div className="form-group">
          <label for="validationDate">date of the opportunity</label>
          <input type="date" className="form-control date" name="date"></input>
        </div>
        <div className="form-group">
          <label for="validationOrgname">number of volunteers needed:</label>
          <input type="number" className="form-control numvol" name="numvol" placeholder="Number of Volunteers"></input>
        </div>
        <div className="form-group"></div>
        <label for="addressLine1">address</label>
        <input type="text" className="form-control" id="address" name="address" placeholder="Address"></input>
      </div>
      <div className="form-group">
        <label for="city">city</label>
        <input type="text" className="form-control city" id="city" name="city" placeholder="City"></input>
      </div>
      <div className="form-group">
        <label for="state">state</label>
        <select className="form-control state" id="state" name="state">
          <option>AL</option>
          <option>AK</option>
          <option>AS</option>
          <option>AZ</option>
          <option>AR</option>
          <option>CA</option>
          <option>CO</option>
          <option>CT</option>
          <option>DE</option>
          <option>DC</option>
          <option>FL</option>
          <option>GA</option>
          <option>GU</option>
          <option>HI</option>
          <option>ID</option>
          <option>IL</option>
          <option>IN</option>
          <option>IA</option>
          <option>KS</option>
          <option>KY</option>
          <option>LA</option>
          <option>ME</option>
          <option>MD</option>
          <option>MH</option>
          <option>MA</option>
          <option>MI</option>
          <option>FM</option>
          <option>MN</option>
          <option>MS</option>
          <option>MO</option>
          <option>MT</option>
          <option>NE</option>
          <option>NV</option>
          <option>NH</option>
          <option>NJ</option>
          <option>NM</option>
          <option>NY</option>
          <option>NC</option>
          <option>ND</option>
          <option>MP</option>
          <option>OH</option>
          <option>OK</option>
          <option>OR</option>
          <option>PW</option>
          <option>PA</option>
          <option>PR</option>
          <option>RI</option>
          <option>SC</option>
          <option>SD</option>
          <option>TN</option>
          <option>TX</option>
          <option>UT</option>
          <option>VT</option>
          <option>VA</option>
          <option>VI</option>
          <option>WA</option>
          <option>WV</option>
          <option>WI</option>
          <option>WY</option>
        </select>
      </div>
      

      <div className="form-group">
        <label for="ZipCode">zip code</label>
        <input type="number" className="form-control zipcode" id="zipcode" name="zipcode" placeholder="Zip Code"></input>
      </div>
      <div className="form-group">
        <label for="description">description</label>
        <textarea className="form-control" rows="5" id="description" name="description"></textarea>
      </div>

      <button type="submit" className="btn btn-lg greenButton vol" id="orgSubmit">submit</button>
    </form>
  </div> 
  </div>   
);

export default PostOpportuniy;