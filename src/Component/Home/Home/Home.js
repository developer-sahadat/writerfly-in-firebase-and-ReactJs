import React from "react";
import useService from "../../../Hook/useService";
import Service from "../../Shear/Service/Service";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  const [services] = useService();

  return (
    <div>
      <Banner />

      <div className="container">
        <h1 className="services-title">
          Our <span>Content Write</span> Services<span>.</span>
        </h1>
        <div className="row row-cols-lg-3 row-cols-md-2 g-3 mb-4 mt-3">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
