import { Container } from "react-bootstrap";
import Helmet from "react-helmet";
import "./Skills.css";

function Skills() {
    return (
        <>
            <Helmet>
                <title>Micola Arighi - Skills</title>
            </Helmet>
            <Container fluid className="skills-wrapper ">
                <div className="skills-left animate__animated animate__zoomIn">
                    <h3>Skills</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>03</strong></h4>
                </div>
                <div className="skills-right">
                    <div className="row my-4 animate__animated animate__flipInX animate_slow">
                        <div className="col">
                            <i class="devicon-html5-plain colored" title="HTML"></i>
                            <i class="devicon-css3-plain colored" title="CSS"></i>
                            <i class="devicon-javascript-plain colored" title="JavaScript"></i>
                            <i class="devicon-php-plain colored" title="PHP"></i>
                        </div>
                    </div>
                    <div className="row my-4 animate__animated animate__flipInX animate_slow">
                        <div className="col">
                            <i class="devicon-npm-original-wordmark colored" title="NPM"></i>
                            <i class="devicon-git-plain colored" title="Git"></i>
                            <i class="devicon-github-original colored text-white" title="GitHub"></i>
                            <i class="devicon-visualstudio-plain colored" title="Visual Studio Code"></i>
                        </div>
                    </div>
                    <div className="row my-4 animate__animated animate__flipInX animate_slow">
                        <div className="col">
                            <i class="devicon-bootstrap-plain colored" title="Bootstrap"></i>
                            <i class="devicon-react-original colored" title="React JS"></i>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Skills;