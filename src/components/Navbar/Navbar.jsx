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
    <div className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>HACC</h1>
      </div>
      <input 
        type="checkbox" 
        id="check" 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
      />
      <div className="btn_one">
        <label htmlFor="check">
          <img src={assets.braces} alt="" />
        </label>
      </div>
      <div className="navs">
        <ul>
          <li>
            <label htmlFor="check"><p>{"{"}</p></label>
          </li>
          <li 
            onClick={() => handleMenuClick("Home")} 
            className={menu === "Home" ? "active" : ""}
          >
            <Link to="/"><label htmlFor="check">Home</label></Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Hackathon")} 
            className={menu === "Hackathon" ? "active" : ""}
          >
            <Link to="/hackathon"><label htmlFor="check">Hackathon</label></Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Coding")} 
            className={menu === "Coding" ? "active" : ""}
          >
            <Link to="/coding"><label htmlFor="check">Coding</label></Link>
          </li>
          <li 
            onClick={() => handleMenuClick("Team")} 
            className={menu === "Team" ? "active" : ""}
          >
            <Link to="/team"><label htmlFor="check">Team</label></Link>
          </li>
          <li>
            <label htmlFor="check"><p>{"}"}</p></label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
