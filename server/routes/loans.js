const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');
const auth = require('../middleware/auth');

// Apply for loan
router.post('/apply', auth, async (req, res) => {
  try {
    const { amount, purpose, duration, interestRate } = req.body;

    // Validate
    if (!amount || !purpose || !duration) {
      return res.status(400).json({ error: 'Please provide all fields' });
    }

    // Calculate monthly payment
    const rate = (interestRate || 5) / 100 / 12;
    const n = duration;
    const monthlyPayment = (amount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    const totalPayment = monthlyPayment * duration;

    // Create loan
    const loan = await Loan.create({
      userId: req.user._id,
      amount,
      purpose,
      duration,
      interestRate: interestRate || 5,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2)
    });

    res.status(201).json({
      success: true,
      loan
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get user's loans
router.get('/my-loans', auth, async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user._id }).sort({ appliedDate: -1 });
    
    res.json({
      success: true,
      loans
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single loan by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const loan = await Loan.findOne({ 
      _id: req.params.id, 
      userId: req.user._id 
    });
    
    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    res.json({
      success: true,
      loan
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get dashboard stats
router.get('/dashboard/stats', auth, async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user._id });

    const stats = {
      totalLoans: loans.length,
      pendingLoans: loans.filter(l => l.status === 'pending').length,
      approvedLoans: loans.filter(l => l.status === 'approved').length,
      activeLoans: loans.filter(l => l.status === 'active').length,
      rejectedLoans: loans.filter(l => l.status === 'rejected').length,
      completedLoans: loans.filter(l => l.status === 'completed').length,
      totalBorrowed: loans
        .filter(l => l.status === 'approved' || l.status === 'active')
        .reduce((sum, l) => sum + l.amount, 0),
      totalRepayment: loans
        .filter(l => l.status === 'approved' || l.status === 'active')
        .reduce((sum, l) => sum + parseFloat(l.totalPayment), 0)
    };

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;