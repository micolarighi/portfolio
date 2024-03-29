import {
  AiFillFileText,
  AiFillMessage,
  AiFillYoutube,
  AiFillProject,
  AiFillRightSquare,
  AiFillProfile,
} from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import avatarAnimation from "../assets/img/Avatar.png";
import avatarReal from "../assets/img/Avatar2.png";
import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import Helmet from "react-helmet";
import "./Home.css";

function Home() {
  const [image, setImage] = useState(avatarAnimation);

  function setAvatarReal() {
    setImage(avatarReal);
  }

  function setAvatarAnimation() {
    setImage(avatarAnimation);
  }

  return (
    <>
      <Helmet>
        <title>Micola Arighi Dwitya</title>
      </Helmet>
      <div className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft mb-5 mt-3">
          <h3>
            Hola
            <img width="35" src={Hi} alt="Hi" />, name's
          </h3>
          <h2>
            <span className="name-hover">Micola</span>
            <br />
            <span className="name-hover">Arighi</span>
            <br />
            <span className="name-hover">Dwitya</span>
          </h2>

          <div className="row">
            {/* <div className="col">
              <Link
                className="btn-download text-center rounded-3"
                to={CVDoc}
                target="_blank"
                rel="noreferrer"
                download
              >
                <AiFillFileText className="mt-1" />
                &nbsp;&nbsp;Download CV
              </Link>
            </div> */}
            <div className="col mx-5">
              <a href="contact" className="btn-download text-center rounded-3">
                <AiFillMessage className="mt-1 text-center" /> &nbsp; &nbsp;
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="home-right mt-3 animate__animated animate__fadeIn animate__slower">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 me-4">
              <img
                className="home-image rounded-3 shadow img-fluid mt-3"
                src={image}
                alt="Avatar"
              />
            </div>

            <div className="col-12 col-md-6 mt-3">
              <div className="row">
                <h5 className="card-title">Other Pages</h5>
                <p className="card-text text-secondary">
                  Open the other pages of this portfolio.
                </p>
              </div>
              <div className="row mt-3">
                <a
                  href="about"
                  className="btn btn-outline-light w-100 mt-1 fs-4"
                >
                  About
                </a>
              </div>
              <div className="row mt-2">
                <a
                  href="projects"
                  className="btn btn-outline-light w-100 mt-1 fs-4"
                >
                  Project
                </a>
              </div>
              <div className="row mt-2">
                <a
                  href="contact"
                  className="btn btn-outline-light w-100 mt-1 fs-4"
                >
                  Contact
                </a>
              </div>
            </div>

            <hr className="mt-4" />

            <div className="row mt-3">
              <div className="row">
                <h5 className="card-title">Explore</h5>
                <p className="card-text text-secondary">
                  Explore more about me through this.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="card-wrapper border rounded px-4 py-3">
              <h1>
                <AiFillYoutube />
              </h1>
              <div className="ms-5 mt-2">
                <h5>My Youtube Channel</h5>
                <a
                  target={"_black"}
                  href="https://www.youtube.com/channel/UCV4p9jOV1IzGim2GbexAFSQ"
                  className="btn btn-dark w-100"
                >
                  <AiFillRightSquare />
                  &nbsp;Visit &nbsp;
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-3">
            <div className="row">
              <h5 className="card-title">Skills</h5>
              <p className="card-text text-secondary">What can i do.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="card-wrapper border rounded px-4 py-3">
              <div className="row">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <h6>Front-End Web Developer</h6>
                  <i className="devicon-html5-plain colored" title="HTML"></i>
                  <i className="devicon-svelte-plain colored" title="SVELTE"></i>
                  <i
                    className="devicon-react-original colored"
                    title="React JS"
                  ></i>
                </div>
              </div>
            </div>
            <div
              className="card-wrapper mt-4 border rounded px-4 py-3 "
              style={{ marginBottom: "100px" }}
            >
              <div className="row">
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <h6>Back-End Web Developer</h6>
                  <i
                    className="devicon-nodejs-plain colored"
                    title="Node JS"
                  ></i>
                  <i
                    className="devicon-express-original colored text-light"
                    title="Express JS"
                  ></i>

                  <i
                    className="devicon-mongodb-plain colored"
                    title="Mongo DB"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="skills" className="btn btn-outline-light w-100 mt-2">Skills</a>
      <a href="portfolio" className="btn btn-outline-light w-100 mt-2">Portfolio</a>
      <a href="contact" className="btn btn-outline-light w-100 mt-2">Contact</a> */}
    </>
  );
}

export default Home;
