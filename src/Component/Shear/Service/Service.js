import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  console.log(service);
  const { title, image, price, description } = service;
  return (
    <div>
      <div className="service">
        <img src={image} className="img-fluid" alt="service" />
        <div>
          <h5>{title}</h5>
          <p>{description}</p>
          <h6>${price}</h6>
          <button className="orderBtn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
