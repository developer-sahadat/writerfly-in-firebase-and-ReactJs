import React from "react";
import contact from "../../../Assets/Images/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className=" my-5">
      <div className="container">
        <h1 className="title">
          Contact <span>Us</span>
        </h1>
        <div className="row shadow p-3 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="pb-lg-0 pb-sm-4 pb-4">
              <img src={contact} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <div className="row g-4">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    aria-label="name"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    aria-label="email"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="number"
                    aria-label="number"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="issue"
                    aria-label="issue"
                  />
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: " 150px" }}
                    ></textarea>
                    <label for="floatingTextarea2">message</label>
                  </div>
                  <br />
                  <button className="contact-btn">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
