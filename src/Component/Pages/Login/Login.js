import React from "react";
import "./Login.css";
import loginImage from "../../../Assets/Images/login.jpg";

import facebookIcon from "../../../Assets/Icons/facebook.png";
import googleIcon from "../../../Assets/Icons/google.png";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-light pt-3">
      <div className="container bg-white">
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div>
            <img className="img-fluid" src={loginImage} alt="" />
          </div>
          <div className="login">
            <h2>Login</h2>

            {/* Social Media sign in start here */}
            <div className="social-media-login">
              <button>
                <img style={{ width: "30px" }} src={googleIcon} alt="" />
                <span>Sign in With Google</span>
              </button>
              <button>
                <img style={{ width: "30px" }} src={facebookIcon} alt="" />
                <span>Sign in With Google</span>
              </button>
            </div>
            {/* Social Media sign in ends here */}
            <div className="signByEmail">
              <div></div>
              <p>Or sign in by email</p>
              <div></div>
            </div>

            {/* email and password sign in start here */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">
                  Email
                  <span className="start">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  className="emailInput"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">
                  Password<span className="start">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  className="passwordInput"
                />
              </Form.Group>
              <h6 className="forgetPassword">Forget Password?</h6>
              <Button className="submitBtn" type="submit">
                Login
              </Button>
            </Form>
            {/* email and password sign in ends here */}
            <div className="createNewAccount">
              <span> Not registered yet?</span>
              <Link to="/signUp">
                <button>Create an Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
