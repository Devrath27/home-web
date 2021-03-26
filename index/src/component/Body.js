import React from "react";
import electrical from "../images/elect.png";
import carpenter from "../images/carp.jpg";
import mechanics from "../images/vmec.jpg";
import doctor from '../images/doctor.jpg';
import './services.css';
import services from './services';
import {Link} from "react-router-dom";
import './body.css';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
    CardImg,
    Row,
    Col,
} from "reactstrap";
const body=()=>{
return(
    <div className="ser">
            
<Row>
    <Col md={3}>
<card className="card" >
<CardImg   style={{ height:"300px"}} src={electrical} alt="Electrical"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>ELECTRICAL</h6> 
            
        </cardTitle>
    
        
        <CardText >For electrical related issue</CardText>
        <Container className="text-center">
        <Button color="info" outline >
            Know more
        </Button>
        </Container>

    </CardBody>
</card>

</Col>
<Col md={3}>
<card className="card" >
<CardImg style={{ height:"300px"}}  src={doctor} alt="doctor"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>DOCTOR</h6> 
            
        </cardTitle>
    
        
        <CardText >For health related issue </CardText>
        <Container className="text-center">
        <Button color="info" outline >
            Know more
        </Button>
        </Container>

    </CardBody>
</card>

</Col>

<Col md={3}>
<card className="card" >
<CardImg style={{ height:"300px"}}  src={carpenter} alt="carpenter"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>CARPENTER</h6> 
            
        </cardTitle>
    
        
        <CardText >For furniture related issue </CardText>
        <Container className="text-center">
        <Button color="info" outline >
            Know more
        </Button>
        </Container>

    </CardBody>
</card>
</Col>
<Col md={3}>
<card className="card" >
<CardImg style={{ height:"300px"}}  src={mechanics} alt="carpenter"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>MECHANICS</h6> 
            
        </cardTitle>
    
        
        <CardText >For vehicle related issue </CardText>
        <Container className="text-center">
        <Button color="info" outline >
            Know more
        </Button>
        </Container>
        

    </CardBody>
</card>

</Col>
</Row>
<Container className="text-center">
<Link  className="button" to="/Service" style={{textDecoration:"none" }} >
        <Button color="info" outline className="but" >
        See more
        </Button>
        </Link>
        </Container>
    </div>
);
}
export default body;