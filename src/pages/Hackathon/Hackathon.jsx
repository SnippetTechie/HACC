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
                <li><button className='date'>25 Jan</button>HACK-A-LEAGUE 3.0<a href='https://unstop.com/p/hack-a-league-30-global-academy-of-technology-1346539'><button className="submit">Apply</button></a></li>
                <li><button className='date'>26 Jan</button>Thiran 2025<a href='https://thiran.sece.ac.in'><button className="submit">Apply</button></a></li>
                <li><button className='date'>05 Feb</button>AceHack 4.0<a href='https://acehack.uem.edu.in'><button className="submit">Apply</button></a></li>
                <li><button className='date'>10 Feb</button>Codefest 2025<a href='https://codefest.aitm.edu.in'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Feb</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
