import React from "react";
import useService from "../../../Hook/useService";
import Service from "../../Shear/Service/Service";

const Services = () => {
  const [services] = useService();

  return (
    <div>
      <div className="container">
        <h1 className="title">
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

export default Services;
