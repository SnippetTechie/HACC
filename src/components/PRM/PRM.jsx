import React from 'react';
import assets from '../../assets/assets';
import MemberCard from '../MemberCard/MemberCard';
import './PRM.css';

const PRM = () => {
  const members = [
    {
      role: 'Chair',
      name: 'Anushka Roy',
      image: assets.anushka,
      linkedin: 'https://www.linkedin.com/in/anushka-roy-3a239930b',
      github: 'https://github.com/anushkaaaRoy',
    },
    {
      role: 'Member',
      name: 'Ankana Roy',
      image: assets.ankana,
      linkedin: 'https://www.linkedin.com/in/ankana-roy',
      github: 'https://github.com/ankana1705',
    },
    {
      role: 'Member',
      name: 'Mahalakshmi J',
      image: assets.mahalakshmi,
      linkedin: 'https://www.linkedin.com/in/mahalakshmi-j-92784230b',
      github: 'https://github.com/Maha0096',
    },
    {
      role: 'Member',
      name: 'S P Monish',
      image: assets.monish,
      linkedin: 'https://www.linkedin.com/in/sp-monish-31a73a295',
      github: 'https://github.com/spmonish',
    },
    {
      role: 'Member',
      name: 'Rakshitha S',
      image: assets.rakshitha,
      linkedin: 'https://www.linkedin.com/in/rakshitha-s-6347a8322/',
      github: 'https://github.com/rakshithasanjay',
    },
  ];

  return (
    <div className="committee">
      <h2>Marketing Committee</h2>
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

export default PRM;