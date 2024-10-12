import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({menu,setMenu}) => {

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>HACC</h1>
      </div>
      <input type="checkbox" id="check" />
      <div className="btn_one">
        <label htmlFor="check" >
        <img src={assets.braces} alt="" />
        </label>
      </div>
      <div className="navs">
        <ul>
            <li><label htmlFor="check" >&#123;</label></li>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><Link to="/">Home</Link></li>
            <li onClick={()=>setMenu("Hackathon")} className={menu==="Hackathon"?"active":""}><Link to="/hackathon">Hackathon</Link></li>
            <li onClick={()=>setMenu("Coding")} className={menu==="Coding"?"active":""}><Link to="/coding">Coding</Link></li>
            <li onClick={()=>setMenu("Team")} className={menu==="Team"?"active":""}><Link to="/team">Team</Link></li>
            <li><label htmlFor="check" >&#125;</label></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
