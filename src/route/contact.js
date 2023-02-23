import React from 'react'

import Navbar from "../component/navbar"
import Footer from "../component/footer"
import Heroimg2 from '../component/Heroimg2'
import Contactdata from "../component/contactdata"
function Contact() {
  return (
    <div>
     <Navbar/>
    <Heroimg2 heading="CONTACT." text="Lets Have a Chat. "></Heroimg2>
    <Contactdata/>
    <Footer></Footer>
    </div>
  )
}

export default Contact
