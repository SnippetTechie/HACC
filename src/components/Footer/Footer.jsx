import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer">
    <div className='footer-content'>
      <div className="footer-content-left">
        <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>HACC</h1>
        </div>
        <p>Connect, Learn, Grow!</p>
      </div>
    <div className="footer-content-center">
        <h1>Socials</h1>
        <ul>
            <li><a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ=="><img src={assets.insta} alt="" /></a></li>
            <li><a href="https://chat.whatsapp.com/FRXKH7xvePHHRZSkVyMA82"><img src={assets.whatsapp} alt="" /></a></li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h1>Contacts</h1>
        <ul>
            <li>Student coordinator</li>
            <li>Student coordinator</li>
            <li>Student coordinator</li>
        </ul>
    </div>
    </div>
    <hr />
    <div className="cr">
        <p>2024 HACC. ALL RIGHTS RESERVED</p>
    </div>
    </div>
  )
}

export default Footer
