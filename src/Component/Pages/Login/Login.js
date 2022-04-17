import React, { useRef } from "react";
import "./Login.css";
import loginImage from "../../../Assets/Images/login.jpg";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import facebookIcon from "../../../Assets/Icons/facebook.png";
import googleIcon from "../../../Assets/Icons/google.png";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/init";
import Spinners from "../../Shear/Spinners/Spinners";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  let location = useLocation();
  let navigate = useNavigate();
  /*-------user sign in start here -------*/
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /*-------password Reset start here -------*/
  const [sendPasswordResetEmail, passwordResetSending] =
    useSendPasswordResetEmail(auth);

  if (loading || passwordResetSending) {
    return <Spinners />;
  }

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  /*------- submit handler start here -------*/
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

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
                <span>Sign in With Facebook</span>
              </button>
            </div>
            {/* Social Media sign in ends here */}
            <div className="signByEmail">
              <div></div>
              <p>Or sign in by email</p>
              <div></div>
            </div>

            {/* email and password sign in start here */}
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">
                  Email
                  <span className="start">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  className="emailInput"
                  ref={emailRef}
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
                  name="password"
                  className="passwordInput"
                />
              </Form.Group>
              <h6
                className="forgetPassword"
                onClick={async () => {
                  if (emailRef.current.value) {
                    await sendPasswordResetEmail(emailRef.current.value);
                    toast("Please check your email!");
                  } else {
                    toast("Please enter your email!");
                  }
                }}
              >
                Forget Password?
              </h6>
              <Button className="submitBtn" type="submit">
                Login
              </Button>
              <ToastContainer />
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
