import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { aboutImage } from "../assets/images";


const About = () => {

    
useEffect(() => {
 AOS.init({ duration: 1000 });
}, []);

const [ripples, setRipples] = useState([]);
  const [rippleId, setRippleId] = useState(0);

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        setRipples((prev) => [
          ...prev,
          {
            id: rippleId + i,
            x,
            y,
          },
        ]);
      }, i * 100);
    }

    setRippleId((id) => id + 2);

    // Clean up ripples after animation duration
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id >= rippleId + 2));
    }, 1000);
  };

  return (
<>  
    <div onClick={handleRipple}
    id="about" className= "scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl w-full max-w-[1200px] text-center mx-auto flex flex-col items-center min-h-[400px]" data-aos="fade-up">
        {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute pointer-events-none animate-ripple bg-white/30 rounded-full"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
        
        <div className="h-4" />
        <h1
            className="text-4xl font-bold text-outline-white mt-8 mb-12" data-aos="fade-left"
            style={{ color: "var(--color-primary-500)" }}
        >
            About Me!
        </h1>

        <div className="h-4" />

        <div className="flex flex-row items-start gap-10 text-left w-full max-w-5xl">

        <p className="text-white text-base leading-relaxed flex-1 pr-4" data-aos="fade-right">
  Hey, I’m Riley — an <span className="text-accent font-semibold">aspiring full-stack developer</span> with a growing passion for clean, user-friendly digital experiences.
My coding journey started back in high school, where I built a chaotic Mario Kart x Frogger mashup using Java and Greenfoot. I also picked up the basics of C++ and C#, which laid the groundwork for everything I do now.

  <br /><br />

  These days, I'm diving deep into <span className="text-accent font-semibold">JavaScript, React, and backend development</span>, building projects that blend creativity and functionality.

  <br /><br />

  I bring <span className="font-semibold">discipline, adaptability, and a problem-solving mindset</span> to every challenge — whether I’m coding, collaborating, or helping others grow. While I love crafting great UI and UX, I’m just as excited by the complexity of full-stack development.
</p>

            <img
                src={aboutImage}
                alt="Me with Glasses"
                className="w-48 h-auto rounded-xl object-cover border border-white/20" data-aos="fade-up"
            />
        </div>
    </div>
</>
  )
}

export default About
