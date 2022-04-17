import React from "react";
import "./About.css";
import personal from "../../../Assets/Images/personal.png";

const About = () => {
  return (
    <div>
      <div className="container p-2">
        <h1 className="title">
          About <span>Me</span>
        </h1>
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div className="personal">
            <div>
              <img src={personal} className="img-fluid" alt="personal" />
            </div>
          </div>
          <div>
            <div className="personal-info">
              <h3> Md Shahadat Hossain</h3>
              <h6>Junior Web Developer</h6>
              <p>
                Inshallah, I tried my best to do the course. I have a plan. I
                will form a team after completing the course. Already taken a
                few for my team. I will work with the team at the end of the
                course InshaAllah. I will work with LinkedIn and email marketing
                and bring in clients from outside and work with the team. So
                that our team can do a lot more work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
