import React from 'react'
import assets from '../../assets/assets'

const Technical = () => {
  return (
    <div>
      <div className="line1">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.chanakya} alt="" />
          <p>Kasa Chanakya</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/kasa-chanakya
"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/chanakya29092004"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Chair</h1>
          <img src={assets.pritam} alt="" />
          <p>Pritam Dhar</p>
          <ul>
            <li><a href="www.linkedin.com/in/pritam-dhar-300b5725b"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href=""><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.rachan} alt="" />
          <p>Rachan Murthy</p>
          <ul>
            <li><a href="www.linkedin.com/in/rachan-murthy-726788256
"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/RachanMurthy
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        </div>
        <div className="line2">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.satwik} alt="" />
          <p>Satwik M Badigar</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/satwik-m-badiger
"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/satwikmbadiger
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.satyam} alt="" />
          <p>Satyam Gupta</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/satyam-gupta-41606a28a
"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/Satyamgupta2365"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Technical
