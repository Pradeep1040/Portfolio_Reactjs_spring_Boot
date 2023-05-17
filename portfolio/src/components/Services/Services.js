import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import {motion} from 'framer-motion'
import {useContext} from "react";
import {themeContext} from "../../Context";



const Services = () => {

  const transition = {duration: 1, type: 'spring'}
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>

      {/* left side */}

      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>lorem this is  lore text  again the awesome tag to build the application hrer
          <br />
          this is the formate of lorem printing text formate.

        </span>

        <a href={Resume} download>

          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl"></div>
      </div>

      {/* ritht side */}

      <div className="cards">

        <motion.div className="cardim"
        
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        
        >
          <Card

            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma,video editor, Ms excel"}

          />
        </motion.div>

        {/* 
 second card */}


        <motion.div className="cardim2"
        
        initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        
        >
          <Card

            emoji={Glasses}
            heading={'Developer'}
            detail={"Html,css, javascript,React js"}

          />
        </motion.div>

        {/* third card */}

        <motion.div className="cardim3"
        
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        
        
        
        
        >
          <Card

            emoji={Humble}
            heading={"UI/UX"}
            detail={"lorem  ispum dummy text are usally  in the section where "}

          />
        </motion.div>

  <div className="blur s-blur2"></div>

      </div>
    </div>
  )
}

export default Services
