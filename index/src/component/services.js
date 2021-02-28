import React,{Component} from "react";
import Header from "./Header";

import electrical from "../images/elect.png";
import carpenter from "../images/carp.jpg";
import mechanics from "../images/vmec.jpg";
import vwas from "../images/vwas.png";
import './services.css';
import cleaner from '../images/clean.jpg';
import barber from '../images/barber.jpg';
import doctor from '../images/doctor.jpg';
import rentcar from '../images/rent car.jpg';
import mason from '../images/mason.jpg';
import photographer from '../images/photographer.jpg';
import painter from '../images/painter.jpg';
import plumber from '../images/plumber.jpg';
import laundary from '../images/laundary.jpg';
import gardener from '../images/gardener.jpg';
import tv from '../images/tv.jpg';
import cctv from '../images/cctv.jpg';
//import "./barber.css";
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
const Services=()=>{
    return(
    <div>
        <Header/>
        <div className="ser">
     
<Row>
    <Col md={3}>
<card className="card" >
<CardImg   style={{ height:"359.86px"}} src={electrical} alt="Electrical"/>
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
<CardImg style={{ height:"359.86px"}}  src={doctor} alt="doctor"/>
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
<CardImg style={{ height:"359.86px"}}  src={carpenter} alt="carpenter"/>
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
<CardImg style={{ height:"359.86px"}}  src={mechanics} alt="carpenter"/>
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
<Col md={3}>
<card className="card" >
<CardImg style={{ height:"359.86px"}}  src={vwas} alt="vehicle cleaner"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>VEHICLE CLEANER</h6> 
            
        </cardTitle>
    
        
        <CardText >For cleaning of vehicle </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={cleaner} alt="home cleaner"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>HOME CLEANER</h6> 
            
        </cardTitle>
    
        
        <CardText >For home cleaning related serviece </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={barber} alt="barber"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>BARBER</h6> 
            
        </cardTitle>
    
        
        <CardText >For hair cutting and facial grooming </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={rentcar} alt="rent car"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>RENT CAR</h6> 
            
        </cardTitle>
    
        
        <CardText >Rent car for some period of time </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={mason} alt="mason"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>MASON</h6> 
            
        </cardTitle>
    
        
        <CardText >For build home  </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={photographer} alt="photographer"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>PHOTOGRAPHER</h6> 
            
        </cardTitle>
    
        
        <CardText >For photo and video shooting</CardText>
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
<CardImg style={{ height:"359.86px"}}  src={painter} alt="painter"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>PAINTER</h6> 
            
        </cardTitle>
    
        
        <CardText >For painting purposes </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={plumber} alt="plumber"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>PLUMBER</h6> 
            
        </cardTitle>
    
        
        <CardText >For repairing water pipes and toilet etc.</CardText>
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
<CardImg style={{ height:"359.86px"}}  src={laundary} alt="laundary"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>LAUNDARY</h6> 
            
        </cardTitle>
    
        
        <CardText >For washing cloths </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={gardener} alt="gardener"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>GARDENER</h6> 
            
        </cardTitle>
    
        
        <CardText >For cleaning garden and planting trees </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={tv} alt="Television"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>TV</h6> 
            
        </cardTitle>
    
        
        <CardText >For repairing tv and dish antena </CardText>
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
<CardImg style={{ height:"359.86px"}}  src={cctv} alt="cctv"/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>CCTV</h6> 
            
        </cardTitle>
    
        
        <CardText >For repairing and setting cctv </CardText>
        <Container className="text-center">
        <Button color="info" outline >
            Know more
        </Button>
        </Container>

    </CardBody>
</card>
</Col>


</Row>

</div>
</div>
    );
}
export default Services;