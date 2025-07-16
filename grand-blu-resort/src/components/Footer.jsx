import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h3>Grand Blu Resort</h3>
          <p>Where elegance meets the sea.</p>
        </div>

        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Ocean Drive, Santorini</p>
          <p>+30 123 456 789</p>
          <p>info@grandblu.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Grand Blu Resort. All rights reserved. | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
