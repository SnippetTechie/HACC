import React from 'react'
import assets from '../../assets/assets'

const Technical = () => {
  return (
    <div>
      <div className="line1">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Kasa Chanakya</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Chair</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Pritam Dhar</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Rachan Murthy</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        </div>
        <div className="line2">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Satwik M Badigar</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Satyam Gupta</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Technical
