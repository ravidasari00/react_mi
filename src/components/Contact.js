import React from 'react';
import './Contact.css'; // Make sure to create and import a CSS file for styling

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="title">
          <h3>Contact Us</h3>
        </div>
        <div className="contact-grids">
          <div className="address">
            <div className="address-row">
              <div className="address-left">
                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
              </div>
              <div className="address-right">
                <h5>Visit Us</h5>
                <p>2nd Floor, Hallmark One Building Plot No.216, 217, 220 Sai Aishwarya Layout, Khajaguda, near Lanco Hills Road, Hyderabad, Telangana 500089</p>
              </div>
            </div>
            <div className="address-row">
              <div className="address-left">
                <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
              </div>
              <div className="address-right">
                <h5>Mail Us</h5>
                <p><a href="mailto:info@penusoft.com">info@somasankalp.com</a></p>
              </div>
            </div>
            <div className="address-row">
              <div className="address-left">
                <span className="glyphicon glyphicon-phone" aria-hidden="true"></span>
              </div>
              <div className="address-right">
                <h5>Call Us</h5>
                <p><a href="tel:8885008560">+91 88850 08560</a></p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="#" method="post">
              <div className="form-row">
                <input type="text" name="First Name" className="form-control" placeholder="First Name" required />
              </div>
              <div className="form-row">
                <input type="text" className="form-control" name="Last Name" placeholder="Last Name" required />
              </div>
              <div className="form-row">
                <input type="text" name="Number" className="form-control" placeholder="Mobile Number" required />
              </div>
              <div className="form-row">
                <input type="email" className="form-control" name="Email" placeholder="Email" required />
              </div>
              <div className="form-row">
                <textarea name="Message" className="form-control" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="form-row">
                <input type="submit" value="SUBMIT" className="btn btn-warning" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
