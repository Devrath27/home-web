import './nav.css';
import React,{useS} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import App from './App';
import Logincust from './Logincust';
class Nav extends React.Component{
  constructor(props){
      super(props);
      this.state={
        prof:"",
        login: false
      };
  }

  componentDidMount(){
    var prof=sessionStorage.id;  
    this.setState({prof:prof});
  }
    
render(){
  
       var x = sessionStorage.job;
  console.log(this.state.prof);
  
      return (
      
     <div className="navbg">
      
         <nav class="navbar navbar-expand-sm ">


<ul class="navbar-nav">
  <li class="app"><App/></li>
  <li class="nav-item" >
    <Link class="nav-link" to="/">HOME</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Services">SERVICES</Link>
  </li>
  {x=="worker" ?  <li class="nav-item">
   <Link class="nav-link" to="/Order">CURRENT ORDER</Link> 
  </li> : <p></p>}
  <li class="nav-item">
    <Link class="nav-link" to="/About">ABOUT</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Contact">CONTACT US</Link>
  </li>
  </ul>
  <ul class="navbar-nav ml-auto">
      
  <li class="nav-item">
    {this.state.prof!==undefined?<Link class="nav-link" to="/Account" >ACCOUNT</Link>: <Link class="nav-link" to="/Loginpg" >LOGIN</Link>}
  </li>
  
</ul>

</nav> 
     </div>
    
    
     
    )
    
   
     
  }   
    }
       

  

  export default Nav;
