import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import Nav from './Nav';
import {Container,Button } from 'reactstrap';
import './Login.css';

function Loginpg() {
    return(
        <div>
            <h1 style={{marginTop:"50px",marginLeft:"15px"}}>Login »</h1>
            <div class="login">
                <h2>
                    For Customer
                </h2>
               <p> If you have an account then please click on Login Button to Login .
                   <br></br>
                   Thank you !
               </p>
               <Link  class="body" to="/Logincust" style={{textDecoration:"none"}} >   
        <Button color="success" >
        Login
        </Button>
        </Link> 
        
        
        <p class="para">Don't have an account? <Link  class="body2" to="/Signupcust" style={{textDecoration:"none"}} >Sign Up</Link></p>
 
               </div>
               <div class="login">
            <h2>
                    For Worker
                </h2>
               <p style={{marginBottom:"20px"}}> If you have an account then please click on Login Button to Login .
                   <br></br>
                   Thank you !
               </p>
               <Link  class="body" to="/Loginworker" style={{textDecoration:"none"}} >
               <Button color="success" >
        Login
        </Button>
        </Link> 
        
        
        <p class="para">Don't have an account? <Link  class="body2" to="/Signupworker" style={{textDecoration:"none"}} >Sign Up</Link></p>
            </div>
            
        </div>
    );
    
}
export default Loginpg;