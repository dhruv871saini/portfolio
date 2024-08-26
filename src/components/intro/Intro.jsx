import React from "react";
import "./intro.css";
import TypingEffect from "../TypingEffect";
import Nav from "../nav/Nav";
import About from "../about/About";
import Education from "../education/Education";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Contact from "../contact/Contact";

const Intro = () => {
  return (
    <div className="container-fluid font-style">
      {/* <div class="sticky-top">
        <Nav/>
      </div> */}
      <div className="row">
        <div className="col-md-4 orange margin-sign d-flex flex-column justify-content-between">
          <div className="d-flex align-items-start mb-3">
            <img src={`${process.env.PUBLIC_URL}/images/signature.png`} alt="Signature" />
          </div>
          <div className="circle">
            <img
              src={`${process.env.PUBLIC_URL}/images/tinywow_IMG-20230123-WA0017_62268469.png`}
              alt="Profile"
              className="circle-img"
            />
          </div>
          <div className="allLogo d-flex justify-content-start">
            <a href="https://www.instagram.com/dhruv__saini_/" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/Instagram-icon-isolated-on-transparent-background-PNG.png`}
                className="logoSize"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC9Kig_7X95luVYcz9izfE2Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/Youtube-icon-symbol-on-transparent-background-PNG.png`}
                className="logoSize"
                alt="YouTube"
              />
            </a>
            <a href="https://github.com/dhruv871saini" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png`}
                className="logoSize"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.facebook.com/dhruv.saini.1293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/computer-icons-facebook-clip-art-facebook-fd1a7f79d70c176d951c3f96deea3433.png`}
                className="logoSize"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-saini-a88482241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/5bbf4bc81d430-d3dba5516582cf35aac1f745da5c5fbd.png`}
                className="logoSize"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div className="col-md-8">
          <div className="d-flex justify-content-end align-items-start">
            <div>
              <button
                className="btn mt-4"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <Menu />
              </button>
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Navigation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <button className="btn1">
                    <i className="bi bi-house-door"></i> Home
                  </button>
                  <button className="btn1">
                    <i className="bi bi-person"></i> About
                  </button>
                  <button className="btn1">
                    <i className="bi bi-file-earmark"></i> Resume
                  </button>
                  <button className="btn1">
                    <i className="bi bi-gear"></i> Education
                  </button>
                  <button className="btn1">
                    <i className="bi bi-folder"></i> Skill
                  </button>
                  <button className="btn1">
                    <i className="bi bi-telephone"></i> Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 fs-3 rows">
            <a
              className="a rounded broranges"
              href={`${process.env.PUBLIC_URL}/images/Dhruv Saini resume full.pdf`}
              download="Dhruv Saini resume full.pdf"
            >
              {" "}
              Resume{" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/computer-icons-arrow-drop-down-list-arrow-down-icon-free-7bb6eae348f2fdc1566a26c976bdf6f9.png`}
                className="images"
                alt="Download Arrow"
              />
            </a>
          </div>
          <div className="padding">
            <div className="text-white fw-bold fs-1">
              <div className="text-white fw-bold fs-1 font-style">
                Hi There!{" "}
                <span className="">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/waving-hand-sign.512x512.png`}
                    className="waveicon"
                    alt="Waving Hand"
                  />
                </span>
                <div className="text-uppercase">
                  I'M <span className="oranges">Dhruv Saini</span>
                </div>
              </div>

              <div className="text-primary fw-bold fs-1 mt-3 font-style">
                <TypingEffect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default Intro;

const Menu = () => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="injected-svg"
        role="img"
        color="#f8f8f8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 8.85C8 5.06685 11.0668 2 14.85 2C18.6332 2 21.7 5.06685 21.7 8.85C21.7 10.3809 21.1978 11.7944 20.3492 12.935L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071C22.3166 17.0976 21.6834 17.0976 21.2929 16.7071L18.935 14.3492C17.7944 15.1978 16.3809 15.7 14.85 15.7C11.0668 15.7 8 12.6332 8 8.85ZM14.85 4C12.1714 4 10 6.17142 10 8.85C10 11.5286 12.1714 13.7 14.85 13.7C17.5286 13.7 19.7 11.5286 19.7 8.85C19.7 6.17142 17.5286 4 14.85 4Z"
          fill="#f8f8f8"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00001 6C1.00001 5.44772 1.44773 5 2.00002 5.00001L6.00002 5.00004C6.5523 5.00004 7.00001 5.44776 7.00001 6.00004C7 6.55233 6.55229 7.00004 6 7.00004L2 7.00001C1.44772 7 1 6.55228 1.00001 6Z"
          fill="#f8f8f8"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00001 12C1.00001 11.4477 1.44772 11 2.00001 11L10 11C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H2.00001C1.44772 13 1.00001 12.5523 1.00001 12Z"
          fill="#f8f8f8"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00001 18C1.00001 17.4477 1.44773 17 2.00002 17L6.00002 17C6.5523 17 7.00001 17.4477 7.00001 18C7 18.5523 6.55229 19 6 19L2 19C1.44772 19 1.00001 18.5523 1.00001 18Z"
          fill="#f8f8f8"
        ></path>
      </svg>
    </>
  );
};
