import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import './Account.css';
import './Login.css';
import {Button} from 'reactstrap';
function Account() {
    
        return(
            
          <ul class="nav flex-column s1" style={{float:'right'}}>
          <li className="ll" >
            <Link class="al1" to="/Profile">PROFILE</Link>
          </li>
          <li className="ll">
            <Link class="al1" to="#">khatam</Link>
          </li>
          <li className="ll">
            <Link class="al1" to="/mybookings">my bookings</Link>
          </li>
          <li  className="ll">
            <Link class="al1" to="/Logout"  >Logout</Link>
          </li>
        </ul>
            
        );
        }
       
    

export default Account;