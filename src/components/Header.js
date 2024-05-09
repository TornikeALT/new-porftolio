import Navigation from "./Navigation";
import classes from '../styles/header.module.css'


function Header() {
    return (
        <header className={classes.name}>
            <a href="/">
                <h2 className={classes.main_logo}>TORNIKE</h2>
            </a>
            <Navigation />
        </header>
    );
}

export default Header;