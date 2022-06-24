import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';


import React from 'react';
import {  Link } from "react-router-dom";
const Navigation= () =>{
  return (
    <div>
  
    <Navbar bg="light">
    <img
      src="https://logos-world.net/wp-content/uploads/2021/03/Experian-Logo.png"
      width="70"
      height="40"
    />
    <Container>
    <Navbar.Brand href="/home">CreditMate</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/games">Games</Nav.Link>

    </Nav>
 
    </Container>
  </Navbar>
  


  </div>
      

  );
}
export default Navigation;