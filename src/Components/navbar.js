import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../images/logotravelputih.png'

class NavbarAll extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark" expand='lg' fixed="top">
        <Navbar.Brand href="/">
          <img className="d-inline-block align-top" src={logo} width='100' alt="React Bootstrap logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/reservation">Reservation</Nav.Link>
            <Nav.Link href="/currency">Currency</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarAll;