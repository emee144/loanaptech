import React from "react";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="loans-page">
      <div className="loans-container">
        <h1>Our Loan Products</h1>
        <p className="loans-subtitle">Flexible borrowing options designed for your needs</p>

        <div className="loan-types">
          <div className="loan-card">
            <h3>Personal Loan</h3>
            <div className="amount">$500 - $10,000</div>
            <ul>
              <li>12-48 month terms</li>
              <li>No collateral required</li>
              <li>Fixed monthly payments</li>
            </ul>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="loan-card featured">
            <div className="popular">Most Popular</div>
            <h3>Fast Cash Loan</h3>
            <div className="amount">$100 - $2,000</div>
            <ul>
              <li>Same-day funding</li>
              <li>No credit check option</li>
              <li>Paid back on payday</li>
            </ul>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="loan-card">
            <h3>Installment Loan</h3>
            <div className="amount">$2,500 - $25,000</div>
            <ul>
              <li>Up to 60 months</li>
              <li>Lower monthly payments</li>
              <li>Build your credit</li>
            </ul>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;