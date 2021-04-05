import './nav.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import App from './App';
import Logincust from './Logincust';
function Nav1() {
  
    return (
      
     <div className="navbg">
      
         <nav class="navbar navbar-expand-sm ">


<ul class="navbar-nav">
  <li class="app"><App/></li>
  <li class="nav-item" >
    <Link class="nav-link" to="/">HOME</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Service">SERVICES</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/About">ABOUT</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Contact">CONTACT US</Link>
  </li>
  </ul>
  <ul class="navbar-nav ml-auto">
      
  <li class="nav-item">
    <Link class="nav-link" to="/Loginpg" >LOGIN</Link>
  </li>
  
</ul>

</nav> 
     </div>
        
    
     
    );
       
  }
  

  export default Nav1;