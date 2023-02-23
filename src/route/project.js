import React from 'react'

import Navbar from "../component/navbar"
import Footer from "../component/footer"
import Heroimg2 from '../component/Heroimg2'
import Work from "../component/work"
function Project() {
  return (
    <div>
      <Navbar/>
    <Heroimg2 heading="PROJECT." text="Some of my most recent work"></Heroimg2>
    <Work></Work>
    <Footer></Footer>
    </div>
  
  )
}

export default Project
