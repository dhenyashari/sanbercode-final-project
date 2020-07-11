import React from 'react';
import {Navbar,Nav, NavItem} from 'react-bootstrap';
import logo from '../images/logotravelputih.png'
import { Link } from "react-router-dom";
// import { LinkContainer } from 'react-router-bootstrap'

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
            {/* <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer> */}
            {/* <LinkContainer to="/reservation">Reservation</LinkContainer> */}
            {/* <LinkContainer to="/currency">Currency</LinkContainer> */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/reservation">Reservation</Nav.Link> */}
            {/* <Nav.Link href="/currency">Currency</Nav.Link> */}
            {/* <Nav.Link href="/order">Confirmation Order</Nav.Link> */}
            {/* <Link to="/" className="nav-link">Home</Link> */}
            <Link to="/currency" className="nav-link">Currency</Link>
            <Link to="/reservation" className="nav-link">Reservation</Link>
            <Link to="/order" className="nav-link">Confirmation Order</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarAll;