import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";

import classes from '../styles/modalNavigation.module.css'

function ModalNavigation({ isNavigationOpen, closeNavigation }) {

    return (
        <>
            {isNavigationOpen &&
                <nav className={classes.overlay}>
                    <VscChromeClose onClick={closeNavigation} />
                    <ul className={classes.content}>
                        <li>
                            <Link to={'/'} >• Home</Link>
                        </li>
                        <li>
                            <Link to={'/work'} >• Work</Link>
                        </li>
                        <li>
                            <Link to={'/about'} >• About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} >• Contact</Link>
                        </li>
                    </ul>
                </nav>}

        </>
    );
}

export default ModalNavigation;