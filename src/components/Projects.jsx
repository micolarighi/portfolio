import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Project1 from "../assets/img/Project1.png";
import Project2 from "../assets/img/Project2.png";
import Project3 from "../assets/img/Project3.png";
import Project4 from "../assets/img/Project4.png";
import Project5 from "../assets/img/Project5.png";

import Helmet from "react-helmet";
import "./Projects.css";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Micola Arighi - Skills</title>
      </Helmet>
      <Container fluid className="project-wrapper mb-5 pb-5">
        <div className="project-left animate__animated animate__zoomIn mb-5 pb-5">
          <h3>Project</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
          <div className="row">
            <p className="fs-4">
              A{" "}
              <strong className="rounded px-2 bg-secondary">
                Computer Enthusiast.
              </strong>{" "}
              <br /> <hr />
              Take a quick look at things i've made so far. All the project listed here, is a project that i publish publicly.
            </p>
          </div>
        </div>
        <div className="project-right">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 project-col">
              <div className="project-card px-2 py-4 row">
                <div className="col-12 col-lg-5 px-2">
                  <img
                    className="img-fluid"
                    src={Project1}
                    alt="Project 1"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <div className="project-content">
                    <h3>React App - MiDo List</h3>
                    <p>
                      A Simple ToDo List App to list what you need to do.
                      Created using one of the most popular Javascript
                      framework, React JS. It also uses Redux for state
                      management and Framer Motion for animations. All the list
                      will be stored to the local storage, so you can access
                      them anytime.
                    </p>
                    <a
                      className="btn-website"
                      href="https://midolist.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink className="project-icon" />
                      &nbsp;&nbsp;Website
                    </a>
                    <a
                      className="btn-github"
                      href="https://github.com/micolarighi/mido-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub className="project-icon" />
                      &nbsp;&nbsp;GitHub
                    </a>
                    <div className=" mt-2">
                      <span id="tech-stack">React</span>
                      <span id="tech-stack">Framer Motion</span>
                      <span id="tech-stack">Redux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
              <div className="project-card px-2 py-4 row">
                <div className="col-12 col-lg-5">
                  <img
                    className="img-fluid"
                    src={Project3}
                    alt="Project 1"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <div className="project-content">
                    <h3>Linkhub - Micola Arighi</h3>
                    <p>
                      A Custom Linktree Website made with modern user interface and animation.
                    </p>
                    <a
                      className="btn-website"
                      href="https://linkhub-micolarighi.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink className="project-icon" />
                      &nbsp;&nbsp;Website
                    </a>
                    <a
                      className="btn-github"
                      href="https://github.com/micolarighi/linkhub-micolarighi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub className="project-icon" />
                      &nbsp;&nbsp;GitHub
                    </a>
                    <div className=" mt-3">
                      <span id="tech-stack">React</span>
                      <span id="tech-stack">Open API</span>
                      <span id="tech-stack">Back-end</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
              <div className="project-card px-2 py-4 row">
                <div className="col-12 col-lg-5">
                  <img
                    className="img-fluid"
                    src={Project4}
                    alt="Project 1"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <div className="project-content">
                    <h3>Agency Profile With CMS</h3>
                    <p>
                      Trusted to make An Agency Profile that have Content Management System in My College.
                    </p>
                    <a
                      className="btn-website"
                      href="https://himatekkom-ug.site/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink className="project-icon" />
                      &nbsp;&nbsp;Website
                    </a>
                    <div className=" mt-3">
                      <span id="tech-stack">PHP</span>
                      <span id="tech-stack">CMS</span>
                      <span id="tech-stack">Back-end</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
              <div className="project-card px-2 py-4 row">
                <div className="col-12 col-lg-5">
                  <img
                    className="img-fluid"
                    src={Project2}
                    alt="Project 1"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <div className="project-content">
                    <h3>My Company Profile</h3>
                    <p>
                      A Company Profile of my own company as a CTO.
                    </p>
                    <a
                      className="btn-website"
                      href="https://hello-koding.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineLink className="project-icon" />
                      &nbsp;&nbsp;Website
                    </a>

                    <div className=" mt-3">
                      <span id="tech-stack">Company Profile</span>
                      <span id="tech-stack">Front-end</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
              <div className="project-card px-2 py-4 row">
                <div className="col-12 col-lg-5">
                  <img
                    className="img-fluid"
                    src={Project5}
                    alt="Project 1"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <div className="project-content">
                    <h3>Online Course Platform</h3>
                    <p>
                      As The front-end of an online course platform - ed.versity.
                    </p>
                    <a
                      className="btn-secondary btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      &nbsp;&nbsp;Website Closed
                    </a>

                    <div className=" mt-3">
                      <span id="tech-stack">Online Course</span>
                      <span id="tech-stack">Front-end</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
