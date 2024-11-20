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
                <li><button className='date'>24 Nov</button>Py Jam<a href='https://forms.gle/WKGa23TSnuPxQHUX7'><button className="submit">Apply</button></a></li>
                <li><button className='date'>25 Nov</button>Unfold 2024<a href='https://bit.ly/Unfold24'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Feb</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
