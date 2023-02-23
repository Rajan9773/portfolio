import React from 'react'
import Navbar from "../component/navbar"
import Footer from "../component/footer"
import Heroimg2 from '../component/Heroimg2'
import AboutContent from '../component/aboutcontent'
function About() {
  return (
    <div>
    
    
    <Navbar/>
    <Heroimg2 heading="ABOUT." text="Im a friendly Front-End Developer. "></Heroimg2>
    <about></about>
    <AboutContent></AboutContent>
    <Footer></Footer>
    </div>
  )
}

export default About
