import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';

import Nav from './component/Nav';
import Home from './component/Home';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";

import Logincust from './component/Logincust';
import Loginw from './component/Loginw';
import Signupw from './component/Signupw';
import Signupcust from './component/Signupcust';
import Getservice from './component/Getservice';
import Loginpg from './component/Loginpg';
import Account from './component/Account';
import Profile from './component/Profile';
import Logout from './component/Logout';
import Mybooking from './component/Mybooking';
import services from  './component/services'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <Nav/>
    
   
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Service" component={services}/>
     <Route path="/Logincust" component={Logincust}/>
     <Route path="/Loginworker" component={Loginw}/>
     <Route exact path="/loginpg" component={Loginpg}/>
     <Route exact path="/Account" component={Account}/>
     <Route exact path="/Signupworker" component={Signupw}/>
     <Route path="/Signupcust" component={Signupcust}/>
     <Route path="/get_service" component={Getservice}/>
     <Route path="/Profile" component={Profile}/>
     <Route path="/Logout" component={Logout}/>
     <Route path="/mybookings" component={Mybooking}/>
   </Switch>
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
