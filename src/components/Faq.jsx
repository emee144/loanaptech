import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about our loan services</p>

        <div className="faq-list">
          <details className="faq-item">
            <summary>How fast can I get approved?</summary>
            <p>Most applicants receive an instant decision within 60 seconds. Funds can be in your account as soon as the same day.</p>
          </details>

          <details className="faq-item">
            <summary>Do you check credit score?</summary>
            <p>We perform a soft credit check that does not affect your score. Approval is based on income and banking history, not just credit.</p>
          </details>

          <details className="faq-item">
            <summary>What documents do I need?</summary>
            <p>Just a government ID, proof of income (pay stub or bank statement), and an active checking account. No paperwork faxing required.</p>
          </details>

          <details className="faq-item">
            <summary>Can I pay off early?</summary>
            <p>Yes! There are no prepayment penalties. Pay off anytime and save on interest.</p>
          </details>

          <details className="faq-item">
            <summary>Is my information secure?</summary>
            <p>Absolutely. We use 256-bit SSL encryption and bank-level security. Your data is never sold or shared.</p>
          </details>

          <details className="faq-item">
            <summary>What if I have bad credit?</summary>
            <p>We approve many customers with less-than-perfect credit. We focus on your current ability to repay.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;