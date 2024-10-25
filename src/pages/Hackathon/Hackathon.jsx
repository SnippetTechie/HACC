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
                <li><button className='date'>25 Oct</button>Logixtics Hackathon 2.0<a href='https://vision.hack2skill.com/event/uliphackathon?utm_source=hack2skill&utm_medium=homepagehackathon.mercuria.com/india-2024/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Feb</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
