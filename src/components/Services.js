import { FaReact } from "react-icons/fa";
import { PiDesktopTowerLight } from "react-icons/pi";
import { GrDocumentPerformance } from "react-icons/gr";

import classes from '../styles/services.module.css'

function Services() {
    return (
        <div className={classes.service_container}>
            <h2>What I Offer</h2>
            <div className={classes.service_wrapper}>
                <div className={classes.service}>
                    <FaReact size={75} color="#789af7" />
                    <h3>React Mastery</h3>
                    <p> I excel in developing interactive, component-based web applications using React.</p>
                </div>
                <div className={classes.service}>
                    <PiDesktopTowerLight size={75} color="#789af7" />
                    <h3>Responsive Design</h3>
                    <p>Your web app will look and perform flawlessly across all devices.</p>
                </div>
                <div className={classes.service}>
                    <GrDocumentPerformance size={75} color="#789af7" />
                    <h3>Performance Optimization</h3>
                    <p>I prioritize fast loading times and cross-browser compatibility.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;