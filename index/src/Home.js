import './Home.css';
import React from 'react';
import Home2 from './Home2.jpg';
import Home3 from './home3.jpeg';
import Home4 from './home4.png';
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
function Home() {
    return (
     <div style={{textAlign:'center'}}>
         <p className="home1">your all service is here</p>
         <Link class="home4" to="/get_service">Book now</Link>
         
         
         <div class="row" style={{marginTop:100}}>
  <div class="col-sm-3" style={{marginBottom:10}}><img className=" e2"  src={Elecrical} alt="car img"/></div>
  <div class="col-sm-3" style={{marginBottom:10}}><img className=" e2"  src={Barber} alt="car img"/></div>
  <div class="col-sm-3" style={{marginBottom:10}}><img className="e2"  src={Carpenter} alt="car img"/></div>
  
  <div class="col-sm-3" style={{marginBottom:10}}><img className=" e2"  src={Vahicalwash} alt="car img"/></div>
  
</div>
<Link  class="home2" to="/service">See More</Link>
     </div>
     
    )
  }
  
  export default Home;