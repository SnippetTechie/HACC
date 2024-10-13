import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({menu,setMenu}) => {

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    // Additional logic to close the menu can be added here
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="HACC Logo" />
        <h1>HACC</h1>
      </div>
      <input type="checkbox" id="check" />
      <div className="btn_one">
        <label htmlFor="check" aria-label="Toggle navigation">
          <img src={assets.braces} alt="Menu Toggle" />
        </label>
      </div>
      <div className="navs">
        <ul>
          <li><label htmlFor="check">&#123;</label></li>
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
          <li><label htmlFor="check">&#125;</label></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar