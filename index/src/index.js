import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';

import Nav from './component/Nav';
import Home from './component/Home';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch,Router} from "react-router-dom";

import Logincust from './component/Logincust';
import Loginworker from './component/Loginw';
import Signupworker from './component/Signupworker';
import Signupcust from './component/Signupcust';
import Getservice from './component/Getservice';
import Loginpg from './component/Loginpg';
import Account from './component/Account';
import Profile from './component/Profile';
import Logout from './component/Logout';
import Mybooking from './component/Mybooking';
import services from  './component/services'
import Nav1 from './component/nav1';
import ChangeProfile from './component/ChangeProfile';
import Order from './component/Order';
import Cardes from './component/Cardes';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    
   
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Services" component={services}/>
     <Route path="/Logincust" component={Logincust}/>
     <Route path="/Loginworker" component={Loginworker}/>
     <Route exact path="/loginpg" component={Loginpg}/>
     <Route exact path="/Account" component={Account}/>
     <Route exact path="/Signupworker" component={Signupworker}/>
     <Route path="/Signupcust" component={Signupcust}/>
     <Route path="/get_service" component={Getservice}/>
     <Route path="/Profile" component={Profile}/>
     <Route path="/Logout" component={Logout}/>
     <Route path="/Mybooking" component={Mybooking}/>
     <Route path ="/changeProfile" component={ChangeProfile}/>
     <Route path="/Order" component={Order}/>
     <Route path="/KnowMore" component={Cardes}/>
   </Switch>
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
