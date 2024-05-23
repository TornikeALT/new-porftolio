import { Link } from "react-router-dom";


import classes from '../styles/modalNavigation.module.css'

function ModalNavigation({ isNavigationOpen, closeNavigation }) {

    return (
        <>
            {isNavigationOpen &&
                <nav className={classes.overlay}>
                    <ul className={classes.content}>
                        <li>
                            <Link to={'/'} onClick={closeNavigation}>• Home</Link>
                        </li>
                        <li>
                            <Link to={'/work'} onClick={closeNavigation}>• Work</Link>
                        </li>
                        <li>
                            <Link to={'/about'} onClick={closeNavigation}>• About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} onClick={closeNavigation}>• Contact</Link>
                        </li>
                    </ul>
                </nav>}

        </>
    );
}

export default ModalNavigation;