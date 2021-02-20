import './Login.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";

class Loginw extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            email: '',
            password: ''
                    };
                    this.myChangeHandler=this.myChangeHandler.bind(this);
                    this.mySubmitHandler=this.mySubmitHandler.bind(this);
    }
    myChangeHandler=(event) =>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]:val});
        
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Hello" )
        console.log(this.state);
    }

    render(){
        return( 
            <div>
           <form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
               <h1>please login...</h1>
               <table  style={{marginLeft:"auto",marginRight:"auto"}}>

              
              <tr>
                  <td><span>email</span></td>
                  <td> <input type='text' name='email'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
               
              
              
             
              <tr>
              <td><span>Password</span></td>
               <td><input type='password' name='password'              
                onChange={this.myChangeHandler}
               /></td>
              </tr>
              
              
               

               </table>
               <br/>
               
               <input type='submit'/> 
           
           </form>
           <p>if you are new user please signup first</p>
           <Link to="/Signupw">Signup</Link>
           </div>
        );
        
    }
}
export default Loginw;



