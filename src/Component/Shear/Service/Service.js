import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { title, image, price, description } = service;
  return (
    <div>
      <div className="service">
        <img src={image} className="img-fluid" alt="service" />
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <h6>${price}</h6>
          <Link to="/checkoutPage">
            <button className="orderBtn">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
