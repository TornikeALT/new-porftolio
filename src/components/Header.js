import Navigation from "./Navigation";
import classes from '../styles/header.module.css'


function Header() {
    return (
        <header className={classes.name}>
            <a href="/">
                <h1>TORNIKE</h1>
            </a>
            <Navigation />
        </header>
    );
}

export default Header;