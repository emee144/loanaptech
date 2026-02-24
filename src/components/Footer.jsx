import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer () {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
    
          <div className="footer-brand">
            <h2>LoanAptech</h2>
            <p>Your trusted partner for fast, transparent, and affordable loan solutions.</p>
          </div>

        
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/loans">Loan Products</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p> support@loanaptech.com</p>
            <p> +1 (555) 123-4567</p>
            <p> Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} LoanAptech. All rights reserved.</p>
          <p>Licensed by relevant financial authorities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;