import React from 'react';
import assets from '../../assets/assets';
import MemberCard from '../MemberCard/MemberCard';
import './PE.css';

const PE = () => {
  const members = [
    {
      role: 'Member',
      name: 'Deepthi P',
      image: assets.deepthi,
      linkedin: 'https://www.linkedin.com/in/deepthi-p-6a0490313',
      github: 'https://github.com/Deepthi11022205',
    },
    {
      role: 'Chair',
      name: 'Gauri Sahni',
      image: assets.gauri,
      linkedin: 'https://www.linkedin.com/in/gauri-sahni-338109228',
      github: '',
    },
    {
      role: 'Member',
      name: 'Harshita Harihar',
      image: assets.harshita,
      linkedin: 'https://www.linkedin.com/in/harshita-harihar-9aaa2b2b4',
      github: 'https://github.com/HarshitaHarihar',
    },
    {
      role: 'Member',
      name: 'Mohit Kumar',
      image: assets.mohit,
      linkedin: 'https://www.linkedin.com/in/mohit-kumar-905507329',
      github: 'https://github.com/mohit0517',
    },
    {
      role: 'Member',
      name: 'Nishchay Agarwal',
      image: assets.yash,
      linkedin: 'https://www.linkedin.com/in/yash-agarwal-38a1792bb',
      github: 'https://github.com/yforyash',
    },
  ];

  return (
    <div className="committee">
      <h2>PE Committee</h2>
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

export default PE;