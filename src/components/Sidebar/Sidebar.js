import "./Sidebar.scss";
import MLogo from "../../assets/images/m-logo.png";
import SubtitleLogo from "../../assets/images/subtitle-logo.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser, faHome, faEnvelope, faSuitcase } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={MLogo} alt="logo"/>
                <img className="subtitle-logo" src={SubtitleLogo} alt="subtitle-logo" />
            </Link>
            <nav>
                <NavLink activeclassname="active" exact="true" to="/" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink activeclassname="active" className="about-link" exact="true" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink activeclassname="active" className="portfolio-link" exact="true" to="/portfolio" >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                </NavLink>
                <NavLink activeclassname="active" className="contact-link" exact="true" to="/link" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://linkedin.com/in/mohamed-ayman-4459011b9" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/lonewolf-03" target="_blank">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;