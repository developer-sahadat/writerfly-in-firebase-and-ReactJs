import React from "react";
import contact from "../../../Assets/Images/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div class=" my-5">
        <div class="container">
          <h1 className="title">
            Contact <span>Us</span>
          </h1>
          <div class="row shadow p-3 d-flex justify-content-center align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="pb-lg-0 pb-sm-4 pb-4">
                <img src={contact} alt="" className="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div>
                <div class="row g-4">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="name"
                      aria-label="name"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="email"
                      aria-label="email"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="number"
                      aria-label="number"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="issue"
                      aria-label="issue"
                    />
                  </div>

                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: " 150px" }}
                      ></textarea>
                      <label for="floatingTextarea2">message</label>
                    </div>
                    <br />
                    <button class="contact-btn">Contact Now</button>
                  </div>
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
