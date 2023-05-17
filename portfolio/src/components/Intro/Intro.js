import React from 'react'
import "./Intro.css"
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'

import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {useContext} from "react";
import {themeContext} from "../../Context";
import {motion} from 'framer-motion'


const transition = {duration: 2, type: 'spring'}



const Intro = () => {
  return (
    <div className="intro">
     
      <div className="i-left">

      <div className="i-name">
        <span>Hey, I Am </span>
        <span>Pradeep</span>
        <span>
            Frontend Developer with high level of experince in 
            web designing and development,productivity the 
            quality work
        </span>

      </div>

      <button className="button i-button">Hire me</button>

     <div className="i-icons">
     
     <a href="https://github.com/Pradeep1040">
     <img src={Github} alt=""/>
     </a>
     
     <a href="https://www.linkedin.com/in/pradeep-9a4716216/">
     <img src={LinkedIn} alt=""/>
     </a>
     
     <img src={Instagram} alt=""/>
    

     </div>


      </div>
      <div className="i-right">

      <img src={Vector1} alt=""/>
     <img src={Vector2} alt=""/>
     <img src={boy} alt=""/> 
     <motion.img 
     
     initial={{left: '-36%'}}
     whileInView={{left: '-24%'}}
     transition={transition}
    
     
     src={glassesimoji} alt=""/> 
      

     <motion.div 
     
     initial={{top: '-4%',left: '74%'}}
     whileInView={{left: '68%'}}
     transition={transition}
     className="crowim floating-div">
        <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>

     </motion.div>

     <motion.div 
     
     initial={{left:'74%',bottom: '-4%'}}
     whileInView={{left: '0rem'}}
     transition={transition}
     
     className="thumbupim floating-div">
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
     </motion.div>
         

         {/* blue div */}

         <div className="blur">

         </div>

         <div className="blur blurblue">

         </div>



      </div>

      
    </div>
  )
}

export default Intro
