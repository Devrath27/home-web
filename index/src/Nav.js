import './nav.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
function Nav() {
    return (
      
     <div className="navbg">
      
         <nav class="navbar navbar-expand-sm ">


<ul class="navbar-nav">
  <li class="nav-item" >
    <Link class="nav-link" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Service">service</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/About">about</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Contact">contact us</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Login">Login</Link>
  </li>
</ul>

</nav> 
     </div>
    
     
    );
  }
  
  export default Nav;