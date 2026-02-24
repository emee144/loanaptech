// src/pages/LoanStatus.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoanStatus.css';

function LoanStatus() {
  const [loanId, setLoanId] = useState('');
  const [foundLoan, setFoundLoan] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setFoundLoan(null);

    if (!loanId.trim()) {
      setError('Please enter a Loan ID');
      return;
    }

    const loans = JSON.parse(localStorage.getItem('loans') || '[]');
    const loan = loans.find((l) => l.id === loanId);

    if (loan) {
      setFoundLoan(loan);
    } else {
      setError('No loan application found with this ID');
    }
  };

  return (
    <div className="status-container">
      <h1 className="status-title">Check Loan Status</h1>

      {/* Search Form */}
      <div className="status-search-card">
        <form onSubmit={handleSubmit} className="status-form">
          <input
            type="text"
            placeholder="Enter your Loan ID (e.g., 171234567890)"
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
            className="status-input"
          />
          <button type="submit" className="status-search-btn">
            Check Status
          </button>
        </form>

        {error && <div className="status-error">{error}</div>}
      </div>

      {/* Result Card */}
      {foundLoan && (
        <div className="status-result-card">
          <div
            className={`status-header ${
              foundLoan.status === 'Approved' ? 'approved' : 'rejected'
            }`}
          >
            {foundLoan.status.toUpperCase()}
          </div>

          <div className="status-body">
            <div className="status-grid">
              <div>
                <span className="status-label">Loan ID</span>
                <p className="status-value status-id">{foundLoan.id}</p>
              </div>
              <div>
                <span className="status-label">Applicant Name</span>
                <p className="status-value">{foundLoan.name}</p>
              </div>
            </div>

            <div className="status-section">
              <div className="status-grid">
                <div>
                  <span className="status-label">Requested Amount</span>
                  <p className="status-amount">
                    ${parseInt(foundLoan.amount).toLocaleString()}
                  </p>
                </div>
                <div>
                  <span className="status-label">Tenure</span>
                  <p className="status-value">{foundLoan.tenure} months</p>
                </div>
              </div>
            </div>

            <div className="status-section">
              <span className="status-label">Purpose of Loan</span>
              <p className="status-text">{foundLoan.purpose}</p>
            </div>

            <div className="status-section status-date">
              <span className="status-label">Applied On</span>
              <p className="status-value">{foundLoan.appliedAt}</p>
            </div>

            <div className="status-actions">
              <Link
                to={`/loan/${foundLoan.id}`}
                className="status-btn-primary"
              >
                View Full Details
              </Link>
              <Link to="/dashboard" className="status-btn-secondary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}


      <div className="status-footer-text">
        <p>
          Don't have a Loan ID?{' '}
          <Link to="/apply" className="status-apply-link">
            Apply for a new loan
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoanStatus;