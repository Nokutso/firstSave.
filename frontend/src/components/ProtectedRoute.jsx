// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // wait for user state to load

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;