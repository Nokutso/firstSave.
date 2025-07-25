// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Routes where we want to hide nav links
  const hideLinksOn = ['/'];
  const shouldHideLinks = hideLinksOn.includes(location.pathname) && !user;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className={`nav-left ${shouldHideLinks ? 'center-logo' : ''}`}>
        <Link to="/home" className="logo-link">
          <img
            src="/firstsave.jpeg"
            alt="FirstSave Logo"
            width="70"
            height="70"
            className="logo"
          />
        </Link>

        {user && (
          <>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">About</Link>
          </>
        )}
      </div>

      {/* Right Section */}
        <div className="nav-right">
          {user ? (
            <>
              <span className="nav-user">Hi, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
    </nav>
  );
};

export default Navbar;