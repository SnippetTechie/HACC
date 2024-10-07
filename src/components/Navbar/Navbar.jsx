import React, { useState } from 'react'
import './Navbar.css'
import {logo} from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu]=useState("Home");

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>HACC</h1>
      </div>
      <div className="navs">
        <ul>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Hackathon")} className={menu==="Hackathon"?"active":""}>Hackathon</li>
            <li onClick={()=>setMenu("Coding")} className={menu==="Coding"?"active":""}>Coding</li>
            <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
