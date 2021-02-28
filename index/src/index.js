import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Nav from './component/Nav';
import Home from './component/Home';
import Header from './component/Header';
import services from './component/services';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import Logincust from './component/Logincust';
import Loginworker from './component/Loginworker';
import Signupworker from './component/Signupworker';
import Signupcust from './component/Signupcust';
import Getservice from './component/Getservice';
import Loginpg from './component/Loginpg';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <Nav/>
    
   
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/services" component={services}/>
     <Route path="/Logincust" component={Logincust}/>
     <Route path="/Loginworker" component={Loginworker}/>
     <Route exact path="/login" component={Loginpg}/>
     <Route path="/Signupworker" component={Signupworker}/>
     <Route path="/Signupcust" component={Signupcust}/>
     <Route path="/get_service" component={Getservice}/>
     <Route exact path="/seemore" component={services}/>
   </Switch>
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
