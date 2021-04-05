import React from "react";
import {Jumbotron,Container,Button} from "reactstrap";
import {Link} from "react-router-dom";
import './header.css';
const Header=()=>{
    var x=sessionStorage.job;
return(
    <div>
        <Jumbotron className="text-center">
            <h1 style={{color:"#fd8c04"}}> Services 4U</h1>
            <p className="header">
            This is the platform where you will get all the home delivery services at satisfactory cost.<br></br>
            Thank you !
            </p>
        
        <Container>
        {x!=="worker"?<Link  className="button" to="/get_service" style={{textDecoration:"none" }} >
        <Button color="info" outline className="but" >
        BOOK NOW
        </Button>
        </Link> : <p></p>}
        
        </Container>
        </Jumbotron>
    </div>
);


}
export default Header;