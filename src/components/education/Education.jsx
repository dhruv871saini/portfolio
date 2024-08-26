import React from "react";
import "./education.css";
import Animationright from "../Sectionanimation.jsx/Animationright";
import Sectionanimation from "../Sectionanimation.jsx/Sectionanimation";

const Education = () => {
  return (
    <div>
      <div className="container-fluid text-white heights">
        <div className="row mx-5 px-5 mt-4">
          <div className="col-md-12 mb-3">
            <div className="oranges display-4 text-uppercase fw-bold">
              Education
            </div>
          </div>
          <div className="col-md-7 my-3">
            <Sectionanimation>
              <div>
                <div className="row rounded bg-orangesd p-3 my-3 hovers">
                  <div className="col-md-2">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/8c24a05a82d147208f44454f53cfd29a-removebg-preview.png`}
                      className="w-100"
                      alt="MERN Full Stack Developer"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="fs-5 fw-bold text-dark">2024-2025</div>
                    <div className="fs-4">MERN Full Stack Developer</div>
                    <div className="fs-5 text-dark fw-bold">Ducat Academy</div>
                  </div>
                </div>

                <div className="row rounded bg-orangesd p-3 my-4 hovers">
                  <div className="col-md-2">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/8c24a05a82d147208f44454f53cfd29a-removebg-preview.png`}
                      className="w-100"
                      alt="Bachelor Of Computer Applications"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="fs-5 fw-bold text-dark">2022-2025</div>
                    <div className="fs-4">Bachelor Of Computer Applications</div>
                    <div className="fs-5 text-dark fw-bold">
                      Indira Gandhi National Open University
                    </div>
                  </div>
                </div>

                <div className="row rounded bg-orangesd p-3 my-3 hovers">
                  <div className="col-md-2">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/8c24a05a82d147208f44454f53cfd29a-removebg-preview.png`}
                      className="w-100"
                      alt="Computer Hardware And Networking"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="fs-5 fw-bold text-dark">2022-2023</div>
                    <div className="fs-4">Computer Hardware And Networking</div>
                    <div className="fs-5 text-dark fw-bold">
                      Government Industrial Training Institute Pusa
                    </div>
                  </div>
                </div>
              </div>
            </Sectionanimation>
          </div>

          <div className="col-md-5 mb-5" style={{ paddingBottom: '100px', paddingTop: 0 }}>
            <Animationright>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Screenshot_2024-08-14_165353-removebg-preview.png`}
                  alt="Educational Background"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </Animationright>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
