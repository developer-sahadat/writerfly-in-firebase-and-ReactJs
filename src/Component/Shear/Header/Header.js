import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/Images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar sticky="top" className="shadow-sm" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "200px" }} src={logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                Blogs
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                Services
              </Nav.Link>
            </Nav>
            <button className="loginBtn">Login</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
