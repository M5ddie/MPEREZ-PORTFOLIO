// styling
import "../assets/css/profile.css";

// image
import imgAbout from "../assets/images/imgAbout2.png";

const ProfileMP = () => {
    return (
        <div id="profile" className="aboutDiv">
            <div className="aboutContent pe-5">
                <article>
                    <h2>Madelyn Perez</h2>
                    <h6>Full-Stack Web Developer</h6>
                    <p className="pt-3">
                        I'm a determined Junior Web Developer, equipped with knowledge in front-end and backend development using HTML, CSS, JavaScript, and MySQL, and with eight years of experience in working with multiple web services and databases as an analyst programmer using Java. I am a quick learner and able to adapt to different business processes.
                    </p>
                </article>
            </div>
            <div>
                <img className="imgAbout shadow-lg" src={imgAbout} alt="" />
            </div>
        </div>
    )
}

export default ProfileMP