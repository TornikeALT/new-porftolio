import { Link } from 'react-router-dom';
import classes from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.created_by}>
                <h4>Created By
                    <span>Tornike</span>
                </h4>
            </div>
            <div className={classes.footer_nav}>
                <nav>
                    <ul>
                        <li>
                            <Link>• Home</Link>
                        </li>
                        <li>
                            <Link>• Work</Link>
                        </li>
                        <li>
                            <Link>• About</Link>
                        </li>
                        <li>
                            <Link>• Contact</Link>
                        </li>
                        <li>
                            <Link>• Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.powered_by}>
                <h4>Powered By
                    <span>Marvel</span>
                </h4>
            </div>
        </footer>
    );
}

export default Footer
