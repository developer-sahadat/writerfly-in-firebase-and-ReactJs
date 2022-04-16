import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink className="link" to="/services">
                Services
              </NavLink>
              <NavLink className="link" to="/about">
                About
              </NavLink>
              <NavLink className="link" to="blogs">
                Blogs
              </NavLink>
            </Nav>
            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
