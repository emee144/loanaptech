import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out anytime.</p>

        <div className="contact-info">
          <div className="info-item">
            <strong>Email:</strong> support@loanapp.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +1 (555) 123-4567
          </div>
          <div className="info-item">
            <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;