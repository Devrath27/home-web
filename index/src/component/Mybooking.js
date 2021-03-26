import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
class Mybooking extends  React.Component{
    render(){
       var email=sessionStorage.Email;
        var  stat=sessionStorage.job;
       var bookboy=sessionStorage.bookboy;
       var bookmob=sessionStorage.bookmob;
       var bookings=sessionStorage.bookings;
       if(bookboy)
       {
return(
    <div>
    <table>

{/* <tr>
<td>your service: </td>
<td>{bookings.serviceType}</td>                   

</tr> */}
<tr>
<td>service men's contact: </td>
<td>{bookmob}</td>

</tr>
<tr>
<td>service men's name </td>
<td>{bookboy}</td>

</tr>
{/* <tr>
<td>your confirm address </td>
<td>{bookings.location}</td>

</tr> */}

</table>
</div>
)
       }
else{
       
        return(
           <div>
<h1>currently you are not booking any service</h1>
           </div>
        )
       
    }
     }
    }
       export default Mybooking;
       
     
     
