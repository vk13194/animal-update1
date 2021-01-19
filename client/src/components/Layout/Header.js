import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
    <div>
    <Navbar bg="light" expand="lg">
    <Link to="/">
  <Navbar.Brand >Animalls</Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link className="nav-link">
      <Link to="/post">
      Shell Animal</Link>
      </Nav.Link >
    <Nav.Link className="nav-link">
      <Link to="/">
      Home</Link>
      </Nav.Link >
      <Nav.Link className="nav-link">
      <Link to="/question">
      Question
      </Link>
      </Nav.Link>
      <Nav.Link className="nav-link">
      <Link to="/user">
      your Profile</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
