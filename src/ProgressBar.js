import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value }) => {
  const percentage = (value / 150) * 100;

  return (
    <div className="progress-bar">
      <div
        className="filler"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
