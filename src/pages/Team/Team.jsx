import React, { useState } from 'react';
import './Team.css';
import assets from '../../assets/assets';
import CommitteeNav from '../../components/CommitteeNav/CommitteeNav';
import MemberCard from '../../components/MemberCard/MemberCard';
import Technical from '../../components/Technical/Technical';
import Program from '../../components/Program/Program';
import PRM from '../../components/PRM/PRM';
import PE from '../../components/PE/PE';

const Team = () => {
  const [selectedCommittee, setSelectedCommittee] = useState('Technical');

  const executiveMembers = [
    {
      role: 'President',
      name: 'T S Anjum Kausar',
      image: assets.anjum,
      linkedin: 'https://www.linkedin.com/in/ts-anjum-kausar-303b49270/',
      github: 'https://github.com/tsanjumkausar',
    },
    {
      role: 'Vice President',
      name: 'M Rahul Sagayaraj',
      image: assets.rahul,
      linkedin: 'https://www.linkedin.com/in/m-rahul-sagayaraj-870756281',
      github: 'https://github.com/rahulsags',
    },
    {
      role: 'Vice President',
      name: 'Tarun Kumar S',
      image: assets.tarun,
      linkedin: 'https://www.linkedin.com/in/tarun-kumar-s-676a74267/',
      github: 'https://quanta-naut.github.io/',
    },
    {
      role: 'Secretary',
      name: 'Venkateshwar Reddy',
      image: assets.venkateshwara,
      linkedin: 'https://www.linkedin.com/in/venkateshwar-reddy',
      github: 'https://github.com/venkateshwar-reddy',
    },
    {
      role: 'Joint Secretary',
      name: 'Deekshitha Gowda',
      image: assets.deekshitha,
      linkedin: 'https://www.linkedin.com/in/deekshitha-gowda',
      github: 'https://github.com/deekshitha-gowda',
    },
    {
      role: 'Treasurer',
      name: 'Umaiza Fathima',
      image: assets.umaiza,
      linkedin: 'https://www.linkedin.com/in/umaiza-fathima',
      github: '',
    },
  ];

  const committeeComponents = {
    Technical: <Technical />,
    Program: <Program />,
    PRM: <PRM />,
    PE: <PE />,
  };

  return (
    <div className="team">
      <div className="executive-team">
        {executiveMembers.map((member, index) => (
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
      <CommitteeNav selected={selectedCommittee} onSelect={setSelectedCommittee} />
      <hr />
      {committeeComponents[selectedCommittee]}
    </div>
  );
};

export default Team;