import React from 'react';
import '../../style/loadingPage.css'; // Import the stylesheet for styling

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingPage;