import './Login.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Logincust.css';

class Logincust extends React.Component{
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
            <div >
                <h2 style={{fontWeight:"bold",color:"Red",textAlign:"center",marginTop:"70px"}}>For Worker</h2>
                <h6 style={{textAlign:"center"}}>Book Services,get Services and Enjoy Services</h6>
           <div className="form "> 
           <div className="text-center"> 
               <h4 style={{marginTop:"10px"}}>Login</h4>
               </div>       
                                  
                       <div className="form-element">
                       <form onSubmit={this.mySubmitHandler} >
                       <div class="input"><input type='email' name='email' placeholder="Email" 
               onChange={this.myChangeHandler}></input>
               </div>
               <div class="input eye"><input type='password' name='password' placeholder="Password"            
                onChange={this.myChangeHandler}
               ></input>
            

               
               </div>
               <div class="input "><input className="logincust" type="submit" value="Login"></input>
               </div>
               <Link style={{float:"right",marginTop:"25px",marginRight:"10px"}} to="/forgotpass">forgot password
               </Link>
                           </form>
                           <p class="para2">Don't have an account? <Link  to="/Signupworker" style={{textDecoration:"none"}} >Sign Up</Link></p>
                       </div>
                   </div>
                        
                                          </div>


                
               
    
        
        );
        
    }
}
export default Logincust;



