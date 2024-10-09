import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  let page="";
  switch (location.pathname) {
    case '/':
      page = "Home";
      break;
    case '/hackathon':
      page = "Hackathon";
      break;
    case '/coding':
      page = "Coding";
      break;
    case '/team':
      page = "Team";
      break;
    default:
      page = "Unknown"; 
  }
  const [menu,setMenu]=useState(page);
    

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>HACC</h1>
      </div>
      <div className="navs">
        <ul>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><Link to="/">Home</Link></li>
            <li onClick={()=>setMenu("Hackathon")} className={menu==="Hackathon"?"active":""}><Link to="/hackathon">Hackathon</Link></li>
            <li onClick={()=>setMenu("Coding")} className={menu==="Coding"?"active":""}><Link to="/coding">Coding</Link></li>
            <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}><Link to="/team">Team</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
