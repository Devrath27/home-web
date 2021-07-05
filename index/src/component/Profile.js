import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            name:"",
            contact:"",
            cityName:""
                    };
                    this.get();
                    this.get=this.get.bind(this);
    }
    get() {
        var profile={
            id:sessionStorage.id,
            stat:sessionStorage.job
           }
           fetch('https://service-4u.herokuapp.com/Profile', {
               method: 'post',
               body : JSON.stringify({
                 profile
               }),
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }
             }).then((res) => res.json())
          .then((json) => {
            
            var x=json.profile;
            this.setState({email:x.email,
    name:x.name,
    contact:x.contact,
    cityName:x.cityName
            });
            // this.setState({login:json.mes});
            // this.setState({login:json.mes});
            // this.setState({login:json.mes});
            })
          .catch((error) => {
            console.error(error);
          });
        
    }
    
   render(){
    
   return(
       <div>
                   <table>
  
  <tr>
    <td>NAME: </td>
    <td>{this.state.name}</td>
    
  </tr>
  <tr>
    <td>EMAIL: </td>
    <td>{this.state.email}</td>
    
  </tr>
  <tr>
    <td>CONTACT: </td>
    <td>{this.state.contact}</td>
  
  </tr>
  <tr>
    <td>CITY NAME: </td>
    <td>{this.state.cityName}</td>
   
  </tr>
  
</table>
<Link to="/changeProfile">CHANGE PROFILE</Link>
       </div>
   )
  }
}
  export default Profile;
  

