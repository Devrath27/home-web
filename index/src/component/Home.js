
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'; 
import {Route, Switch} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import App from "./App";
import Body from "./Body";



function Home() {
  return (
    <div> 
      <Header/>
      <Body/>
  
  </div>

  );
}
  export default Home;