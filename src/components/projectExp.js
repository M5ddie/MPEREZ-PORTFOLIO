// styling
import "../assets/css/projectExp.css";

// images
import imgcaps from '../assets/images/imgcaps.png';
import imgmp2 from '../assets/images/imgmp2.png';
import imgmp1 from '../assets/images/imgmp1.png';

const ProjectExp = () => {
    return (
        <div id="projects" className="projectsDiv">
            <div className="projectsContent">
                <h3>My Project Experience</h3>
                <div className="row">
                    <div className="col colTxt">
                        <h5>Capstone Project: Bright Minds Digital Marketing (ReactJS)</h5>
                        <h6>KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p>May 2023</p>
                        <ul>
                            <li>
                                Awarded as the "best in Capstone Project" in our batch.
                            </li>
                            <li>
                                Led the team in creating this website that is meant to aid in the marketing of goods and customer acquisition for individuals or corporations.
                            </li>
                            <li>
                                Developed front-end to back-end of client and admin website, and integrated an emailing service for client notification purposes.
                            </li>
                            <li>
                                Tools used: ReactJS, HTML, CSS, React-Bootstrap, JavaScript, MySQL, EmailJS
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <img src={imgcaps} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col colTxt">
                        <h5>MP2 Project: Bright Minds Digital Marketing (JavaScript)</h5>
                        <h6>KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p>May 2023</p>
                        <ul>
                            <li>
                                Led the team in creating this website that is meant to aid in the marketing of goods and customer acquisition for individuals or corporations.
                            </li>
                            <li>
                                Developed front-end to back-end of client website, and integrated an emailing service for client notification purposes.
                            </li>
                            <li>
                                Tools used: HTML, CSS, Bootstrap, JavaScript, LocalStorage, EmailJS, Github
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <img src={imgmp2} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col colTxt">
                        <h5>MP1 Project: Ahon Katutubo</h5>
                        <h6>KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p>March 2023</p>
                        <ul>
                            <li>
                                Solo 
                            </li>
                            <li>
                                Developed front-end to back-end of client website, and integrated an emailing service for client notification purposes.
                            </li>
                            <li>
                                Tools used: HTML, CSS, Bootstrap, Github
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <img src={imgmp1} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectExp