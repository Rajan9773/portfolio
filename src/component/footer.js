import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram ,FaTwitter} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../style/Footer.css"
const footer = () => {
 const date=new Date()
 const year=date.getFullYear()
  return (
    <div className='Footer'>
      <div className='left'>
        <div className='location'>
          <FaHome size={20} style={{ color: "#fff" }} />
          <div>
            <p>112 Bisauli Kripalpur Bhadohi</p>
            <p>UttarPradesh</p>
          </div>
        </div>


        <div className='Phone'>
          <FaPhone size={20} style={{ color: "#fff" }} />
          <div>
            <h4> contact no : 9 7 7 3 9 6 4 9 8 6 </h4>
          </div>
        </div>


        <div className='mail'>
          < FaMailBulk size={20} style={{ color: "#fff" }} />
          <div>
            <h4>rajantiwari3333@ gmail.com</h4>
          </div>
        </div>


      </div>




      


      <div className='Right'>
<div className='icon'>



<div className='FaTwitter'>

<Link to="https://www.twitter.com/" > < FaTwitter size={40} style={{ color: "#fff" }} /></Link>

</div>


      <div className='facebook'>

      <Link to="https://www.facebook.com/" > < FaFacebook size={40} style={{ color: "#fff" }} /></Link>


          </div>

          <div className='instagram'>

          <Link to="https://www.instagram.com/" > < FaInstagram  size={40} style={{ color: "#fff" }} /></Link>

         
          </div>
          <div className='linkedin'>

          <Link to="https://www.linkedin.com/" > < FaLinkedin size={40} style={{ color: "#fff" }} /></Link>
         
          </div>


      </div>

<div className=''>
  <p>Copyright © {year} by Refsnes Data. All Rights Reserved.</p>
</div>

      </div>
    </div>
  )
}

export default footer
