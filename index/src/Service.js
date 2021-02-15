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
 {/* <img className="e2 container" src={Elecrical} alt="car img"/>
 <img className="e2" src={Barber} alt="car img"/>
 <img className="e2"  src={Carpenter} alt="car img"/>
 <img className="e2" style={{marginTop:10}} src={Vahicalmec} alt="car img"/>
 <img className="e2" style={{marginTop:10}} src={Vahicalwash} alt="car img"/>
 <img className="e2" style={{marginTop:10}} src={Sweeper} alt="car img"/>
    */}
    <div class="row">
 <img className="col-sm-3 e2"  src={Elecrical} alt="car img"/>
 <img className="col-sm-3 e2"  src={Barber} alt="car img"/>
 <img className="col-sm-3 e2"  src={Carpenter} alt="car img"/>
 <img className="col-sm-3 e2"  src={Vahicalmec} alt="car img"/>
 <img className="col-sm-3 e2"  src={Vahicalwash} alt="car img"/>
 <img className="col-sm-3 e2"  src={Sweeper} alt="car img"/>
  
</div>
    </div >
    );
  }
  
  export default Service;