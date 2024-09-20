import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  console.log('PrivateRoute rendered with role:', role);

  const token = sessionStorage.getItem('token');
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting to login-register page');
    return <Navigate to="/login-register" />; // Redirect to combined login-register page
  }

  try {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      console.log('Invalid token format');
      return <Navigate to="/" />;
    }

    const payload = atob(tokenParts[1]);
    const tokenPayload = JSON.parse(payload);
    const userRole = tokenPayload.role;
    console.log('Decoded token payload:', tokenPayload);
    console.log('User role from token:', userRole);

    if (role !== userRole) {
      console.log('User role does not match required role, redirecting to home page');
      return <Navigate to="/" />;
    }

    console.log('Role matches, rendering children');
    return children;
  } catch (error) {
    console.error('Error decoding token:', error);
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
