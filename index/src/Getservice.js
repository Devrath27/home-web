import React from 'react'

class Getservice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serviceType:'',
            problem: '',
            location:'',
            image: '',
            
                    };
    }
    myChangeHandler=(event) =>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]: val});
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Hello" )
    }

    render(){
        return( 
            
           <form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
               <h1>get service...</h1>
               <table style={{marginLeft:"auto",marginRight:"auto"}}>

              <tr>
              <td><span>service type</span></td>
               <td><input type='text' name='serviceType'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
              <tr>
                  <td><span>problem</span></td>
                  <td> <input type='text' name='problem'
               onChange={this.myChangeHandler}
               /></td>
              </tr>
               
               <tr>
                   <td><span>insert image</span></td>
                   <td><input type='file' name='image'
               onChange={this.myChangeHandler}
               /></td>
               </tr>
               <tr>
                   <td><span>Enter location:</span></td>
                   <td><input type='location' name='location'
               onChange={this.myChangeHandler}
               /></td>
               </tr>
               
              
              
               </table>
               <br/>
               
               <input type='submit'/> 

           </form>
        );
        
    }
}
export default Getservice;