import React from "react";
import "./Blogs.css";
import authorization from "../../../Assets/Images/authentication-vs-authorization.png";
import firebase from "../../../Assets/Images/firebase.jpg";
import firebaseServices from "../../../Assets/Images/firebase-service.jpg";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-md-2 row-cols-lg-3 py-5 g-4">
          <div>
            <article className="blog">
              <img src={authorization} className="img-fluid" alt="" />
              <div>
                <h5>Difference between authorization and authentication?</h5>
                <p>
                  <strong> Authentication:</strong> is the process of
                  identifying someone's identity by assuring that the person is
                  the same as what he is claiming for.
                </p>
                <p>
                  <strong>authentication:</strong> On the other hand, your
                  identity comes after being successfully authenticated by
                  CloudHQ. You can then allow CloudHQ to access resources such
                  as files and emails. Simply put, authorization gives our
                  systems the ability to access your data in the cloud
                </p>
                <hr />
                <h6>
                  <i> _Writer by Shahadat </i>
                </h6>
              </div>
            </article>
          </div>
          <div>
            <article className="blog">
              <img src={firebase} className="img-fluid" alt="" />
              <div>
                <h5>why are you using firebase?</h5>
                <p>
                  Firebase allows you to sync real-time data across all devices
                  - Android, iOS, and the web - without refreshing the screen.
                  Firebase offers integration with Google Ads, Data Studio, and
                  Slack so that your app development can be done with efficient
                  and proper management and maintenance.
                </p>

                <h6 className="fw-bold"> What other options do you have to</h6>
                <ul>
                  <li>Oauth2</li>
                  <li>Auth0</li>
                  <li>Okta</li>
                  <li>Rippling</li>
                </ul>
                <hr />
                <h6>
                  <i> _Writer by Shahadat </i>
                </h6>
              </div>
            </article>
          </div>
          <div>
            <article className="blog">
              <img src={firebaseServices} className="img-fluid" alt="" />
              <div>
                <h5>
                  What other services does firebase provide other than
                  authentication?
                </h5>
                <p>
                  Firebase is a backend-to-service. It provides developers with
                  a variety of tools and services to develop quality apps and
                  build their user base.
                </p>
                <ul>
                  <li>Hosting</li>
                  <li>Cloud Storage</li>
                  <li> Google Analytics</li>
                  <li>Cloud Messaging</li>
                  <li> Database</li>
                  <li> Predictions</li>
                  <li> Predictions</li>
                  <li>Cloud Functions</li>
                </ul>
                <hr />
                <h6>
                  <i> _Writer by Shahadat </i>
                </h6>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
