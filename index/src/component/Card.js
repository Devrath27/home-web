import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import { Card } from 'reactstrap';
function Carde(props){
    return(
        
            <tr>
             <td>{props.serviceType}</td>
        <td>{props.problem}</td>
        <td>{props.time}</td>
        <td>{props.location}</td>
        <td>{props.status===0?"panding...":props.status===1?"accepted":"declined"}</td>
        </tr>
        
       
    )
     }
export default Carde;