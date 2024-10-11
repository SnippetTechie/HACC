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
                <li><button className='date'>8 Nov</button>Internal hackathon<a href='https://forms.office.com/r/r5Ar4VtLra'><button className="submit">Apply</button></a></li>
                <li><button className='date'>24 Oct</button>Atria hackathon<button className="submit">Apply</button></li>
                <li><button className='date'>8 Nov</button>Internal hackathon<a href='https://forms.office.com/r/r5Ar4VtLra'><button className="submit">Apply</button></a></li>
                <li><button className='date'>24 Oct</button>Atria hackathon<button className="submit">Apply</button></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
