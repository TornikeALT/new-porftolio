import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import classes from '../styles/contact.module.css'

function Contact() {
    return (
        <div className={classes.container}>
            <div className={classes.get_in_touch}>
                <h1>Get in Touch</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
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
            <form className={classes.form}>
                <div className={classes.input}>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label htmlFor="">Email Adress</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                </div>
                <div className={classes.input}>
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" maxLength={256}></textarea>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
