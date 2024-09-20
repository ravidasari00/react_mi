import React, { useState, useEffect } from 'react';
import './Home.css'; // CSS file for styling
import technologyImage from './Assets/technology.png'; // Replace with your background image path
import innovationIcon from './Assets/innovation-icon.png'; // Replace with your icon paths
import scalabilityIcon from './Assets/scalability-icon.png';
import userExperienceIcon from './Assets/user-experience-icon.png';
import customerSupportIcon from './Assets/customer-support-icon.png';
import dataSecurityIcon from './Assets/data-security-icon.png';
import globalReachIcon from './Assets/global-reach-icon.png';
import chordIcon1 from './Assets/chord-icon1.png'; // Add path to your chord icons
import chordIcon2 from './Assets/chord-icon2.png';
import chordIcon3 from './Assets/chord-icon3.png';

const Home = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 6000); // Change dot every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="h-content">
          <h1>Empowering Businesses with Technology</h1>
          <p>
            We provide innovative solutions that help businesses thrive in the digital age. Our platform is designed to be scalable, secure, and user-friendly, ensuring a seamless experience for our customers.
          </p>
          <div className="animated-text-wrapper">
            <div className="animated-text">
              <div className="chord">
                <img src={chordIcon1} alt="Chord 1" className="chord-icon" />
                <span>Fast and Flexible Solutions</span>
              </div>
              <div className="chord">
                <img src={chordIcon2} alt="Chord 2" className="chord-icon" />
                <span>Customized Services</span>
              </div>
              <div className="chord">
                <img src={chordIcon3} alt="Chord 3" className="chord-icon" />
                <span>Smart Insights for Better Decisions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-container">
          <div className="scrolling-features">
            <div className="feature">
              <img src={innovationIcon} alt="Innovative Solutions" />
              <p>Innovative Solutions</p>
            </div>
            <div className="feature">
              <img src={scalabilityIcon} alt="Scalable Architecture" />
              <p>Scalable Architecture</p>
            </div>
            <div className="feature">
              <img src={userExperienceIcon} alt="User Experience" />
              <p>User Experience</p>
            </div>
            <div className="feature">
              <img src={customerSupportIcon} alt="Customer Support" />
              <p>24/7 Customer Support</p>
            </div>
            <div className="feature">
              <img src={dataSecurityIcon} alt="Data Security" />
              <p>Advanced Data Security</p>
            </div>
            <div className="feature">
              <img src={globalReachIcon} alt="Global Reach" />
              <p>Global Reach</p>
            </div>
            <div className="feature">
              <img src={innovationIcon} alt="Innovative Solutions" />
              <p>Innovative Solutions</p>
            </div>
            <div className="feature">
              <img src={scalabilityIcon} alt="Scalable Architecture" />
              <p>Scalable Architecture</p>
            </div>
            <div className="feature">
              <img src={userExperienceIcon} alt="User Experience" />
              <p>User Experience</p>
            </div>
            <div className="feature">
              <img src={customerSupportIcon} alt="Customer Support" />
              <p>24/7 Customer Support</p>
            </div>
            <div className="feature">
              <img src={dataSecurityIcon} alt="Data Security" />
              <p>Advanced Data Security</p>
            </div>
            <div className="feature">
              <img src={globalReachIcon} alt="Global Reach" />
              <p>Global Reach</p>
            </div>
          </div>
        </div>

        <div className="scroll-dots">
          <span className={`dot ${activeDot === 0 ? 'active' : ''}`}></span>
          <span className={`dot ${activeDot === 1 ? 'active' : ''}`}></span>
          <span className={`dot ${activeDot === 2 ? 'active' : ''}`}></span>
        </div>
      </div>
      <div className="home-background">
        <img src={technologyImage} alt="Background" />
      </div>
    </div>
  );
};

export default Home;
