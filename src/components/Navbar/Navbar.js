import React from 'react';
import './Navbar.css';
import logo_light from '../Assets/logo-blackk.png';
import logo_dark from '../Assets/logo-blackk.png';
import toogle_light from '../Assets/night.png';
import toogle_dark from '../Assets/day.png';

const Navbar = ({ theme, setTheme, onNavClick }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
            <div className="navbar-content">
                <ul className={isMenuOpen ? 'show' : ''}>
                    <li onClick={(e) => { e.stopPropagation(); onNavClick('home'); }}>Home</li>
                    <li onClick={(e) => { e.stopPropagation(); onNavClick('about'); }}>About</li>
                    <li onClick={(e) => { e.stopPropagation(); onNavClick('services'); }}>Services</li>
                    <li onClick={(e) => { e.stopPropagation(); onNavClick('products'); }}>Products</li>
                    <li onClick={(e) => { e.stopPropagation(); onNavClick('contact'); }}>Contact</li>
                    <li>
                        <img
                            onClick={toggleMode}
                            src={theme === 'light' ? toogle_light : toogle_dark}
                            alt="Toggle Theme"
                            className="toggle-icon"
                        />
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
