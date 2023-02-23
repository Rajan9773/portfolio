import React from 'react'
import { NavLink } from 'react-router-dom'

import "../style/workcard.css"

function Workcard(props) {
  return (
    <div className='work-container'>
       
        <div className='project-container'>
            <div className='project-card'>
                <img src={ props.imgsrc} alt="not found" />
                <h2 className='ProjectCardData'>{props.title}</h2>
                <div className='pro-details'>
                  <p>{props.text}</p>
                  <div className='pro-btns'>
                    <NavLink to={"/"} className="btn">view</NavLink>
                    <NavLink to={"/project"} className="btn btn-light">Source</NavLink>
                  </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Workcard
