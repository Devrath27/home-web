import React from "react";
import electrical from "../images/elect.png";
import barber from "../images/barber.jpg";
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
import Cards from "./Cards";
const body=()=>{
    const service=[
        { src:electrical, title:"ELECTRICAL", text:"For electrical related issue"},

    {src:doctor, title:"DOCTOR" , text:"For health related issue"},
    {src:barber, title:"BARBER" , text:"For Hair cutting and facial grooming"},

     {src:mechanics ,title:"MECHANICS" ,text:"For vehicle related issue"}]
     const id=service.map(ids => (<Cards src={ids.src} title={ids.title} text={ids.text}/>))
return(
    <div className="ser">
            
<Row>
    {id}
</Row>
<Container className="text-center">
<Link  className="button" to="/Services" style={{textDecoration:"none" }} >
        <Button color="info" outline className="but" >
        See more
        </Button>
        </Link>
        </Container>
    </div>
);
}
export default body;