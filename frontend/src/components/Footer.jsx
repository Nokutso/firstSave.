import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>Shop</h4>
      <a href="/home">All Products</a>
      <a href="/deals">Deals</a>
      <a href="/new-arrivals">New Arrivals</a>
      <a href="/best-sellers">Best Sellers</a>
    </div>

    <div className="footer-section">
      <h4>Customer Service</h4>
      <a href="/contact">Contact Us</a>
      <a href="/faq">FAQs</a>
    </div>

    <div className="footer-section">
      <h4>Company</h4>
      <a href="/about">About Us</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms & Conditions</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} FirstSave. All rights reserved.</p>
  </div>
</footer>
);

export default Footer;