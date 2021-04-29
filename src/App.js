import './App.css';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Videos from './Components/Videos';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';

class App extends Component {
  render(){
    return (
    <div className="wrapper">
      <Navbar bg="dark" variant="dark">
        <div class="container">
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Navbar.Brand href="/Videos">Videos</Navbar.Brand>
          <Navbar.Brand href="/AboutUs">About Us</Navbar.Brand>
          <Navbar.Brand href="/ContactUs">Contact Us</Navbar.Brand>
        </div>
      </Navbar>
      <BrowserRouter>
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Videos">
            <Videos />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
    }
}

export default App;
