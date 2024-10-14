import React from 'react';
import './MemberCard.css';
import assets from '../../assets/assets';

const MemberCard = ({ role, name, image, linkedin, github }) => (
  <div className="member">
    <div className="member-title">
      <h1>{role}</h1>
    </div>
    <div className="member-info">
      <img src={image} alt={`${name}'s profile`} />
      <p>{name}</p>
    </div>
    <div className="member-links">
      <ul>
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedIn} alt="LinkedIn" />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src={assets.github} alt="Github" />
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default MemberCard;
