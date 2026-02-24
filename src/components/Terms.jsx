import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms of Service</h1>
        <p className="update-date">Last updated: December 10, 2025</p>

        <div className="terms-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>You must be at least 18 years old and a resident of the United States to apply for a loan through our platform.</p>
          </section>

          <section>
            <h2>3. Loan Terms</h2>
            <p>All loans are subject to approval. Interest rates range from 5.99% to 35.99% APR depending on credit profile and state regulations.</p>
          </section>

          <section>
            <h2>4. Privacy & Data</h2>
            <p>We collect and use your personal information only as described in our Privacy Policy. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2>5. Electronic Signature</h2>
            <p>By clicking "I Agree" or signing electronically, you consent to conduct transactions electronically.</p>
          </section>

          <section>
            <h2>6. Governing Law</h2>
            <p>These terms shall be governed by the laws of the State of Delaware without regard to conflict of law principles.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;