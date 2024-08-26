import React from "react";
import "./project.css";
import Upanimation from "../Sectionanimation.jsx/Upanimation";

const Project = () => {
  return (
    <div>
      <div className="display-3 oranges mt-3 heights">
        <div className="container">
          <div className="row text-center d-flex justify-content-center fw-bold display-3 ">
            PROJECT
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <Upanimation>
                <div className="bg-colors text-center hoveres">
                  <div className="text-white fs-1 text-center">
                    University Management
                  </div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/University-Transparent.png`}
                    className="w-100 mt-3"
                    alt="School Management"
                  />
                  <div className="w-75 playicon">
                    <a
                      // href=""
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                        className="w-25 float-left"
                        alt="Play Button"
                      />
                    </a>
                  <div class="fs-5 text-light fw-bold hoveres">
                    project details
                    <div class="hover-content">
                      <p>
                      University project is in updation process pls wait several days
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </Upanimation>
            </div>
            <div className="col-md-4">
              <Upanimation>
                <div className="bg-colors text-center hoveres">
                  <div className="text-white fs-1 text-center">E-Commerce</div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/web-development-online-marketplace-e-commerce-online-shopping-web-design-web-design-6b2f0e4fc6a600375f1376e86f37d2c8.png`}
                    className="w-75 mt-3"
                    alt="E-Commerce"
                  />
                  <div className="w-75 playicon">
                    <a
                      href="https://dhruv871saini.github.io/sainiShop/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                        className="w-25 float-left"
                        alt="Play Button"
                      />
                    </a>
                  <div class="fs-5 text-light fw-bold hoveres">
                    project details
                    <div class="hover-content">
                      <p>
                       Technology used : HTML ,CSS ,BOOTSTRAP , JAVASCRIPT & REACT.JS
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </Upanimation>
            </div>
            <div className="col-md-4">
              <Upanimation>
                <div className="bg-colors text-center hoveres">
                  <div className="text-white fs-1 text-center">
                  Web Chat Application
                  </div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/web chat.png`}
                    className="w-100 mt-3"
                    alt="Employee Management"
                  />
              
                  <div className="w-75 playicon">
                    <a
                      // href=""
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                        className="w-25 float-left"
                        alt="Play Button"
                      />
                    </a>
                  <div class="fs-5 text-light fw-bold hoveres">
                    project details
                    <div class="hover-content">
                      <p>
                        Comming soon next week
                      </p>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </Upanimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
