import React from 'react';
import assets from '../../assets/assets';
import MemberCard from '../MemberCard/MemberCard';
import './Technical.css';

const Technical = () => {
  const members = [
    {
      role: 'Chair',
      name: 'Pritam Dhar',
      image: assets.pritam,
      linkedin: 'https://www.linkedin.com/in/pritam-dhar-300b5725b',
      github: 'https://github.com/hashtagp',
    },
    {
      role: 'Member',
      name: 'Kasa Chanakya',
      image: assets.chanakya,
      linkedin: 'https://www.linkedin.com/in/kasa-chanakya',
      github: 'https://github.com/chanakya29092004',
    },
    {
      role: 'Member',
      name: 'Rachan Murthy',
      image: assets.rachan,
      linkedin: 'https://www.linkedin.com/in/rachan-murthy-726788256',
      github: 'https://github.com/RachanMurthy',
    },
    {
      role: 'Member',
      name: 'Satwik M Badigar',
      image: assets.satwik,
      linkedin: 'https://www.linkedin.com/in/satwik-m-badiger',
      github: 'https://github.com/satwikmbadiger',
    },
    {
      role: 'Member',
      name: 'Satyam Gupta',
      image: assets.satyam,
      linkedin: 'https://www.linkedin.com/in/satyam-gupta-41606a28a',
      github: 'https://github.com/Satyamgupta2365',
    },
  ];

  return (
    <div className="committee">
      <h2>Technical Committee</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            role={member.role}
            name={member.name}
            image={member.image}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Technical;