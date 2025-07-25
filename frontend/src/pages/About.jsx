import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {

  return (
    <>
    <Navbar />
      <div className="parallax-section">
        <div className="parallax-content">
          <h1>Save Smarter. Shop Better.</h1>
          <p>Find the best prices in seconds. Compare. Click. Save.</p>
          <Link to="/register" className="cta-button">Start Saving Now</Link>
        </div>
      </div>

      <div className="about-content">
        <span className="highlight-tag">South Africa's Smartest Shopping Companion</span>
        <h2>Welcome to FirstSave</h2>
        <p>
          FirstSave is your intelligent shopping companion — helping you compare prices
          across South Africa’s most trusted stores like Pick n Pay, Checkers, and Clicks.
        </p>
        <p>
          Whether you're stocking up on groceries, essentials, or self-care items,
          FirstSave ensures you spend less and save more. No more switching tabs or
          second-guessing — we've done the work for you.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;