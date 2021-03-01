import React from 'react'
import Login from './Login.css';
import {Link} from 'react-router-dom';
class Signupworker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            cityName:'',
            jobType:'',
            contact: null,
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
        alert("Hello")
        console.log(this.state);
    }

    render(){
        return( 
            <div >
                <h2 style={{fontWeight:"bold",color:"Red",textAlign:"center",marginTop:"70px"}}>For Worker</h2>
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
               <div class="input"><input type='text' name='cityName' placeholder="city" 
               onChange={this.myChangeHandler}></input>
               </div>
               <div class="input"><input type='text' name='jobType' placeholder="service name" 
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
                           <p class="para1">Already an account? <Link  to="/Loginworker" style={{textDecoration:"none"}} >Login</Link></p>
                       </div>
                   </div>
                        
                                          </div>


                
               
    
        
            
                   );
        
    }
}
export default Signupworker;