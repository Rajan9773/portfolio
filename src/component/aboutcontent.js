import React, { useState } from 'react'

import "../style/aboutcontent.css"
import aboutimg from "../img/rajan photo1.jpg"



function Aboutcontent() {

const [show,update]=useState(true)

const [edu,newedu]=useState(false)
const [initial,updateResume]=useState(false)
 const skills=()=>{
   if (!show ){
    update(true)
   
   }
    
 else{
  
  update(false)
 
 }  
 newedu(false)
 updateResume(false)
 }

 const education=()=>{
  if (!edu ){
   newedu(true)
  
  }
   
else{
 newedu(false)
 
} 
update(false)
updateResume(false) 
}
const resume=()=>{
  if (!initial ){
    updateResume(true)
   
   }
    
 else{
  updateResume(false)
  
 }
 newedu(false)
 update(false) 
}





   
  return (<div className=' container'>
<div className='row'>
    <div className='about-col-1'>
<img src={aboutimg} alt="true"></img>
    </div>
<div className='about-col-2'>
    <h1 className='sub-title'>About Me</h1>
    <p>"I am a front End Developer I can provide clean code ad pixel perfect design i also make the website more interactive
with web animation i can provide clean code and pixel perfect deesign .i also make the website more interactive with web 
animation a responsive design makes your websites accessible to all user regardless of their devices"</p>

<div className='tab-titles'>
    <p className=   {show ?"tab-links active-link" :"tab-links"}  onClick={skills} >Skills</p>
    <p className= {edu ?"tab-links active-link" :"tab-links"}   onClick={education}>Education</p>
    <p className= {initial ?"tab-links active-link" :"tab-links"}   onClick={resume}>Resume</p>
   
</div>




<div className={show? "tab-contents active-tab": "tab-contents"}>
  <ul>
    <li><span>UI/UX</span><br/>Designing Web/App interface</li>
    <li><span>FrontEnd </span><br/>Web Development</li>
    <li><span>BackEnd </span><br/>Web Development</li>
    <li><span>Printed Circuit Board </span><br/>Designing</li>
   
    <li> <span>Embedded system</span></li>
    </ul> 
</div>


<div className={edu? "tab-contents active-tab": "tab-contents"}>
   <ul>

    <li><span>2019-2023 </span><br/> B-TECH( Electronics And Communication) <br/>from Bundelkhand University</li>
    <li><span>2016-2018 </span><br/> 12th from MGSSPMIC<br/>Aggregates:73%</li>
    <li><span>2014-2016 </span><br/> 10th from Leelawati Public School<br/>Aggregates:78%</li>
   
    
    </ul> 
</div>

<div className="">
  <button className={initial ?"btn btn-resume":"disactive-btn"}><a href='RAJAN TNP RESUME.Pdf' download="RAJAN TNP RESUME.Pdf" >
 
    Download</a></button>
</div>


</div>
</div>

  </div>
   
  )
}

export default Aboutcontent
