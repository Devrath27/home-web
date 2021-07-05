import React from 'react'
import Login from './Login.css';
import {Link} from 'react-router-dom'
class Signupw extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            cityName:'',
            contact: null,
            serviceType:'',
            login:false,
            password: '',
            longitude:'',
            latitude:''
           
                    };
                    this.myChangeHandler=this.myChangeHandler.bind(this);
                    this.mySubmitHandler=this.mySubmitHandler.bind(this);
                    this.getAddress=this.getAddress.bind(this);
                    this.showPosition=this.showPosition.bind(this);
                    this.getAddress();
                    
    }
    getAddress(){
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        return;
      }
      showPosition(position){
       
        var latitude=position.coords.latitude;
       var longitude= position.coords.longitude;
        this.setState({latitude :latitude });
            this.setState({longitude :longitude});
         
      }
    myChangeHandler=(event) =>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
       
        console.log(this.state);


        var signupworker ={
            name : this.state.name,
            email : this.state.email,
            cityName:this.state.cityName,
            contact:this.state.contact,
            serviceType:this.state.serviceType,
            password:this.state.password,
            latitude:this.latitude,
            longitude:this.longitude
            
    
          };
          fetch('https://service-4u.herokuapp.com/Signupworker', {
          method: 'post',
          body : JSON.stringify({
            signupworker
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
       sessionStorage.setItem("id",json.prof);
       console.log(sessionStorage.id);
       sessionStorage.setItem("job","worker");
       alert("you are resistred successfully...")
       }
       else
       alert(json.prof);
     })
     .catch((error) => {
       console.error(error);
     });
   }
   

    

    render() {
      var prof=sessionStorage.id;
       
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
         <div class="input">
        
         <label>service type:</label>
         <select  name='serviceType'  onChange={this.myChangeHandler} >
             <option value="doctor">doctor</option>
             <option value="barber">barber</option>
             <option value="s">s</option>
             <option value ="m">m</option>
             <option value ="ce">ce</option>
             <option value ="arci">arci</option>
             <option value ="pcm">pcm</option>
             <option value ="others">others</option>
         </select>
         

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
}}
export default Signupw;