// src/HomePage.js
import React, { useState } from 'react';
import { Cards } from './components/Cards'; 
import ProgressBar from './components/ProgressBar';
import './css/Employee.css';

const HomePage = () => {
  const totalCards = 4; // Update this based on your number of cards
  const [completedCards, setCompletedCards] = useState(0);

  const handleCompleteCard = () => {
    setCompletedCards((prev) => (prev < totalCards ? prev + 1 : prev));
  };

  return (
    <div className="app-container">
      <div className="cards-section">
        {[...Array(totalCards)].map((_, index) => (
          <div key={index} onClick={handleCompleteCard}>
            <Cards />
            {/* Optionally, you can add a button inside Cards component to mark it as completed */}
          </div>
        ))}
      </div>
      <div className="progress-section">
        <div className="progressBar">
          <ProgressBar progress={(completedCards / totalCards) * 100} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
