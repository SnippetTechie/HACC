import React from 'react';
import './CommitteeNav.css';

const CommitteeNav = ({ selected, onSelect }) => {
  const committees = ['Technical', 'Program', 'Marketing', 'PR_PE'];

  return (
    <div className="committee-nav">
      {committees.map((committee) => (
        <button
          key={committee}
          className={`nav-button ${selected === committee ? 'active' : ''}`}
          onClick={() => onSelect(committee)}
        >
          {committee}
        </button>
      ))}
    </div>
  );
};

export default CommitteeNav;