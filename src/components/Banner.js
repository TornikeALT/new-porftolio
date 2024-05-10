import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FaAsterisk } from "react-icons/fa";

import classes from '../styles/banner.module.css'

function Banner() {
    return (
        <div>
            <h2 className={classes.moving_title}>
                <span >* Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch </span>
                <span >* Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch * Get in Touch </span>
            </h2>
            <div className={classes.banner}>
                <FaAsterisk style={{ color: '#789af7' }} size={75} className={classes.rotate} />
                <h3>
                    Let`s create something
                    <br />
                    amazing together
                </h3>
                <div className={classes.arrow}>
                    <span>tornikealtunashvili@yahoo.com</span>
                    <div className={classes.arrow_bg_circle}>
                        <ArrowForwardIcon className={classes.arrow_icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;