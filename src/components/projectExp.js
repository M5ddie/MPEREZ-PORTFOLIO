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
                <h3 className="pb-5">My Project Experience</h3>
                <div className="row pb-5">
                    <div className="col colTxt">
                        <h5>Capstone Project: Bright Minds Digital Marketing with Admin</h5>
                        <h6 className="text-secondary">KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p className="text-secondary">May 2023</p>
                        <ul>
                            <li className="pb-2">
                                ✤ Awarded as the "Best Capstone Project" in our batch.
                            </li>
                            <li className="pb-2">
                                ✤ Led the team in creating this website that is meant to aid in the marketing of goods and customer acquisition for individuals or corporations.
                            </li>
                            <li className="pb-2">
                                ✤ Developed front-end to back-end of client and admin website using ReactJS, Axios, Express and MySQL, and integrated an emailing service for client notification purposes.
                            </li>
                            <li className="pb-2">
                                ✤ Skills used: project management, leadership & team collaboration, problem-solving, web design and development, site mapping, wireframing, mood board creation, entity relationship diagram (ERD)
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <img src={imgcaps} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                        <div className="techUsedDiv">
                            <button className="techUsedBtn">ReactJS</button>
                            <button className="techUsedBtn">Axios</button>
                            <button className="techUsedBtn">Express</button>
                            <button className="techUsedBtn">HTML</button>
                            <button className="techUsedBtn">CSS</button>
                            <button className="techUsedBtn">Bootstrap</button>
                            <button className="techUsedBtn">React-BootStrap</button>
                            <button className="techUsedBtn">JavaScript</button>
                            <button className="techUsedBtn">MySQL</button>
                            <button className="techUsedBtn">EmailJS</button>
                            <button className="techUsedBtn">Address API</button>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col colTxt">
                        <h5>MP2 Project: Bright Minds Digital Marketing</h5>
                        <h6 className="text-secondary">KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p className="text-secondary">May 2023</p>
                        <ul>
                            <li className="pb-2">
                                ✤ Led the team in creating this website that is meant to aid in the marketing of goods and customer acquisition for individuals or corporations.
                            </li>
                            <li className="pb-2">
                                ✤ Developed front-end using HTML, CSS and JavaScript, and integrated an emailing service for client notification purposes.
                            </li>
                            <li className="pb-2">
                                ✤ Skills used: project management, leadership & team collaboration, problem-solving, web design and development, site mapping, wireframing, mood board creation
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <a href="https://m5ddie.github.io/MP2-BrightMinds/">
                            <img src={imgmp2} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                        </a>
                        <div className="techUsedDiv">
                            <button className="techUsedBtn">HTML</button>
                            <button className="techUsedBtn">CSS</button>
                            <button className="techUsedBtn">Bootstrap</button>
                            <button className="techUsedBtn">JavaScript</button>
                            <button className="techUsedBtn">LocalStorage Web API</button>
                            <button className="techUsedBtn">EmailJS</button>
                            <button className="techUsedBtn">Github</button>
                        </div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col colTxt">
                        <h5>MP1 Project: Ahon Katutubo</h5>
                        <h6 className="text-secondary">KODEGO - FULL-STACK WEB DEVELOPMENT BOOTCAMP</h6>
                        <p className="text-secondary">March 2023</p>
                        <ul>
                            <li className="pb-2">
                                ✤ Created this website for outdoor enthusiasts, particularly hikers/mountaineers, who want to have a significant climb, and for others who want to provide assistance in remote communities.
                            </li>
                            <li className="pb-2">
                                ✤ Developed front-end using HTML, CSS and Bootstrap.
                            </li>
                            <li className="pb-2">
                                ✤ Skills used: project management, able to work independently, problem-solving, web design and development, site mapping, wireframing, mood board creation
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <a href="https://m5ddie.github.io/ahon-katutubo/">
                            <img src={imgmp1} alt="Capstone Bright Minds" id="imgCaps" className="siteImg" />
                        </a>
                        <div className="techUsedDiv">
                            <button className="techUsedBtn">HTML</button>
                            <button className="techUsedBtn">CSS</button>
                            <button className="techUsedBtn">Bootstrap</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectExp