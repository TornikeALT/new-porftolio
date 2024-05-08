import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import tokaImg from '../images/toka.jpg'

import classes from '../styles/about.module.css'

function About() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.about}>
                <div className={classes.location}>
                    <LocationOnIcon style={{ color: '#828aa0' }} />
                    <p> Tbilisi</p>
                </div>
                <h1>
                    Hello, I'm Tornike Altunashvili
                </h1>
                <p>
                    A digital designer with over 10 years' experience in the creative industry. From a young age, I was captivated by the intersection of technology and art, and that passion has been the driving force behind my career.
                </p>
                <div className={classes.icons}>
                    <div className={classes.arrow}>
                        <span>Get in touch</span>
                        <ArrowForwardIcon className={classes.arrow_icon} />
                    </div>
                    <div className={classes.social_links}>
                        <a href="https://github.com/TornikeALT?tab=repositories">
                            <GitHubIcon style={{ color: '#828aa0' }} />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <LinkedInIcon style={{ color: '#828aa0' }} />
                        </a>
                        <a href="https://twitter.com/">
                            <XIcon style={{ color: '#828aa0' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.main_image}>
                <img src={tokaImg} alt="tornike altunashvili " loading='lazy' />
            </div>
        </div>
    );
}

export default About;