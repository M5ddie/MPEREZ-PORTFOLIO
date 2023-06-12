// styling
import "../assets/css/hero.css";

import Button from 'react-bootstrap/Button';

const HeroMP = () => {
    
    return (
        <div className="heroDiv">
            <div className="heroContent">
                <h1>Hi there! I'm Maddie and I'm a Web Developer.</h1>
                <Button type="submit">Download CV</Button>
            </div>
        </div>
    )
}

export default HeroMP