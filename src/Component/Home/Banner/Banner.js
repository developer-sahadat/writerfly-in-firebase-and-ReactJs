import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Assets/Images/banner1.png";
import banner2 from "../../../Assets/Images/banner2.png";
import banner3 from "../../../Assets/Images/banner3.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-black">Creative writer</h3>
            <p className="text-black">
              Attributes Are you looking for your content?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-black">Creative writer</h3>
            <p className="text-black">
              Attributes Are you looking for your content?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-black">Creative writer</h3>
            <p className="text-black">
              Attributes Are you looking for your content?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
