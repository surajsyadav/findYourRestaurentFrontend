import React, { useState,useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './Login.css';

function Registration() {



const [state,setState]=useState([]);
// fetch("https://api.countrystatecity.in/v1/states", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));



useEffect( ()=>{
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");
  
  var requestOptions = {
     method: 'GET',
     headers: headers,
     redirect: 'follow'
  };
  
  fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  // const getState= async()=>{
  //     const rescountry= await fetch("https://api.countrystatecity.in/v1/states", requestOptions);
  //     const rescon= await rescountry.json();
  //     setState(await rescon);
  // }
  // getState();
},[]);
// console.log(state);

  return (
    <div>
      <Navbar />
      <div className='container registration-form my-3'>
         <h1>Register your restaurent </h1>
         <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">ShopName</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"  />
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
 
     
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">PinCode</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Contact Number</label>
    <input type="number" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Restaurent Type</label>
    <select id="inputState" class="form-select">
      
      <option>Pure Vegetarian</option>
      <option>Non-Vegetarian </option>
      <option>Mixed</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="image" class="form-label"> Add Image</label>
    <input type="file" class="form-control" id="image" />
  </div>
  <div class="col-md-3">
    <label for="openTiming" class="form-label">Open Time</label>
    <input type="time" class="form-control" id="openTiming" />
  </div>
  <div class="col-md-3">
    <label for="closedTiming" class="form-label">Close Time</label>
    <input type="time" class="form-control" id="closedTiming" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
      </div>
      <Footer />
    </div>
  )
}

export default Registration
