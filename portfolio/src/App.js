import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';

import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {themeContext} from './Context'
import {useContext} from "react";
import Portfolio from './components/Portfolio/Portfolio';




function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    
    style={{background : darkMode ? 'black': '',
    color: darkMode? 'white': ''
  
  }}
    
    >

     
     <NavBar/>
     <Intro />
     <Services/>
     <Experience />
     <Works />
     <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
