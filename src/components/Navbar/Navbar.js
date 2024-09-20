import React, { useEffect } from 'react';
import './Navbar.css';
import logo_light from '../Assets/logo-blackk.png';
import logo_dark from '../Assets/logo-blackk.png';
import toggle_light from '../Assets/night.png';
import toggle_dark from '../Assets/day.png';

const Navbar = ({ theme, setTheme, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Ensure the menu is closed when the user clicks outside or resizes
  useEffect(() => {
    const handleResizeOrClickOutside = (e) => {
      // Check if the event target is a valid DOM node
      if (e.target instanceof Node) {
        // Close the menu if screen size changes or click happens outside the navbar
        setIsMenuOpen(false);
      }
    };

    // Listen for window resize or clicks outside
    window.addEventListener('resize', handleResizeOrClickOutside);
    document.addEventListener('click', handleResizeOrClickOutside);

    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener('resize', handleResizeOrClickOutside);
      document.removeEventListener('click', handleResizeOrClickOutside);
    };
  }, []);

  const toggleMode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    e.stopPropagation();
    onNavClick(section); // Call the parent function to navigate
    setIsMenuOpen(false); // Close the menu after clicking an item
  };

  return (
    <div className={`navbar ${theme}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
      <div className="navbar-content">
        <ul className={isMenuOpen ? 'show' : ''}>
          <li onClick={(e) => handleNavClick(e, 'home')}>Home</li>
          <li onClick={(e) => handleNavClick(e, 'about')}>About</li>
          <li onClick={(e) => handleNavClick(e, 'services')}>Services</li>
          <li onClick={(e) => handleNavClick(e, 'products')}>Products</li>
          <li onClick={(e) => handleNavClick(e, 'contact')}>Contact</li>
          <li>
            <img
              onClick={toggleMode}
              src={theme === 'light' ? toggle_light : toggle_dark}
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
