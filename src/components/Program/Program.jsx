import React from 'react';
import assets from '../../assets/assets';
import MemberCard from '../MemberCard/MemberCard';
import './Program.css';

const Program = () => {
  const members = [
    {
      role: 'Chair',
      name: 'B Sai Kashyap',
      image: assets.kashyap,
      linkedin: 'https://www.linkedin.com/in/bsaikashyap',
      github: 'https://github.com/Kashyap1854',
    },
    {
      role: 'Member',
      name: 'Vivith Rajiv Kanchi',
      image: assets.vivith,
      linkedin: 'https://in.linkedin.com/in/vivith-rajiv-kanchi-225601285',
      github: 'https://github.com/VivithRK',
    },
    {
      role: 'Member',
      name: 'P Lohith',
      image: assets.lohith,
      linkedin: 'https://www.linkedin.com/in/lohith-p-715899291',
      github: 'https://github.com/Lohithp2005',
    },
    {
      role: 'Member',
      name: 'Sharlet Alex',
      image: assets.sharlet,
      linkedin: 'https://www.linkedin.com/in/sharlet-alex-267456296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      role: 'Member',
      name: 'Venkatesh S',
      image: assets.venkatesh,
      linkedin: 'https://www.linkedin.com/in/venky2211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
  ];

  return (
    <div className="committee">
      <h2>Program Committee</h2>
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

export default Program;