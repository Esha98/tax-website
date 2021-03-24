import React from "react";

import {
  Navbar,
  Nav
} from "react-bootstrap";

import logo from "../../assets/img/logo.jpg";

/*Css Files*/
import "./Navbar.css";
import "../../assets/css/Theme.css";

const Navbar_comp = (props) => {
  return (
    <Navbar className="nav-Container">
      <div className="container-fluid nav-wrapper">
        <Navbar.Brand className="BrandName"> <img class="logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="d-flex flex-row-reverse">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbar_comp;
