// styling
import "../assets/css/hero.css";

// file
import cvfile from "../assets/pdf/CV_PerezMadelyn.pdf";

import Button from 'react-bootstrap/Button';

const HeroMP = () => {

    return (
        <div className="heroDiv">
            <div className="coverLay"></div>
            <div className="heroContent text-light">
                <h1>Hi there! I'm Maddie and I'm a Web Developer.</h1>
                <a href={cvfile} download="CV_PerezMadelyn" target="_blank" rel="noopener noreferrer">
                    <Button type="button" className="btnDownloadCV">Download CV</Button>
                </a>
            </div>

        </div>
    )
}

export default HeroMP