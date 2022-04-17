import React, { useState } from "react";
import signUpImage from "../../../Assets/Images/signup.jpg";
import facebookIcon from "../../../Assets/Icons/facebook.png";
import googleIcon from "../../../Assets/Icons/google.png";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Spinners from "../../Shear/Spinners/Spinners";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  /*------- email and password Sign Up start here -------*/
  const Navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  /*-------Google sign up start here -------*/
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  /*-------Facebook sign up start here -------*/
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  /*------- Update Profile start here -------*/
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating || googleLoading || facebookLoading) {
    return <Spinners />;
  }
  let userError;
  if (error || updateError || googleError || facebookError) {
    userError = error?.message
      ? error.message
      : updateError?.message
      ? updateError.message
      : googleError.message
      ? googleError.message
      : facebookError.message;
  }
  if (facebookUser || googleUser) {
    Navigate("/");
  }

  /*------- submit handler start here -------*/
  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      Navigate("/");
    } else {
      setErrorMessage("Sorry, your password did not match");
    }
  };

  return (
    <div className="w-100">
      <div className="bg-light pt-3">
        <div className="container bg-white">
          <div className="row row-cols-md-2 justify-content-center align-items-center">
            <div>
              <img className="img-fluid" src={signUpImage} alt="" />
            </div>
            <div className="login">
              <h2>Sign Up</h2>

              {/* Social Media sign in start here */}
              <div className="social-media-login">
                <button onClick={() => signInWithGoogle()}>
                  <img style={{ width: "30px" }} src={googleIcon} alt="" />
                  <span>Sign up With Google</span>
                </button>
                <button onClick={() => signInWithFacebook()}>
                  <img style={{ width: "30px" }} src={facebookIcon} alt="" />
                  <span>Sign up With Facebook</span>
                </button>
              </div>
              {/* Social Media sign in ends here */}
              <div className="signByEmail">
                <div></div>
                <p>Or sign up by email</p>
                <div></div>
              </div>

              {/* email and password sign in start here */}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    Name
                    <span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    required
                    className="emailInput"
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">
                    Email
                    <span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
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
                    name="password"
                    placeholder="Password"
                    required
                    className="passwordInput"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">
                    Confirm Password<span className="start">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    className="passwordInput"
                  />
                </Form.Group>
                <p className="text-center text-danger">
                  {errorMessage} {userError}
                </p>
                <Button className="submitBtn" type="submit">
                  Sign Up
                </Button>
              </Form>
              {/* email and password sign in ends here */}
              <div className="createNewAccount">
                <span> already have an account?</span>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
