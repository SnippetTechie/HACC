import React from 'react'
import assets from '../../assets/assets'

const Program = () => {
  return (
    <div>
      <div className="line1">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.lohith} alt="" />
          <p>P Lohith</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/lohith-p-715899291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/Lohithp2005
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Chair</h1>
          <img src={assets.kashyap} alt="" />
          <p>B Sai Kashyap</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/bsaikashyap"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/Kashyap1854
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.vivith} alt="" />
          <p>Vivith Rajiv Kanchi</p>
          <ul>
            <li><a href="https://in.linkedin.com/in/vivith-rajiv-kanchi-225601285"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://github.com/VivithRK
"><img src={assets.github} alt="Github" /></a></li>
          </ul>
        </div>
        </div>
        <div className="line2">
        <div className="member">
          <h1>Member</h1>
          <img src={assets.sharlet} alt="" />
          <p>Sharlet Alex</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/sharlet-alex-267456296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        <div className="member">
          <h1>Member</h1>
          <img src={assets.venkatesh} alt="" />
          <p>Venkatesh S</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/venky2211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={assets.linkedIn} alt="" /></a></li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Program
