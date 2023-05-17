import React, { useContext } from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'



const Footer = () => {

    

  return (

 

    <div className="footer">
      <img src={Wave} alt="" className="viva" />
     
     <div className="f-content">
      <span>Pradeepkrisna307@gmail.com</span>
      <div className="f-icons">

        <Insta className="insta"/>
        <Facebook className="facebook"/>
        
        <Github className="github"/>

      </div>
   
     </div>

    </div>
  )
}

export default Footer
