import React from 'react';
import './About.css'; // Import CSS file for styling
import aboutImage from './Assets/about-image.png'; // Import an image for the left side

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2> {/* Heading at the top center */}
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
        </p>
      </div>
    </div>
  );
};

export default About;
