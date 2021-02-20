import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";

function Loginpg() {
    return(
        <div>
            <Link class="" to="/Logincust">login for customer</Link>

            <Link class="" to="/Loginw">login as a worker</Link>
        </div>
    );
    
}
export default Loginpg;