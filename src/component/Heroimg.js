import React from 'react'
import "../style/HeroimgStyle.css"
import backgroundimg from "../img/backgroundimage.jpg"
import { Link } from 'react-router-dom'
function Heroimg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={backgroundimg} alt
        ="backgroundimg"></img>
      </div>
      <div className='content'>
        <p>Hi, I'M RAJAN TIWARI.</p>
<h1>React Developer</h1>
<div>
  <Link to="/project" className='btn'>project</Link>
  <Link to="/contact" className='btn  btn-light'>contact</Link>
</div>
      </div>
    </div>
  )
}

export default Heroimg
