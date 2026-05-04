import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);

  const checkAuth = async () => {
    try {
      const response = await fetch(
        "https://loanaptech-ijz6.onrender.com/api/auth/me",
        { credentials: "include" }
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
  try {
    const res = await fetch("https://loanaptech-ijz6.onrender.com/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      setUser(null);
      setLoading(false); 
      navigate("/");
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  const renderAuthLinks = () => {
    if (loading) return null;

    if (user) {
      return (
        <>
          <li>
            <Link to="/apply" className={isActive("/apply") ? "nav-link active" : "nav-link"}>
              Apply Now
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-cta">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-cta">Sign Up</Link>
        </li>
      </>
    );
  };

  const renderMobileAuthLinks = () => {
    if (loading) return null;

    if (user) {
      return (
        <>
          <Link to="/apply" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
          <Link to="/dashboard" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <button className="mobile-logout" onClick={() => { handleLogout(); setMobileMenuOpen(false); }}>Logout</button>
        </>
      );
    }

    return (
      <>
        <Link to="/login" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
        <Link to="/signup" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
      </>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">LoanAptech</Link>

        <ul className="navbar-menu">
          <li><Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>Home</Link></li>
          <li><Link to="/loans" className={isActive("/loans") ? "nav-link active" : "nav-link"}>Loans</Link></li>
          <li><Link to="/about" className={isActive("/about") ? "nav-link active" : "nav-link"}>About</Link></li>
          <li><Link to="/contact" className={isActive("/contact") ? "nav-link active" : "nav-link"}>Contact</Link></li>
          {renderAuthLinks()}
        </ul>

        <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/loans" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Loans</Link>
        <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        {renderMobileAuthLinks()}
      </div>
    </nav>
  );
}

export default Navbar;