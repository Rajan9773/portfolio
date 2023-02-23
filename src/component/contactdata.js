import React from 'react'
import { Link } from 'react-router-dom'
import "../style/contactdata.css"





function ContactData() {
  
  return (
    <div className='form'>
        <form  >
        <label>Your Name</label>
        <input type="text" name='name' required="true" ></input>
        <label>Email</label>
        <input type="email" name='email' required="true" ></input> 
      <label>Subject</label>
        <input type="text"  name='subject'  required="true"  ></input> 
        <label>Message</label>
       <textarea rows={6} placeholder="Type your message here " name='message'    required="true" ></textarea>
       <button className='btn'  > SUBMIT
       </button>
       </form>
    </div>
  )
}

export default ContactData
