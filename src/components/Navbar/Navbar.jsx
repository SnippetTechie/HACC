import React, { useState } from 'react';
import './Navbar.css';
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ menu, setMenu }) => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleMenuClick = (menuOption) => {
    setMenu(menuOption); 
    setIsChecked(false); 
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="HACC Logo" />
        <h1>HACC</h1>
      </div>
      
      <input 
        type="checkbox" 
        id="check" 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
      />
      
      <div className="btn_one">
        <label htmlFor="check" aria-label="Toggle navigation">
          <img src={assets.braces} alt="Menu Toggle" />
        </label>
      </div>
      
      <div className={`navs ${isChecked ? 'active' : ''}`}>
        <ul>
          {/* Opening Brace as Text */}
          <li className="brace-item">
            {'{'}
          </li>
          
          <li 
            onClick={() => handleMenuClick("Home")} 
            className={menu === "Home" ? "active" : ""}
          >
            <Link to="/">Home</Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Hackathon")} 
            className={menu === "Hackathon" ? "active" : ""}
          >
            <Link to="/hackathon">Hackathon</Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Coding")} 
            className={menu === "Coding" ? "active" : ""}
          >
            <Link to="/coding">Coding</Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Team")} 
            className={menu === "Team" ? "active" : ""}
          >
            <Link to="/team">Team</Link>
          </li>
          
          {/* Closing Brace as Text */}
          <li className="brace-item">
            {'}'}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;