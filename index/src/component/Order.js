import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
//import { Card } from 'reactstrap';
import Ocard from './Ocard';
class Order extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            books:[]
            
                    };
                    //this.CreateCard=this.CreateCard.bind(this);
                    //this.Card=this.Card.bind(this);
                    //this.getdata=this.getdata.bind(this);
                   
    }
componentDidMount(){
    this.getdata();
}
     getdata=()=> {
   var booking={
    id:sessionStorage.id,
    stat:sessionStorage.job
    }
        fetch('http://localhost:8080/Order', {
            method: 'post',
            body : JSON.stringify({
              booking
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then((res) => res.json())
       .then((json) => {
         
         var books=json.bookingss;
         console.log(books);
         this.setState({books: books})
       })
       .catch((error) => {
         console.error(error);
       });
     
           
       
    }
    CreateCard=(book)=>{
        console.log(book._id);
        return(
            <Ocard
            book={book}
            // key={book._id}
            // serviceType={book.serviceType}
            // problem={book.problem}
            // location={book.location}
            // time={book.date}
            // status={book.status}
            />
        );
    }
    
    
    render(){
     
     if(this.state.books.length===0)
     {
         return <h1>currently no orders</h1>
     }
     else {
        return(
            <table>
                <tr>
              <th>service type</th>
              <th>problem</th>
              <th>time</th>
              <th>location</th>
              <th>accept</th>
              <th>decline</th>
                </tr>
                {this.state.books.map(book => {
                    console.log(book._id);
                return this.CreateCard(book)
            })
                
        }  
           </table>
        )
    }
}
}
       export default Order;
       
     
     
