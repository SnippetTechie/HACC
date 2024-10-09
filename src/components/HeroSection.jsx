import React from 'react';
import './HeroSection.css';
import assets from '../assets/assets'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hackathon<br />N Coding</h1>
        <p>
          Tech doesn’t have to follow a different language. We believe it should be understood by all.<br />
          With passion to code, we bring great people.
        </p>
        <a href="#cards" className="hero-button">Explore Now &rarr;</a>

        <div className="social-media">
          <span>GET SOCIAL</span><hr></hr>
          <div className="social-icons">
            <ul>
            <li><a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ=="><img src={assets.insta} alt="" /></a></li>
            <li><a href="https://chat.whatsapp.com/FRXKH7xvePHHRZSkVyMA82"><img src={assets.whatsapp} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={assets.header} />
      </div>
    </section>
  );
};

export default HeroSection;
