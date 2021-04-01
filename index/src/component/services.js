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
    <Cards src={electrical} title="ELECTRICAL" text="For electrical related issue"/>
    <Cards src={doctor} title="DOCTOR" text="For health related issue"/>
    <Cards src={barber} title="BARBER" text="For hair cutting and facial grooming"/>
    <Cards src={mechanics} title="MECHANICS" text="For vehicle related issue"/>
    <Cards src={vwas} title="VEHICLE CLEANER" text="For cleaning of vehicle"/>
    <Cards src={cleaner} title="HOUSE CLEANER" text="For home cleaning related services"/>
    <Cards src={carpenter} title="CARPENTER" text="For furniture related issue"/>
    <Cards src={photographer} title="PHOTOGRAPHER" text="For photo and video shooting"/>
    <Cards src={painter} title="PAINTER" text="For painting purposes"/>
    <Cards src={plumber} title="PLUMBER" text="For repairing water pipes and toilet etc."/>
    <Cards src={mason} title="MASON" text="For build home"/>
    <Cards src={laundary} title="LAUNDARY" text="For health related issue"/>
    <Cards src={tv} title="TV" text="For repairing tv and dish antena"/>
    <Cards src={cctv} title="CCTV" text="For repairing and setting cctv"/>
    <Cards src={rentcar} title="RENT CAR" text="Rent car for some period of time"/>
    <Cards src={gardener} title="GARDENER" text="For cleaning garden and planting trees"/>

</Row>

</div>
</div>
    );
}
export default Services;