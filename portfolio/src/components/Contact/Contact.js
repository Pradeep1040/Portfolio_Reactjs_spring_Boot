import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
         
         <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
         <div className="blur s-blur1"></div>

         </div>

        </div>
   
       
      
       <div className="c-right">
        <form>
        <input type="text" name="user_name" className="user" placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
        
       <textarea name="message" className="user" placeholder="Message"/>
       
         
          <input type="submit" className="button" />
    </form>
    </div>
    



    </div>
  )
}

export default Contact
