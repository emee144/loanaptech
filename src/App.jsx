import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import ApplyLoan from './pages/ApplyLoan';
import LoanStatus from './pages/LoanStatus';
import LoanDetails from './pages/LoanDetails';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Loans from './components/Loans';
import Faq from './components/Faq';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
     <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          <Routes>
  {/* Public routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/loans" element={<Loans />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/privacy" element={<Privacy />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/apply" element={<ApplyLoan />} />
    <Route path="/status" element={<LoanStatus />} />
    <Route path="/loan/:id" element={<LoanDetails />} />

</Routes>

        </main>
        <Footer />      
                   
      </div>
    </Router>
  );
}

export default App;