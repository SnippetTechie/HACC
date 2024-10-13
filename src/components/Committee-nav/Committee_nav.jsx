import React from 'react'
import './Committee_nav.css'

const Committee_nav = ({Committee,SetCommittee}) => {
  return (
    <div className="committee-navs">
        <ul>
            <li onClick={()=>SetCommittee("Technical")} className={Committee=="Technical"?"active":null}>Technical</li>
            <li onClick={()=>SetCommittee("Program")} className={Committee=="Program"?"active":null}>Program</li>
            <li onClick={()=>SetCommittee("PRM")} className={Committee=="PRM"?"active":null}>Marketing</li>
            <li onClick={()=>SetCommittee("PE")} className={Committee=="PE"?"active":null}>PR and Post-Events</li>
        </ul>
      </div>
  )
}

export default Committee_nav
