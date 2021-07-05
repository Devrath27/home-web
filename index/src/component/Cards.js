import React from 'react';
import Cardes from './Cardes';
import{
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
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";

const Cards=(props)=>{
    return(
<Col md={3}>
<card className="card" >
<CardImg   style={{ height:"280px"}} src={props.src} alt={props.title}/>
    <CardBody className="text-center">
        <cardTitle >
          <h6>{props.title}</h6> 
            
        </cardTitle>
    
        
        <CardText >{props.text}</CardText>
        <Container className="text-center">
        <Link  className="button"  style={{textDecoration:"none" }} to="/KnowMore">
        <Button color="info" outline className=""  >
        Know More
        </Button>
        </Link>
        </Container>

    </CardBody>
</card>

</Col>
    );
}
export default Cards;