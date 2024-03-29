import Certificate1 from "../assets/img/Certificate1.png";
import Certificate2 from "../assets/img/Certificate2.png";
import Certificate3 from "../assets/img/Certificate3.png";
import Certificate4 from "../assets/img/Certificate4.png";

import FsLightbox from "fslightbox-react";
import Helmet from "react-helmet";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "./About.css";

export function Experience (props) {
  return (
  <>
  <li className="list-group-item d-flex justify-content-between align-items-start bg-dark">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.title}</div>
      <p className="lh-1">{props.sub}</p>
    </div>
    <span className="badge bg-secondary rounded-pill">
      {props.year}
    </span>
  </li>
  </>
)
}

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <Helmet>
        <title>Micola Arighi - About</title>
      </Helmet>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[Certificate1, Certificate2, Certificate3, Certificate4]}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn mb-2">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
          <div className="row">
            <p className="fs-4">
              A{" "}
              <strong className="rounded px-2 bg-secondary">
                Computer Enthusiast.
              </strong>{" "}
              <br /> <hr />
              Computer have always interested me, because I can't see how it
              works physically and that made me have to figure things out.
            </p>
          </div>
        </div>
          <div className="about-right mt-3 animate__animated animate__fadeIn animate__slower ">
          <div className="row">
            <div className="col-2">
              <h4 className="bg-secondary rounded">01</h4>
            </div>
            <div className="col">
              <h5 className="text-secondary">What's your name?</h5>
              <h3>Micola Arighi Dwitya</h3>
            </div> 
          </div>
          
          <hr />
          <div className="row mt-4">
            <div className="col-2">
              <h4 className="bg-secondary rounded">02</h4>
            </div>
            <div className="col">
              <h5 className="text-secondary">What's your expertise?</h5>
              <h3 className="">I can do all this technology</h3>
            </div>
            <div className="col">
              <div className="row px-5">
                <div className="row my-4 animate__animated animate__flipInX animate_slow">
                  <div className="col">
                    <i className="devicon-html5-plain colored" title="HTML"></i>
                    <i className="devicon-css3-plain colored" title="CSS"></i>
                    <i
                      className="devicon-javascript-plain colored"
                      title="JavaScript"
                    ></i>
                    <i
                      className="devicon-react-original colored"
                      title="React JS"
                    ></i>
                  </div>
                </div>
                <div className="row my-4 animate__animated animate__flipInX animate_slow">
                  <div className="col">
                    <i
                      className="devicon-npm-original-wordmark colored"
                      title="NPM"
                    ></i>
                    <i className="devicon-tailwindcss-plain colored" title="Tailwind"></i>
                    <i
                      className="devicon-github-original colored text-white"
                      title="GitHub"
                    ></i>
                    <i
                      className="devicon-visualstudio-plain colored"
                      title="Visual Studio Code"
                    ></i>
                  </div>
                </div>
                <div className="row my-4 animate__animated animate__flipInX animate_slow">
                  <div className="col">
                    <i
                      className="devicon-svelte-plain colored"
                      title="Svelte"
                    ></i>
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
          <hr />
          <div className="row mt-4">
            <div className="col-2">
              <h4 className="bg-secondary rounded">03</h4>
            </div>
            <div className="col">
              <h5 className="text-secondary">Do you have any certification?</h5>
              <h3 className="">Yes, here you go.</h3>
            </div>
            <div className="certificates-wrapper">
              <div className="row ">
                <div className="col-12 col-lg-6 certificates-ratio mt-4">
                  <img
                    className="shadow img-fluid"
                    loading="lazy"
                    src={Certificate1}
                    alt="Certificate 1"
                    onClick={() => openLightboxOnSlide(1)}
                  />
                </div>
                <div className="col-12 col-lg-6 certificates-ratio gap-image mt-4">
                  <img
                    className="shadow img-fluid"
                    loading="lazy"
                    src={Certificate2}
                    alt="Certificate 2"
                    onClick={() => openLightboxOnSlide(2)}
                  />
                </div>{" "}
              </div>{" "}
              <div className="row">
                <div className="col-12 col-lg-6 certificates-ratio gap-image mt-4">
                  {" "}
                  <img
                    className="shadow img-fluid"
                    loading="lazy"
                    src={Certificate3}
                    alt="Certificate 3"
                    onClick={() => openLightboxOnSlide(3)}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <hr />{" "}
          <div className="row mt-4">
            {" "}
            <div className="col-2">
              {" "}
              <h4 className="bg-secondary rounded">04</h4>
            </div>
            <div className="col">
              <h5 className="text-secondary">How's your journey</h5>
              <h3 className="">
                I started coding since{" "}
                <span className="badge rounded-pill bg-secondary">2018</span>and
                i've been trying lot of things that is related to computer. Such
                as Graphic Design, 3D Modeling, Music Composing, Writing Novel,
                Video Editing, etc. But coding hits different. It's like a love
                at first sight.
              </h3>
            </div>
          </div>
          <hr />
          <div className="row mt-4 mb-5">
            {" "}
            <div className="col-2">
              {" "}
              <h4 className="bg-secondary rounded">05</h4>
            </div>
            <div className="col mb-5">
              <h5 className="text-secondary">What's your experience?</h5>
              <h3 className="mb-3">Here's my experience in Coding Industry.</h3>
              <ol className="list-group ">
                <Experience title={"Hello Koding"} sub={"Founder & CTO of Hello Koding"} year={"2021-2023"} />
                <Experience title={"Ed.Versity"} sub={"Head of I.T Division"} year={"2021-2022"} />
                <Experience title={"Mentoring"} sub={"Webinar Mentoring at Hello Koding and Campus Event"} year={"2020-2022"} />
                <Experience title={"Content Creator"} sub={"Making content about Programming & Technology on YouTube"} year={"2022-Present"} />
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
