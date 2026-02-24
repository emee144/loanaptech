// src/pages/LoanDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './LoanDetails.css';

function LoanDetails() {
  const { id } = useParams();
  const loans = JSON.parse(localStorage.getItem('loans') || '[]');
  const loan = loans.find(l => l.id === id);

  if (!loan) {
    return (
      <div className="loan-notfound">
        <div className="notfound-card">
          <h2>Loan Application Not Found</h2>
          <p>The Loan ID you entered does not exist or has been removed.</p>
          <Link to="/status" className="notfound-btn">Check Another Status</Link>
        </div>
      </div>
    );
  }

  const isApproved = loan.status === 'Approved';

  return (
    <div className="details-container">
      <div className="details-card">
        {/* Header with Status Badge */}
        <div className={`details-header ${isApproved ? 'approved' : 'rejected'}`}>
          <h1>Loan Application Details</h1>
          <div className="status-badge">
            {isApproved ? 'Approved' : 'Rejected'}
          </div>
        </div>

        <div className="details-id">
          Loan ID: <span className="id-number">{loan.id}</span>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">Applicant Name</span>
            <p className="detail-value">{loan.name}</p>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email Address</span>
            <p className="detail-value">{loan.email}</p>
          </div>
        </div>

        <div className="details-section">
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Requested Amount</span>
              <p className="detail-amount">
                ${parseInt(loan.amount).toLocaleString()}
              </p>
            </div>
            <div className="detail-item">
              <span className="detail-label">Loan Tenure</span>
              <p className="detail-value">{loan.tenure} months</p>
            </div>
          </div>
        </div>

        <div className="details-section">
          <span className="detail-label">Purpose of Loan</span>
          <p className="detail-text">{loan.purpose}</p>
        </div>

        <div className="details-section details-date">
          <span className="detail-label">Applied On</span>
          <p className="detail-value">{loan.appliedAt}</p>
        </div>

        <div className="details-actions">
          <Link to="/dashboard" className="btn-dashboard">
            Go to Dashboard
          </Link>
          <Link to="/status" className="btn-secondary">
            Check Another Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;