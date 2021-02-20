import React from "react";
import {Jumbotron,Container,Button} from "reactstrap";
const Home=()=>{
return(
    <div>
        <Jumbotron className="text-center">
            <h1>Services 4U</h1>
            <p>
            This is the platform where you will get all the home delivery services at satisfactory cost.<br></br>
            Thank you!.
            </p>
        
        <Container>
            <Button color="primary" outline >Welcome 
            </Button>
        </Container>
        </Jumbotron>
    </div>
);


}
export default Home;