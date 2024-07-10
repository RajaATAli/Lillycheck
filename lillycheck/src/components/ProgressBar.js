// src/components/ProgressBar.js
import React from 'react';
import '../css/ProgressBar.css';

const ProgressBar = ({ progress }) => {
  const milestones = [25, 50, 75]; // Example milestones: 25%, 50%, 75%
  const milestoneMarkers = milestones.map((milestone, index) => (
    <div
      key={index}
      className="milestone-marker"
      style={{ top: `${milestone}%` }}
    />
  ));

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="milestones">{milestoneMarkers}</div>
        <div className="progress" style={{ height: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
