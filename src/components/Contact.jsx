import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiFillYoutube,
} from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Container } from "react-bootstrap";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import Helmet from "react-helmet";
import "./Contact.css";

export function Socials (props) {
  return (
    <>
    <div className="col contact-col animate__animated animate__slideInLeft">
      <div className="github-wrapper text-center">
        <h3>
          {props.icon}  
          &nbsp;&nbsp;{props.title}
        </h3>
        <a
          href={props.href}
          target="_blank"
          rel="noreferrer"
          className="btn-direct w-100"
        >
          Visit&nbsp;&nbsp;
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
    </>
  )
}

function Contact() {
  const [alreadyCopy, setAlreadyCopy] = useState("Copy");

  function actionCopy() {
    setAlreadyCopy("Copied");

    setTimeout(function () {
      setAlreadyCopy("Copy");
    }, 1000);
  }

  return (
    <>
      <Helmet>
        <title>Micola Arighi - Contact</title>
      </Helmet>
      <Container fluid className="contact-wrapper">
          <div className="contact-container">
            <div className="text-center animate__animated animate__zoomIn">
              <div className="row">
                <p className="fs-4">
                  Interested working with me? <br /> <span className="fw-bold">Check my socials here.</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col contact-col animate__animated animate__slideInLeft">
                <div className="email-wrapper text-center">
                  <h3>
                    <AiOutlineMail />
                    &nbsp;&nbsp;Email
                  </h3>
                  <CopyToClipboard text="micola.arighi.dwitya@gmail.com">
                    <button className="btn-copy text-white w-100" onClick={actionCopy}>
                      {alreadyCopy}&nbsp;&nbsp;
                      <FiCopy />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              
              <Socials icon={<AiFillGithub/>} title={"GitHub"} href={"https://github.com/micolarighi"}/>
              <Socials icon={<AiFillYoutube/>} title={"YouTube"}  href={"https://www.youtube.com/channel/UCV4p9jOV1IzGim2GbexAFSQ"}/>
              
            </div>
          </div>
      </Container>
    </>
  );
}

export default Contact;
