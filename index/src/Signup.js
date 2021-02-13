import React from 'react'
import Login from './Login.css';
class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email: '',
            cityName:'',
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
            
           <form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
               <h1>enter the details</h1>
               <table style={{marginLeft:"auto",marginRight:"auto"}}>

              <tr>
              <td><span>name</span></td>
               <td><input type='text' name='name'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
              <tr>
                  <td><span>email</span></td>
                  <td> <input type='text' name='email'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
              <tr>
                  <td><span>City Name</span></td>
                  <td> <input type='location' name='cityName'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
               
               <tr>
                   <td><span>contact no.</span></td>
                   <td><input type='text' name='contact'
               onChange={this.myChangeHandler}
               /></td>
               </tr>
              
              <tr>
                  <td><span>password</span></td>
                  <td><input type='password' name='password'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
               
               
               9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
              

               </table>
               <br/>
               
               <input type='submit'/> 

           </form>
        );
        
    }
}
export default Signup;