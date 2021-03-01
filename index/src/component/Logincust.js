import './Login.css';
import './Logincust.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";

class Logincust extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:false,
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
        //console.log(this.state);

        var logincust ={
           
            email : this.state.email,
             password:this.state.password
           };
          fetch('http://localhost:8080/Logincust', {
          method: 'post',
          body : JSON.stringify({
            logincust
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
       console.log(json.mes);
       this.setState({login:json.mes});
       var login=this.state.login;
       console.log(login);
       if(login===true)
       {
       sessionStorage.setItem("Email",json.prof);
       console.log(sessionStorage.Email);
       sessionStorage.setItem("job","custm");
       }
       else
       alert(json.prof);
      
     })
     .catch((error) => {
       console.error(error);
     });
    }
    
    render(){
        //var login=this.state.login;
        var prof=sessionStorage.Email;
       
       console.log(prof);
        if(this.state.login || prof)
        {  
            return(
                <div>
                    <h1>you are logdin succesfully</h1>
                </div>
            )
        }
        else{
        return( 
          <div >
          <h2 style={{fontWeight:"bold",color:"Red",textAlign:"center",marginTop:"70px"}}>For Customer</h2>
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
                     <p class="para2">Don't have an account? <Link  to="/Signupcust" style={{textDecoration:"none"}} >Sign Up</Link></p>
                 </div>
             </div>
                  
                                    </div>


          
        );
        
    }
}
}
export default Logincust;



