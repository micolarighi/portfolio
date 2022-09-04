import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import Project1 from '../assets/img/Project1.png';
import Project2 from '../assets/img/Project2.png';
import Project3 from '../assets/img/Project3.png';

import Helmet from 'react-helmet';
import './Projects.css';

function Projects() {
    return (
        <>
            <Helmet>
                <title>Micola Arighi - Projects</title>
            </Helmet>
            <Container fluid className="projects-container">
                <div className="projects-title animate__animated animate__zoomIn">
                    <h3>Projects</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>04</strong></h4>
                </div>
                <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 project-col">
                            <div className="project-card px-5 py-5 row">
                                <div className="col-4">
                                    <img src={Project1} alt="Project 1" loading="lazy" />
                                </div>
                                <div className="col">

                                    <div className="project-content">
                                        <h3>React ToDo List - MiDo List</h3>
                                        <p>A Simple ToDo List App to list what you need to do. Created using one of the most popular Javascript framework, React JS. It also uses Redux for state management and Framer Motion for animations. All the list will be stored to the local storage, so you can access them anytime.</p>
                                        <a className="btn-website" href="https://midolist.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                        <a className="btn-github" href="https://github.com/micolarighi/mido-app" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                        <div className="d-block tech-stack-wrapper">
                                            <span id="tech-stack">React</span>
                                            <span id="tech-stack">Framer Motion</span>
                                            <span id="tech-stack">Redux</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
                            <div className="project-card px-5 py-5 row">
                                <div className="col-4">
                                    <img src={Project2} alt="Project 1" loading="lazy" />
                                </div>
                                <div className="col">

                                    <div className="project-content">
                                        <h3>Covid-19 Tracker - MiCovid-19</h3>
                                        <p>A Web App that shows the latest updates on the COVID-19 pandemic. It uses the latest data from the open API.</p>
                                        <a className="btn-website" href="https://midolist.netlify.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                        <a className="btn-github" href="https://github.com/micolarighi/mido-app" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                        <div className="d-block tech-stack-wrapper">
                                            <span id="tech-stack">React</span>
                                            <span id="tech-stack">Open API</span>
                                            <span id="tech-stack">Back-end</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 project-col mt-3 ">
                            <div className="project-card px-5 py-5 row">
                                <div className="col-4">
                                    <img src={Project3} alt="Project 1" loading="lazy" />
                                </div>
                                <div className="col">

                                    <div className="project-content">
                                        <h3>Matrix Calculator</h3>
                                        <p>A Simple Matrix Calculator created using React JS.</p>
                                        <a className="btn-website" href="https://micolarighi-matrixcalcalculator.vercel.app/" target="_blank" rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                        <a className="btn-github" href="https://github.com/micolarighi/micovid-19" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                        <div className="d-block tech-stack-wrapper">
                                            <span id="tech-stack">React</span>
                                            <span id="tech-stack">Open API</span>
                                            <span id="tech-stack">Back-end</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </Container>
        </>
    )
}

export default Projects;