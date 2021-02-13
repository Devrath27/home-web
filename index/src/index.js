import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import Service from './Service';
import Login from './Login';
import Signup from './Signup';
import Getservice from './Getservice';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Nav />
   
   <Switch>
     <Route exact path="/" component={App,Nav,Home}/>
     <Route exact path="/Service" component={Service}/>
     <Route exact path="/Login" component={Login}/>
     <Route path="/Signup" component={Signup}/>
     <Route path="/get_service" component={Getservice}/>
   </Switch>
   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
