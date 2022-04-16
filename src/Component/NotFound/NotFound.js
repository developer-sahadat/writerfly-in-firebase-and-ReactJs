import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="container text-center p-5">
        <div className="d-flex justify-content-center align-items-center p-5 m-5">
          <h4 className="me-3">404</h4>
          <p>The page you are looking for was not found</p>
        </div>
        <Link to="/" className="fs-3 text-danger">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
