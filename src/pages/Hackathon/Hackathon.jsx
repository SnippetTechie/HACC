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
                <li><button className='date'>15 Oct</button>HACC Hackathon<a href='https://forms.office.com/r/r5Ar4VtLra'><button className="submit">Apply</button></a></li>
                <li><button className='date'>15 Oct</button>Shridevi Hackathon<a href='https://hackathon.shritek.com/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>18 Oct</button>MINDSPARK'24<a href='https://www.mind-spark.org/events/robotica/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>20 Oct</button>Hack Overflow 2.0<a href='https://rns-hackoverflow-2.devfolio.co/'><button className="submit">Apply</button></a></li>
                <li><button className='date'>21 Oct</button>Mercuria Hackathon<a href='https://hackathon.mercuria.com/india-2024/'><button className="submit">Apply</button></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Hackathon
