import React from 'react';
import Map from '../Map/Map';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <div className="contact-details">
            <p><strong>Address:</strong> 123 King St, Toronto, ON</p>
            <p><strong>Phone:</strong> (416) 123-4567</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>

          <div className="contact-hours">
            <h3>Hours of Operation</h3>
            <ul>
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="contact-socials">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map">
          <Map />
        </div>
      </div>
    </section>
  );
}
