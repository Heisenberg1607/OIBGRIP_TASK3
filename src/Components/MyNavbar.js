import React from "react";
import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar className="d-flex px-5 navbar-color pt-3" expand="lg">
        <Navbar.Brand className="text-white logo" href="#home">
          Atharva <span className="sname">K</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Nav.Link className="text-white links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white links" href="#describe">
              About Me
            </Nav.Link>
            <Nav.Link className="text-white links" href="#EDU">
              Resume
            </Nav.Link>
            <Nav.Link className="text-white links" href="#contact">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
