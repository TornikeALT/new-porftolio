import { Link } from "react-router-dom";
import classes from '../styles/navigation.module.css'

function Navigation() {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link to={'/'} className={classes.nav_link}>• Home</Link>
                </li>
                <li>
                    <Link to={'/work'} className={classes.nav_link}>• Work</Link>
                </li>
                <li>
                    <Link to={'/about'} className={classes.nav_link}>• About</Link>
                </li>
                <li>
                    <Link to={'/contact'} className={classes.nav_link}>• Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;