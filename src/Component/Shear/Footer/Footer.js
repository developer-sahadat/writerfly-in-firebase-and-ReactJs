import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import facebookIcon from "../../../Assets/Icons/facebook.png";
import linkedinIcon from "../../../Assets/Icons/linkedin.png";
import twitterIcon from "../../../Assets/Icons/twitter.png";
import instagramIcon from "../../../Assets/Icons/instagram.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer className="container">
        <div className="row row-cols-md-3 row-cols-1">
          <div>
            <h4>Contact us</h4>
            <p>
              <FontAwesomeIcon className="me-2" icon={faLocationArrow} /> Savar,
              Dhaka-1344
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

            <Link to="/services" className="footer-link">
              Write articles
            </Link>
            <br />

            <Link to="/services" className="footer-link">
              Write SEO blog
            </Link>

            <br></br>
            <Link to="/services" className="footer-link">
              write love letter
            </Link>
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

            <span>Our Facebook account please joint...</span>

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

            <span>Our Linkedin account please joint...</span>
            <a href="https://twitter.com/wd_shahadat" target="blank">
              <img
                className="mb-1"
                style={{ width: "30px" }}
                src={twitterIcon}
                alt=""
              />
            </a>

            <span>Our Twitter account please joint...</span>
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

            <span>Our Instagram account please joint...</span>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <div>
            <NavLink className="footer-link me-3" to="/">
              Home
            </NavLink>
            <NavLink className="footer-link me-3" to="/services">
              Services
            </NavLink>
            <NavLink className="footer-link me-3" to="/about">
              About
            </NavLink>
            <NavLink className="footer-link me-3" to="blogs">
              Blogs
            </NavLink>
          </div>
          <h6>Copyright @2022 | Designed With by Junior Developer Shahadat</h6>
          <div>
            <a
              href="https://www.facebook.com/DeveloperShahadatHossain/"
              target="blank"
            >
              <img
                className="me-2"
                style={{ width: "30px" }}
                src={facebookIcon}
                alt=""
              />
            </a>

            <a
              href="https://www.linkedin.com/in/developer-sahadat/"
              target="blank"
            >
              <img
                className="me-2"
                style={{ width: "30px" }}
                src={linkedinIcon}
                alt=""
              />
            </a>

            <a href="https://twitter.com/wd_shahadat" target="blank">
              <img
                className="me-2"
                style={{ width: "30px" }}
                src={twitterIcon}
                alt=""
              />
            </a>

            <a
              href="https://www.instagram.com/developershahadat/"
              target="blank"
            >
              <img
                className="me-2"
                style={{ width: "30px" }}
                src={instagramIcon}
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
    </div>

    // <footer className=" footer-content">
    //   <div className="container">
    //     <div>
    //       <div className="row row-cols-md-3">

    //       </div>
    //     </div>
    //     <hr />
    //   </div>
    // </footer>
  );
};

export default Footer;
