import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import classes from '../styles/contact.module.css'


function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false)
    }

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
            {!isSubmitted &&
                <form className={classes.form} onSubmit={handleFormSubmit}>
                    <div className={classes.input}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' required />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="email">Email Adress</label>
                        <input type='email' id='email' required />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id='subject' required />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" maxLength={256} required></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            }
            {isLoading &&
                <div className={classes.loader_container}>
                    <span className={classes.loader}></span>
                </div>
            }
            {!isLoading && isSubmitted &&
                <div className={classes.msg}>
                    <p> Thank you! Your submission has been received!</p>
                </div>
            }
        </div>
    );
}

export default Contact;
