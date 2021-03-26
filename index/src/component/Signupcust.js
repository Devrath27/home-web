import React from 'react'
import Login from './Login.css';
import {Link} from "react-router-dom";
import './Signupcust.css'
class Signupcust extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            cityName:'',
            contact: null,
            login:false,
            password: '',
           
                    };
                    this.myChangeHandler=this.myChangeHandler.bind(this);
                    this.mySubmitHandler=this.mySubmitHandler.bind(this);
    }
    myChangeHandler=(event) =>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        
        console.log(this.state);

        var signupcust ={
            name : this.state.name,
            email : this.state.email,
            cityName:this.state.cityName,
            contact:this.state.contact,
            password:this.state.password,
            
    
          };
          fetch('http://localhost:8080/Signupcust', {
          method: 'post',
          body : JSON.stringify({
            signupcust
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
       //console.log(json.mes);
       console.log(json.mes);
       this.setState({login:json.mes});
       var login=this.state.login;
       console.log(login);
       if(login===true)
       {
       sessionStorage.setItem("Email",json.prof);
       sessionStorage.setItem("job","custm");
       console.log(sessionStorage.Email);
       alert("you are resistred successfully...");
       }
       else
       alert(json.prof);
     })
     .catch((error) => {
       console.error(error);
     });
    }

    render(){
      var prof=sessionStorage.Email;
       
       console.log(prof);
        if(this.state.login || prof)
        {  
            return(
                <div>
                    <h1>you are resistred succesfully</h1>
                </div>
            )
        }
        else{
        return( 
            
          <div >
          <h2 style={{fontWeight:"bold",color:"Red",textAlign:"center",marginTop:"70px"}}>For Customer</h2>
          <h6 style={{textAlign:"center"}}>Book Services,get Services and Enjoy Services</h6>
     <div className="form2 "> 
     <div className="text-center"> 
         <h4 style={{marginTop:"10px"}}>Sign Up</h4>
         </div>       
                            
                 <div className="form-element">
                 <form onSubmit={this.mySubmitHandler}>
                 <div class="input"><input type='text' name='name' placeholder="Name" 
         onChange={this.myChangeHandler}></input>
         </div>
         <div class="input"><input type='contact' name='contact' placeholder="Contact" 
         onChange={this.myChangeHandler}></input>
         </div>
                 <div class="input"><input type='email' name='email' placeholder="Email" 
         onChange={this.myChangeHandler}></input>
         </div>
         <div class="input"><input type='password' name='password' placeholder="Password"            
          onChange={this.myChangeHandler}
         ></input>
         </div>
         <div class="input "><input className="Signupcust" type="submit" value="Sign Up"></input>
         </div>
         
      
                     </form>
                     <p class="para1">Already an account? <Link  to="/Logincust" style={{textDecoration:"none"}} >Login</Link></p>
                 </div>
             </div>
                  
                                    </div>

        );
        
    }
}
}
export default Signupcust;