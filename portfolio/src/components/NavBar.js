import React from 'react'
import './NavBar.css';
import Toggle from './Toggle/Toggle';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <div className="n-wrapper">
       <div className="n-left"> 
       
       <div className="n-name">
        Pradeep

       </div>

       <Toggle/>

       </div>
       
       <div className="n-right"> 


       <div className="n-list">
        <ul className="styletype">
          
     <Link spy={true} to='NavBar' smooth={true} activeClass="activeClass">
 

     <li>Home</li>

     </Link>

     <Link spy={true} to='Services' smooth={true} >
          <li>Services</li>
          </Link>

          <Link spy={true} to='Experience' smooth={true} >
          <li>Experience</li>
          </Link>
          <Link spy={true} to='Portfolio' smooth={true} >
          <li>Portfolio</li>
          </Link>

          <Link spy={true} to='Testimonial' smooth={true} >
          <li>Testimonials</li> 
          </Link>

        </ul>

       </div>


       <Link spy={true} to='Contact' smooth={true}className="button n-button" >Contact</Link>
       {/* <button className="button n-button"> Contact</button> */}

       </div>
      
    </div>
  )
}
