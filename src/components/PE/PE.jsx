import React from 'react'
import assets from '../../assets/assets'

const PE = () => {
  return (
    <div>
      <div className="line1">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Post-Event</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Chair</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Post-Event</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Post-Event</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        </div>
        <div className="line2">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Post-Event</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.profile_icon} alt="" />
          <p>Post-Event</p>
          <ul>
            <li><a href=""><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default PE
