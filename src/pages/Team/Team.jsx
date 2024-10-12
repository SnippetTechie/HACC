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
          <img src={assets.anjum} alt="President's profile" />
          <p>T S Anjum Kausar</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/ts-anjum-kausar-303b49270/
"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/tsanjumkausar
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-team">
        <div className="member">
          <h1>Vice President</h1>
          <img src={assets.rahul} alt="Vice President's profile" />
          <p>M Rahul Sagayaraj</p>
          <ul>
            <li><a href="www.linkedin.com/in/m-rahul-sagayaraj-870756281
"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/rahulsags
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Vice President</h1>
          <img src={assets.tarun} alt="Vice President's profile" />
          <p>Tarun Kumar S</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/tarun-kumar-s-676a74267/"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://quanta-naut.github.io/
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-team">
        <div className="member">
          <h1>Secretary</h1>
          <img src={assets.venkateshwara} alt="Secretary's profile" />
          <p>Venkateshwar Reddy</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/venkateshwar-reddy-b7290717b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/namo12345"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Joint Secretary</h1>
          <img src={assets.deekshitha} alt="Joint Secretary's profile" />
          <p>Deekshitha Gowda</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/deekshitha-ravikumar-gowda-679080295/
"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/16-dee
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Treasurer</h1>
          <img src={assets.umaiza} alt="Treasurer's profile" />
          <p>Umaiza Fathima</p>
          <ul>
            <li><a href="http://linkedin.com/in/umaiza-fathima-4247b9329
"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            <li><a href=""><img src={assets.github} alt="Github" /></a></li>
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
