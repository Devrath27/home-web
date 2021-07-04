import React from 'react'
import Login from './Login.css';
import {Link} from "react-router-dom";
import './Signupcust.css'
class Cardes extends React.Component{
    constructor(props){
        super(props);
        this.state={
           title:"",
            

           
                    };
                    this.setState({title:props.title});
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
         
          <p>{this.state.title}</p>
                  
         </div>

        );
        
    }
}

export default Cardes;