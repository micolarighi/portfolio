import { AiFillFileText } from "react-icons/ai";
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
            <Container fluid className="home-wrapper">
                <div className="home-left animate__animated animate__fadeInLeft">
                    <h3>Hola<img width="35" src={Hi} alt="Hi" />, name's</h3>
                    <h2><span className="name-hover">Micola</span><br /><span className="name-hover">Arighi</span><br /><span className="name-hover">Dwitya</span></h2>
                    <h5 className="mb-5 fw-light">A Computer Enthusiast</h5>
                    <Link className="btn-download text-center" to={CVDoc} target="_blank" rel="noreferrer" download><AiFillFileText />&nbsp;&nbsp;Download CV</Link>
                </div>
                <div className="home-right animate__animated animate__fadeIn animate__slower">
                    <img className="home-image rounded-3 shadow" src={image} onMouseEnter={setAvatarReal} onMouseLeave={setAvatarAnimation} alt="Avatar" />
                </div>
            </Container>
        </>
    )
}

export default Home;