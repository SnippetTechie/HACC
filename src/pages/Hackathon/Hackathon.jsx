import React from 'react'
import './Hackathon.css'
import assets from '../../assets/assets'


const Hackathon = () => {
  return (
    <>
    <div className='header'>
        <div className="logo">
            <h1>HACC</h1>
            <p>Coding season is coming! Prepare for the ultimate Hackathon!</p>
        </div>
        <div className="image">
            <img src={assets.comp} alt="" />
        </div>
    </div>
    <div className="events">
        <div className="hackathons">
            <h1>Upcoming Hackathons</h1>
            <ul>
                <li><button className='date'>22 Dec</button>HACK-AI-THON 2024<a href='https://vision.hack2skill.com/event/hackaithon2024/?utm_source=REVA%20University%20&utm_medium=outreach'><button className="submit">Apply</button></a></li>
                <li><button className='date'>24 Jan</button>KI HACKS 2.0<a href='https://k-hacks.kurukshetraceg.org.in/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Feb</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
