import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoDash } from "react-icons/go";

import Navigation from "./Navigation";
import ModalNavigation from "./ModalNavigation";
import classes from '../styles/header.module.css'

function Header() {
    const [showNavigation, setShowNavigation] = useState(false);

    const handleNavigationShow = () => {
        setShowNavigation(true);
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
            {!showNavigation ?
                <div className={classes.hamburger_bg} onClick={handleNavigationShow} >
                    <RxHamburgerMenu className={classes.hamburger} size={30} color="#828aa0" />
                </div>
                :
                <div className={classes.dash} onClick={handleNavigationClose} >
                    <GoDash size={30} color="#828aa0" className={classes.dash_animate} />
                </div>
            }
            <ModalNavigation isNavigationOpen={showNavigation} closeNavigation={handleNavigationClose} />
        </header>
    );
}

export default Header;

