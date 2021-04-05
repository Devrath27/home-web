import React from 'react'
import Login from './Login.css';
import {Link} from "react-router-dom";
import './Signupcust.css'
class ChangeProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            cityName:'',
            contact: null,
            login:false,
            

           
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
        
        //console.log(job);
       var job =sessionStorage.job;
     var id=sessionStorage.id;
     console.log(job);
     console.log(id);
        var changeProfile ={
          id: id,
            name : this.state.name,
            email : this.state.email,
            cityName: this.state.cityName,
            contact: this.state.contact,
            job : job
    
          };
          fetch('http://localhost:8080/changeProfile', {
          method: 'post',
          body : JSON.stringify({
            changeProfile
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
       //console.log(json.mes);
       alert("you are change your profile successfully::");
     })
     .catch((error) => {
       console.error(error);
     });
    }

    render(){
      var prof=sessionStorage.Email;
       
       console.log(prof);
       
        return( 
            
          <div >
         
         
     <div className="form2 "> 
     <div className="text-center"> 
         <h4 style={{marginTop:"10px"}}>change profile</h4>
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
         <div class="input"><input type='text' name='cityName' placeholder="city" 
         onChange={this.myChangeHandler}></input>
         </div>
         <div class="input "><input className="Signupcust" type="submit" value="CHANGE PROFILE" ></input>
         </div>
         
      
                     </form>
                    
                 </div>
             </div>
                  
                                    </div>

        );
        
    }
}

export default ChangeProfile;