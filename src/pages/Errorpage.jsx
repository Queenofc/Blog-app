// ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const message = location.state?.message || 'An unexpected error occurred.';

  return (
    <div className="error-page">
      <img src="../src/img/er.png" alt=""/>
      <Link className="button" to="/">Go Back</Link> {/* Link to navigate to home */}
    </div>
  );
};

export default ErrorPage
