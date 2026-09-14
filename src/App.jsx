import React from 'react';
import './App.css';

// Assets
import { bgImage } from './assets/images';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Games from './components/Games';
import TechJourney from './components/TechJourney';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import FunFacts from './components/FunFacts';

const App = () => {
  return (
    <>
    
  <ParallaxBackground bgImage={bgImage}>
    <Navbar />
    <div id="home" className="h-16 sm:h-40 lg:h-72" />
    <Header />
  </ParallaxBackground>
    <div
  className="min-h-screen flex flex-col"
  style={{
    background:
      `linear-gradient(to bottom, #000000, #1e1b4b 40%, #1e3a8a 70%, #35529e 100%)`
  }}
>
    <div className="h-36" />
    <Techstack />
    <div className="h-36" />
    <About />
    <div className="h-36" />
    <Projects />
    <div className="h-36" />
    <Games />
    <div className="h-36" />
    <TechJourney />
    <div className="h-36" />
    <FunFacts />
    <div className="h-36" />
    <Contact />
    <div className="h-[200px]" />
    </div>
</>

  );
};


export default App;




