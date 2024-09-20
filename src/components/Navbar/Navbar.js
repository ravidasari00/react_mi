import React from 'react';
import './Navbar.css';
import logo_light from '../Assets/logo-blackk.png';
import logo_dark from '../Assets/logo-blackk.png';
import toggle_light from '../Assets/night.png';
import toggle_dark from '../Assets/day.png';

const Navbar = ({ theme, setTheme, onNavClick }) => {
    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <div className="navbar-content">
                <ul>
                    <li onClick={() => onNavClick('home')}>Home</li>
                    <li onClick={() => onNavClick('about')}>About</li>
                    <li onClick={() => onNavClick('services')}>Services</li>
                    <li onClick={() => onNavClick('products')}>Products</li>
                    <li onClick={() => onNavClick('contact')}>Contact</li>
                    <li>
                        <img
                            onClick={toggleMode}
                            src={theme === 'light' ? toggle_light : toggle_dark}
                            alt="Toggle Theme"
                            className="toggle-icon"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
