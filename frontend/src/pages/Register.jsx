import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:9077/api/auth/register', {
        name,
        email,
        password,
      });

      // Destructure token + user data
      const { token, _id, name: registeredName, email: registeredEmail } = data;

      const userData = { _id, name: registeredName, email: registeredEmail };

      // Save token and update context
      localStorage.setItem('token', token);
      login(userData);

      // Redirect to home
      navigate('/');
    } catch (err) {
      alert('Registration failed');
      console.error('Register error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
         <Link to="/">
         <img src="/fs.png" alt="FirstSave Logo" className="logo" />
         </Link>
        <h2>Create account</h2>
        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Create account</button>
        </form>
        <p className="help-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;