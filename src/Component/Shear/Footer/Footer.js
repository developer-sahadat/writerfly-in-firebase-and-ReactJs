import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import facebookIcon from "../../../Assets/Icons/facebook.png";
import linkedinIcon from "../../../Assets/Icons/linkedin.png";
import twitterIcon from "../../../Assets/Icons/twitter.png";
import instagramIcon from "../../../Assets/Icons/instagram.png";

const Footer = () => {
  return (
    <footer className=" footer-content">
      <div className="container">
        <div>
          <div className="row row-cols-md-3">
            <div>
              <h4>Contact us</h4>
              <p>
                We are always at your service to let you know if you have any
                problems. We will try our best to help you
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faLocationArrow} />{" "}
                Savar, Dhaka-1344
              </p>
              <p>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faPhone}
                ></FontAwesomeIcon>{" "}
                +8801998839126
              </p>
              <p>
                <FontAwesomeIcon className="me-2" icon={faEnvelope} />{" "}
                mdridoysikder862@gmail.com
              </p>
            </div>
            <div>
              <h4>Service</h4>
              <p>
                <Link to="services m-0" className="text-light">
                  Write articles
                </Link>
              </p>
              <p>
                <Link className="text-light" to="services">
                  Write SEO blog
                </Link>
              </p>
              <p>
                <Link className="text-light" to="services">
                  write love letter
                </Link>
              </p>
            </div>
            <div>
              <h4>Follow us</h4>
              <a
                href="https://www.facebook.com/DeveloperShahadatHossain/"
                target="blank"
              >
                <img
                  className="mb-1"
                  style={{ width: "30px" }}
                  src={facebookIcon}
                  alt=""
                />
              </a>
              <p>Our Facebook account please joint...</p>
              <a
                href="https://www.linkedin.com/in/developer-sahadat/"
                target="blank"
              >
                <img
                  className="mb-1"
                  style={{ width: "30px" }}
                  src={linkedinIcon}
                  alt=""
                />
              </a>
              <p>Our Linkedin account please joint...</p>
              <a href="https://twitter.com/wd_shahadat" target="blank">
                <img
                  className="mb-1"
                  style={{ width: "30px" }}
                  src={twitterIcon}
                  alt=""
                />
              </a>
              <p>Our Twitter account please joint...</p>
              <a
                href="https://www.instagram.com/developershahadat/"
                target="blank"
              >
                <img
                  className="mb-1"
                  style={{ width: "30px" }}
                  src={instagramIcon}
                  alt=""
                />
              </a>
              <p>Our Instagram account please joint...</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
