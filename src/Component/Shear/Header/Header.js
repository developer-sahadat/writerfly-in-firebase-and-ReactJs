import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import auth from "../../../Firebase/init";
import Spinners from "../Spinners/Spinners";
import "./Header.css";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spinners />;
  }

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar sticky="top" className="shadow-sm" bg="white" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
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

            {user?.uid ? (
              <button onClick={logout} className="loginBtn">
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="loginBtn">Login</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
