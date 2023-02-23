import React from 'react'
import "../style/workcard.css"

import Workcard from './workcard'
import workCardData from "../asset/workCardData"

function Work() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>projects</h1>
        <div className='project-container'>

{workCardData.map((value,index)=>{
    return ( <Workcard  key={index}
        imgsrc={value.imgsrc}
        title={value.title}
        text={value.text}
    />)

})}
        </div>    
        </div>
  )
}

export default Work
