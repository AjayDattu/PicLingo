// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from '../utils/isAuthenticated';

const PrivateRoute = ({ element: Component }) => {
  return isAuthenticated() ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
