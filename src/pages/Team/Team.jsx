import React, { useState } from 'react';
import './Team.css';
import assets from '../../assets/assets';
import Committee_nav from '../../components/Committee-nav/Committee_nav';
import Technical from '../../components/Technical/Technical';
import Program from '../../components/Program/Program';
import PRM from '../../components/PRM/PRM';
import PE from '../../components/PE/PE';

const Team = () => {
  
  const [Committee, SetCommittee] = useState("Technical");

  const committeeComponents = {
    Technical: <Technical />,
    Program: <Program />,
    PRM: <PRM />,
    PE: <PE />
  };

  return (
    <div className='team'>
      <div className="sub-team">
        <div className="member">
          <h1>President</h1>
          <img src={assets.profile_icon} alt="President's profile" />
          <p>T S Anjum Kausar</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-team">
        <div className="member">
          <h1>Vice President</h1>
          <img src={assets.profile_icon} alt="Vice President's profile" />
          <p>M Rahul Sagayaraj</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Vice President</h1>
          <img src={assets.profile_icon} alt="Vice President's profile" />
          <p>Tarun Kumar S</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-team">
        <div className="member">
          <h1>Secretary</h1>
          <img src={assets.profile_icon} alt="Secretary's profile" />
          <p>Venkateshwar Reddy</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Joint Secretary</h1>
          <img src={assets.profile_icon} alt="Joint Secretary's profile" />
          <p>Deekshitha Gowda</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Treasurer</h1>
          <img src={assets.profile_icon} alt="Treasurer's profile" />
          <p>Umaiza Fathima</p>
          <ul>
            <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-team">
        <div className="container">
          <Committee_nav Committee={Committee} SetCommittee={SetCommittee} />
          {committeeComponents[Committee] || <div>Invalid Committee</div>}
        </div>
      </div>
    </div>
  );
}

export default Team;
