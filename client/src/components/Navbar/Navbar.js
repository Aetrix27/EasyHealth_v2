import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import "./Navbar.css"
import AuthService from "../../services/auth-service";
import { Component } from "react"
import { useNavigate } from 'react-router-dom';

//var user = AuthService.getCurrentUser();

export default class NavigationBar extends Component{
  
  constructor(props) {
    super(props);
    this.user = AuthService.getCurrentUser();
    this.logoutUser = this.logoutUser.bind(this);
}

logoutUser(){
  AuthService.logout();
  return (
    <Navigate to="/" />
  );
};

  //function NavigationBar() {
  render(){


  return (
    <Navbar expand="lg" variant="light" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Logo Section          <Nav className="me-auto">
            <Navbar.Brand href="/">
       
            </Navbar.Brand>
          </Nav>*/}
 
          
          {/* Links Section */}
          <Nav>
            <Nav.Link id = "nav" className="nav-item" href="/">Home</Nav.Link>
            {this.user && <Nav.Link id = "nav" className="nav-item" href="/documents">Documents</Nav.Link>}
            {this.user && <Nav.Link id = "nav" className="nav-item" href="/createDocument">New Document</Nav.Link>}
            {!this.user && <Nav.Link id = "nav" className="nav-item" href="/login">Login</Nav.Link>}
            {this.user && <Nav.Link id = "nav" className="nav-item" onClick={this.logoutUser}>Logout</Nav.Link>}
            <Nav.Link id = "nav" className="nav-item" href="/register">Register</Nav.Link>
            <Nav.Link id = "nav" className="nav-item" href="/notes">Notes</Nav.Link>

            {/* Conditional rendering of logged-in features             {!user && <Nav.Link className="nav-item" href="/login">Login page</Nav.Link>}
            {user && <Nav.Link className="nav-item" onClick={logoutUser}>Logout</Nav.Link>}*/}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
  }
}

//export default NavigationBar