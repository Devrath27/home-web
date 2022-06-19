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
import Cards from "./Cards";
import {Link} from "react-router-dom";
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
    const service=[
        { src:electrical, title:"ELECTRICIAN", text:"For electrical related issue"},

    {src:doctor, title:"DOCTOR" , text:"For health related issue"},
    {src:barber, title:"BARBER" , text:"For Hair cutting and facial grooming"},

     {src:mechanics ,title:"MECHANIC" ,text:"For vehicle related issue"},
     {src:vwas, title:"VEHICLE CLEANER", text:"For cleaning of vehicle"},
     {src:cleaner ,title:"HOUSE CLEANER" ,text:"For home cleaning related services"},
     {src:carpenter, title:"CARPENTER" ,text:"For furniture related issue"},
     {src:photographer, title:"PHOTOGRAPHER", text:"For photo and video shooting"},
     {src:painter ,title:"PAINTER", text:"For painting purposes"},
     {src:plumber, title:"PLUMBER", text:"For repairing water pipes and toilet etc."},
    {src:mason, title:"MASON", text:"For build home"},
     {src:laundary, title:"LAUNDARY" ,text:"For health related issue"},
     {src:tv, title:"TV", text:"For repairing tv and dish antena"},
     {src:cctv ,title:"CCTV" ,text:"For repairing and setting cctv"},
     {src:rentcar ,title:"RENT CAR", text:"Rent car for some period of time"},
     {src:gardener, title:"GARDENER" ,text:"For cleaning garden and planting trees"}



        
    ]
    const id=service.map(ids => (<Cards src={ids.src} title={ids.title} text={ids.text}/>))
    return(
    <div>
        <Header/>
        <div className="ser">
     
<Row>
    {id}
    
</Row>

</div>
<Container className="text-center">
<Link  className="button" to="/home-web" style={{textDecoration:"none" }} >
        <Button color="info" outline className="but" >
        See less
        </Button>
        </Link>
        </Container>
</div>
    );
}
export default Services;