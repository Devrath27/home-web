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
    }
    

    render(){
        return( 
            
           <form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
               <h1>get service...</h1>
               <table style={{marginLeft:"auto",marginRight:"auto"}}>

              <tr>
              <td><span>service type</span></td>
               <tr>
                   
                   <td><select  name='serviceType'  onChange={this.myChangeHandler}>
                   <option value="c">c</option>
                   <option value="e">e</option>
                   <option value="s">s</option>
                   <option value ="m">m</option>
                   <option value ="ce">ce</option>
                   <option value ="arci">arci</option>
                   <option value ="pcm">pcm</option>
                   <option value ="others">others</option>
               </select>
               </td>
               </tr>
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