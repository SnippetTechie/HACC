import React from 'react';
import './WelcomeSection.css';
import assets from '../assets/assets'

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <p>
        Welcome to <span className="highlight">HAAC</span>, where creativity meets coding! Join us to build, compete, and collaborate through hackathons and coding challenges that push the limits of innovation.
      </p>
      <div className="features">
        <div className="feature-item">
          <img src={assets.competition} alt="" />
          <p className="feature-title">competition</p>
          <p>Build amazing projects.</p>
        </div>
        <div className="feature-item">
          <img src={assets.mentoring} alt="" />
          <p className="feature-title">mentorship</p>
          <p>Get advice from experts.</p>
        </div>
        <div className="feature-item">
          <img src={assets.community} alt="" />
          <p className="feature-title">community</p>
          <p>Collaborate with other developers.</p>
        </div>
        <div className="feature-item">
          <img src={assets.workshop} alt="" />
          <p className="feature-title">workshops</p>
          <p>Improve your skills.</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
