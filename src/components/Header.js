import { RxHamburgerMenu } from "react-icons/rx";
import Navigation from "./Navigation";

import classes from '../styles/header.module.css'
import { useState } from "react";
import ModalNavigation from "./ModalNavigation";


function Header() {
    const [showNavigation, setShowNavigation] = useState(false)

    const handleNavigationShow = () => {
        setShowNavigation(true)
    }

    const handleNavigationClose = () => {
        setShowNavigation(false)
    }

    return (
        <header className={classes.name}>
            <a href="/">
                <h2 className={classes.main_logo}>TORNIKE</h2>
            </a>
            <Navigation />
            <RxHamburgerMenu className={classes.hamburger} size={50} color="#828aa0" onClick={handleNavigationShow} />
            <ModalNavigation isNavigationOpen={showNavigation} closeNavigation={handleNavigationClose} />
        </header>
    );
}

export default Header;