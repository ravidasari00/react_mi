import React, { useRef } from 'react';
import './Products.css';

// Sample product images and data
import employeeMonitoringImg from './Assets/employee-monitoring.png';
import hotelBookingImg from './Assets/hotel-booking.png';
import medicalSoftwareImg from './Assets/medical-software.png';
import projectManagementImg from './Assets/project-management.png';
import crmSoftwareImg from './Assets/crm-software.png';

const productsData = [
  { title: 'Employee Monitoring Software', image: employeeMonitoringImg },
  { title: 'Hotel Booking Software', image: hotelBookingImg },
  { title: 'Medical Software', image: medicalSoftwareImg },
  { title: 'Project Management Software', image: projectManagementImg },
  { title: 'CRM Software', image: crmSoftwareImg },
  { title: 'Project Management Software', image: projectManagementImg },
  { title: 'CRM Software', image: crmSoftwareImg },
];

const Products = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="products-container">
      <h3 className="products-heading">Our Products</h3>
      <h3>Supporting businesses of all shapes and sizes with <br></br>scalable technologies for long-term success</h3><br></br>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="products-grid" ref={scrollContainerRef}>
          {productsData.map((product, index) => (
            <div className="product-box" key={index}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
