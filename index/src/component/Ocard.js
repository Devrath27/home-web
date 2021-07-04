import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import { Card } from 'reactstrap';
class Ocard extends  React.Component{
    constructor(props){
        super(props);
       
                    //this.CreateCard=this.CreateCard.bind(this);
                    //this.Card=this.Card.bind(this);
                    this.get=this.get.bind(this);
                   
    }
    get=(x)=>{
        "use strict";
        var y=x
        console.log(y);
        var Accept={
            id:this.props.book._id,
            revew:y
        }
       
        fetch('https://service-4u.herokuapp.com/accept', {
            method: 'post',
            body : JSON.stringify({
              Accept
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
         
         
       })
       .catch((error) => {
         console.error(error);
       });
     
    }
   

render(props){
    return(
       <tr>
         <td>{this.props.book.serviceType}</td>
        <td>{this.props.book.problem}</td>
        <td>{this.props.book.date}</td>
        
        <td>{this.props.book.location}</td>
        <td><Link  to="/accept" onClick={this.get(1)}>accept</Link></td>
        <td><Link to="/accept" onClick={this.get(2)}>decline</Link></td>
        
        </tr>
       
    )
     }
    }
export default Ocard;