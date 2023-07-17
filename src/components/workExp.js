// styling
import "../assets/css/workExp.css";


const WorkExp = () => {
    return (
        <div id="workExp" className="workDiv">
            <h3 className="pb-5">My Work Experience</h3>
            <div className="workContent">
                <h5>Analyst Programmer</h5>
                <h6>AIG Shared Services, Taguig City, Philippines</h6>
                <p>2013 - 2021</p>
                <ul>
                    <li className="pb-2">
                        ✤ Java programmer - performed troubleshooting, enhancements, version management, deployment ( DEV to PROD) on various applications (DevOps model using Github and Jenkins) and stored procedures (Sybase Database).
                    </li>
                    <li className="pb-2">
                        ✤ Worked with 2 teams and 8 projects (policy booking and claim services) catering APAC, NAM, EU countries.
                    </li>
                    <li className="pb-2">
                        ✤ Managed an application from development up until go-live.
                    </li>
                    <li className="pb-2">
                        ✤ Provided real-time assistance during production deployments, technical and business checkouts.
                    </li>
                    <li className="pb-2">
                        ✤ Involved in development and production support using agile methodology.
                    </li>
                    <li className="pb-2">
                        ✤ Application service management and monitoring using IBM WebSphere Application Server.
                    </li>
                    <li className="pb-2">
                        ✤ Conducted system performance tests and supported user acceptance testings.
                    </li>
                    <li className="pb-2">
                        ✤ Managed requests and incident tickets using ServiceNow.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExp