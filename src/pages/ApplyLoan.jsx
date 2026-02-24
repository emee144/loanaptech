import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplyLoan.css';  

function ApplyLoan () {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', amount: '', tenure: '', purpose: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLoan = {
      id: Date.now().toString(),
      ...formData,
      amount: Number(formData.amount),
      email: user.email,
      status: Math.random() > 0.3 ? 'Approved' : 'Rejected',
      appliedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    };

    const loans = JSON.parse(localStorage.getItem('loans') || '[]');
    loans.push(newLoan);
    localStorage.setItem('loans', JSON.stringify(loans));

    alert(`Application submitted successfully!\nYour Loan ID: ${newLoan.id}`);
    navigate(`/loan/${newLoan.id}`);
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h1 className="apply-title">Apply for Loan</h1>

        <form onSubmit={handleSubmit} className="apply-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="amount">Loan Amount ($)</label>
            <input
              id="amount"
              type="number"
              name="amount"
              min="1000"
              required
              value={formData.amount}
              onChange={handleChange}
              placeholder="50000"
            />
          </div>

          <div className="input-group">
            <label htmlFor="tenure">Loan Tenure</label>
            <select
              id="tenure"
              name="tenure"
              required
              value={formData.tenure}
              onChange={handleChange}
            >
              <option value="">Select tenure</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="60">60 months</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="purpose">Purpose of Loan</label>
            <textarea
              id="purpose"
              name="purpose"
              rows="5"
              required
              value={formData.purpose}
              onChange={handleChange}
              placeholder="e.g., Home renovation, Business expansion, Education..."
            ></textarea>
          </div>

          <button type="submit" className="apply-submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoan;