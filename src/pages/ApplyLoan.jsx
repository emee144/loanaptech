import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplyLoan.css';  

function ApplyLoan () {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    tenure: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("https://loanaptech-ijz6.onrender.com/api/loans/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          amount: formData.amount,
          duration: formData.tenure,
          purpose: formData.purpose
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to apply for loan");
        return;
      }

      alert(`Application submitted successfully!\nLoan ID: ${data.loan._id}`);

      navigate(`/loan/${data.loan._id}`);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
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