import './Service.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import Elecrical from './elect.png';
import Barber from './barber.jpg';
import Carpenter from './carp.jpg';
import Vahicalmec from './vmec.jpg';
import Vahicalwash from './vwas.png';
import Sweeper from './clean.jpg';
function Service() {
    return (
      <div>
      
     
 <Link class="na" to="/my_services">My Services</Link>

 <Link class="na" to="/get_service">Book now</Link>
 <p className="me1">Services</p>
 
<div class="row" style={{marginTop:100}}>
  <div class="col-sm-3"><img className=" e2"  src={Elecrical} alt="car img"/></div>
  <div class="col-sm-3"><img className=" e2"  src={Barber} alt="car img"/></div>
  <div class="col-sm-3"><img className="e2"  src={Carpenter} alt="car img"/></div>
  <div class="col-sm-3"><img className=" e2"  src={Vahicalmec} alt="car img"/></div>
  <div class="col-sm-3"><img className=" e2"  src={Vahicalwash} alt="car img"/></div>
  <div class="col-sm-3"><img className="e2"  src={Sweeper} alt="car img"/></div>
</div>
    </div >
    );
  }
  
  export default Service;