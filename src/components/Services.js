import React from 'react';
import './Services.css'; // Make sure to create/update this CSS file

import webDevIcon from './Assets/web-dev-icon.png';
import mobileAppIcon from './Assets/mobile-app-icon.png';
import digitalMarketingIcon from './Assets/digital-marketing-icon.png';
import itSupportIcon from './Assets/it-support-icon.png';
import edTechIcon from './Assets/ed-tech-icon.png';
import creativeServicesIcon from './Assets/creative-services-icon.png';
import saasIcon from './Assets/saas-icon.png';
import aiIcon from './Assets/ai-icon.png';
import talentIcon from './Assets/talent-icon.png';

// Define the services with categories and icons
const servicesData = [
  { category: 'Web Development Services', icon: webDevIcon },
  { category: 'Mobile App Development', icon: mobileAppIcon },
  { category: 'Digital Marketing Services', icon: digitalMarketingIcon },
  { category: 'IT Consulting and Support', icon: itSupportIcon },
  { category: 'Educational Technology', icon: edTechIcon },
  { category: 'Creative Services', icon: creativeServicesIcon },
  { category: 'Software-as-a-Service (SaaS)', icon: saasIcon },
  { category: 'AI and Machine Learning Solutions', icon: aiIcon },
  { category: 'Talent Acquisition and Management', icon: talentIcon },
];

const Services = ({ theme }) => {
  return (
    <div className={`services-container ${theme}`}>
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        {servicesData.map((serviceCategory, index) => (
          <div className="service-box" key={index}>
            <span className="service-name">{serviceCategory.category}</span>
            <img src={serviceCategory.icon} alt={`${serviceCategory.category} icon`} className="service-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
