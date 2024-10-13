import React from 'react';
import './MemberCard.css';

const MemberCard = ({ role, name, image, linkedin, github }) => (
  <div className="member">
    <h1>{role}</h1>
    <img src={image} alt={`${name}'s profile`} />
    <p>{name}</p>
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
);

export default MemberCard;