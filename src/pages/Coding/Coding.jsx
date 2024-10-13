import React from 'react';
import './Coding.css';
import assets from '../../assets/assets';
import RedirectCard from '../../components/RedirectCard/RedirectCard';

const Coding = () => {
  return (
    <>
      <div className="coding-header">
        <div className="coding-banner">
          <img src={assets.codingBanner2} alt="Decorative" className="coding-image-2" />
          <h1>Unleash Your Skills,<br />Dominate the Code</h1>
          <div className="button-group">
            <button className="btn details">Details</button>
            <button className="btn leaderboard">LeaderBoard</button>
          </div>
          <div className="event-info">
            <span className="event-date">15 October 2024</span>
            <a href="#upcoming-contests"><button className="btn register">Register Now</button></a>
          </div>
        </div>
        <img src={assets.codingBanner} alt="Decorative" className="coding-image" />
      </div>

      <div id="upcoming-contests" className="upcoming-contests">
        <h1>
          Upcoming Contests <span>→</span>
        </h1>
        <div className="contest-card">
          <RedirectCard
            title="Hacc-athon-1"
            imageSrc={assets.newbie}
          />
          <RedirectCard
            title="Hacc-athon-2"
            imageSrc={assets.intermediate}
          />
          <RedirectCard
            title="Hacc-athon-3"
            imageSrc={assets.developer}
          />
          <RedirectCard
            title="Code Clash"
            imageSrc={assets.CodeClash}
          />
          <RedirectCard
            title="Quiz"
            imageSrc={assets.Quiz}
          />
        </div>
      </div>
    </>
  );
};

export default Coding;