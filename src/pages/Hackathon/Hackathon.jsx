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
                <li><button className='date'>20 Oct</button>QUANT-A-MAZE<a href='https://www.quantamaze.dev/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Oct</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>21 Oct</button>Mercuria Hackathon<a href='https://hackathon.mercuria.com/india-2024/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>23 Oct</button>Hack Horizons<a href='https://unstop.com/hackathons/hack-horizons-srm-institute-of-science-and-technology-vadapalani-campus-1178290?lb=5YJHv5tY&utm_medium=Share&utm_source=shortUrlhttps://hackathon.mercuria.com/india-2024/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
