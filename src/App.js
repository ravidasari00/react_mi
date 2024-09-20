import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  const handleScrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      products: productsRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router >
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} onNavClick={handleScrollToSection} />
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={productsRef}>
          <Products />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
