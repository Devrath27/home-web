import React from 'react'

class Getservice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serviceType:'',
            problem: '',
            location:'',
            image: '',
            latitude:'',
            longitude:''
            
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
        var id=sessionStorage.id;
        console.log(this.state);
        var mybook ={
            id:id,
            serviceType : this.state.serviceType,
            problem : this.state.problem,
             location:this.state.location,
            image:this.state.image,
            latitude:this.state.latitude,
            longitude:this.state.longitude
            
    
          };
          console.log(mybook);

          fetch('http://localhost:8080/get_service', {
          method: 'post',
          body : JSON.stringify({
            mybook
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())
     .then((json) => {
       alert(json.respond);
       sessionStorage.setItem("bookboy",json.bookboy);
       sessionStorage.setItem("bookmob",json.bookmob);
       sessionStorage.setItem("mybooks",mybook);
       
     })
     .catch((error) => {
       console.error(error);
     });
        
    }
    

    render(){
      var prof=sessionStorage.id;
       
       console.log(prof);
        if(!prof)
        {  
            return(
                <div>
                    <h1>please login first.........</h1>
                </div>
            )
        }
        else{
        return( 
            
           <form onSubmit={this.mySubmitHandler} style={{textAlign:"center"}}>
               <h1>get service...</h1>
               <table style={{marginLeft:"auto",marginRight:"auto"}}>

              <tr>
              <td><span>service type</span></td>
               <tr>
                   
                   <td><select  name='serviceType'  onChange={this.myChangeHandler}>
                   <option value="doctor">doctor</option>
                   <option value="barber">barber</option>
                   <option value="elecrician">electrician</option>
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
        
    }}
}
export default Getservice;