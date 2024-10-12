import React from 'react';
import './RedirectCard.css';

const RedirectCard = ({ title, buttonText = "Stay Tuned", imageSrc }) => {
  return (
    <div className="redirectcard">
      <div className="redirectcard-header">
        <img src={imageSrc} alt="icon" />
      </div>
      <div className="redirectcard-content">
        <h2>{title}</h2>
        <button className="cta-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default RedirectCard;
