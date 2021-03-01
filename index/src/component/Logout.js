import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
class Logout extends React.Component{
    constructor(props){
        super(props);
       
                   
                    this.get=this.get.bind(this);
    }
    get=(event)=>{
        sessionStorage.removeItem("Email");
    }
    render(){
return(
    <div>
        <p>*Are you sure for log out?????</p>
        <Link onClick={this.get} to="/Loginpg">YES</Link>
        <Link to="/Account">NO</Link>
    </div>
);
    }
        
    
}
export default Logout;