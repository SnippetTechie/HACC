import React from 'react';
import './CardsSection.css';
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CardsSection = () => {
  const navigate=useNavigate();

  return (
    <section id="cards" className="cards">
      <div onClick={()=>navigate("/hackathon")} className="card">
      <p className="card-title">Hackathons</p>
        <img src={assets.Hackathon} alt="Hackathons illustration" />
      </div>
      <div className="card">
      <p onClick={()=>navigate("/coding")} className="card-title">Coding Camp</p>
        <img src={assets.Coding} alt="Coding Camp illustration" />
      </div>
      <div className="card">
      <p className="card-title">Coming Soon</p>
        <img src={assets.comingsoon} alt="Coming Soon illustration" />
      </div>
    </section>
  ); 
};

export default CardsSection;
