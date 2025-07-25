import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate,  Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { data } = await axios.post('http://localhost:9077/api/auth/login', {
        email,
        password,
      });

      // Check if token is present in response
      if (!data || !data.token) {
        throw new Error('No token returned from server');
      }

      // Extract token and user info from response (adjust fields as your backend sends them)
      const { token, _id, name, email: userEmail } = data;

      const userData = { _id, name, email: userEmail };

      localStorage.setItem('token', token);
      login(userData); // update context with user info

      // Redirect will happen automatically via useEffect when user updates
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid credentials or server error.');
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
         <Link to="/">
         <img src="/fs.png" alt="FirstSave Logo" className="logo" />
         </Link>

        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
          {error && <p className="error-text">{error}</p>}
        </form>
        <p className="help-text">
          New to FirstSave? <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;