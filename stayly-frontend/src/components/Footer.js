import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>STAYLY</h3>
        <p>Find Your Perfect Stay</p>
        <p>Your trusted platform for finding rentals or roommates.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="#">About Us</a>
        <a href="#">How It Works</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-section">
        <h3>For Renters</h3>
        <a href="#">Browse Properties</a>
        <a href="#">Find Roommates</a>
        <a href="#">Rental Guide</a>
        <a href="#">FAQs</a>
      </div>
      <div className="footer-section">
        <h3>For Landlords</h3>
        <a href="#">List Your Property</a>
        <a href="#">Resources</a>
        <a href="#">Success Stories</a>
        <a href="#">Support</a>
      </div>
    </div>
    <div className="footer-bottom">
      © 2024 STAYLY. All rights reserved.
    </div>
  </footer>
);

export default Footer;
