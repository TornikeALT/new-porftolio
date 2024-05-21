import fakestore from '../images/fakestore.png';
import carRent from '../images/carrent.png';
import pirus from '../images/pirus.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import classes from '../styles/projects.module.css';

function Projects() {
    return (
        <div className={classes.projects_container}>
            <h2>My Projects</h2>
            <div className={classes.projects}>
                <div className={classes.project}>
                    <a href="https://imafake-store.netlify.app" target='/blank'>
                        <div className={classes.image_container}>
                            <img src={fakestore} alt="fake store" />
                        </div>
                        <div className={classes.description}>
                            <span>Fake Store</span>
                            <div className={classes.arrow_bg_circle}>
                                <ArrowForwardIcon className={classes.arrow_icon} />
                            </div>
                        </div>
                    </a>
                </div>
                <div className={classes.project}>
                    <a href='https://tbilisi-rent.netlify.app' target='/blank'>
                        <div className={classes.image_container}>
                            <img src={carRent} alt="car rent" />
                        </div>
                        <div className={classes.description}>
                            <span>Car Rent</span>
                            <div className={classes.arrow_bg_circle}>
                                <ArrowForwardIcon className={classes.arrow_icon} />
                            </div>
                        </div>
                    </a>
                </div>
                <div className={classes.project}>
                    <a href="https://pirus.netlify.app" target='/blank'>
                        <div className={classes.image_container}>
                            <img src={pirus} alt="Pirus" />
                        </div>
                        <div className={classes.description}>
                            <span>Pirus</span>
                            <div className={classes.arrow_bg_circle}>
                                <ArrowForwardIcon className={classes.arrow_icon} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
