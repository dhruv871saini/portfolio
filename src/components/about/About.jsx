import React from "react";
import "./about.css";
import Sectionanimation from "../Sectionanimation.jsx/Sectionanimation";
import Animationright from "../Sectionanimation.jsx/Animationright";

const About = () => {
  return (
    <div>
      <div className="container-fluid heights">
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <ul>
              {/* Cleaned up commented-out code */}
              {/* <li>
                <div className="dot p-1 bg-oranges"></div>
                <div className="container p-1 lineOrages bg-oranges"></div>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 font-style text-white fs-5">
              <div className="display-5 text-uppercase text-white underline-custom">
                let&nbsp; me&nbsp; <span className="oranges">introduce</span>{" "}
                &nbsp;myself
              </div>
              <Sectionanimation>
                <div className="margin-p mb-5">
                  <p>
                    Hi Everyone,
                    <br />I am <span className="orangesd">Dhruv Saini</span>{" "}
                    from <span className="orangesd">New Delhi, India</span>.
                  </p>
                  <p>
                    I am currently in the third year of my{" "}
                    <span className="orangesd">
                      Bachelor's degree in Computer <br /> Applications
                    </span>{" "}
                    (Correspondence).
                  </p>
                  <p>
                    I also completed an
                    <span className="orangesd"> internship </span>
                    at Consistent Infosystems Private Limited.
                  </p>
                  <ul>
                    <li>
                      I am fluent in classics like{" "}
                      <span className="orangesd">C++, Java, JavaScript, and DSA.</span>
                    </li>
                    <li>
                      My field of interest is building{" "}
                      <span className="orangesd">new Web Technologies and Products.</span>
                    </li>
                    <li>
                      Worked with libraries & frameworks like{" "}
                      <span className="orangesd">ReactJS, NodeJS.</span> I have knowledge of databases like{" "}
                      <span className="orangesd">MySQL, MongoDB.</span>
                    </li>
                  </ul>
                </div>
              </Sectionanimation>
            </div>
            <div className="col-md-4">
              <Animationright>
                <img
                  src={`${process.env.PUBLIC_URL}/images/240_F_826297995_gHRLKyv4GIP3m59PPertUglA2bTG9eoc.jpg`}
                  alt="Portrait of Dhruv Saini"
                  className="margin-img"
                />
              </Animationright>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
