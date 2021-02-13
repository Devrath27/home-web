import './Home.css';
import React from 'react';
import Home2 from './Home2.jpg';
import Home3 from './home3.jpeg';
import Home4 from './home4.png';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
function Home() {
    return (
     <div>
         <p className="home1">your all service is here</p>
         <Link class="home4" to="/get_service">Book now</Link>
         <img className="home2" src={Home4} alt="car img"/>
         
         <img className="home3" src={Home3} alt="car img"/>
     </div>
     
    )
  }
  
  export default Home;