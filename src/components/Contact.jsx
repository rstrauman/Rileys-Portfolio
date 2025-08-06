import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { github, linkd, x } from "../assets/images";

const Contact = () => {
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
       <div onClick={handleRipple} id="contact" className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl w-full max-w-[600px] text-center mx-auto flex flex-col items-center min-h-[160px]" data-aos="fade-up">
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
            className="text-4xl font-bold text-outline-white mt-8 mb-12"
            style={{ color: "var(--color-primary-500)" }}
        >
            Contact Me
        </h1>
        <div className="h-2" />
        <p className="text-white text-lg mb-6">Have a question or want to work together?</p>
        <div className="h-2" />
        <a href="mailto:riley.s2003@hotmail.com" className="text-black hover:underline transition-transform duration-200 ease-in-out hover:scale-110">
          riley.s2003@hotmail.com
        </a>
        <div className="relative overflow-hidden text-center mx-auto max-w-fit min-h-[25px] flex flex-row justify-center items-center gap-4 px-3 py-2">              
        <a href="https://github.com/rstrauman" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-12 h-12 align-middle transition-transform duration-200 ease-in-out hover:scale-110" />
        </a>
        <a href="https://linkedin.com/in/rileystrauman" target="_blank" rel="noopener noreferrer">
          <img src={linkd} alt="LinkedIn" className="w-12 h-12 align-middle transition-transform duration-200 ease-in-out hover:scale-110" />
        </a>        
        <a href="https://x.com/Riley_Strauman" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X" className="w-12 h-12 align-middle transition-transform duration-200 ease-in-out hover:scale-110" />
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Riley Strauman. All rights reserved.</p>
    </div>
  </>
  )
}

export default Contact
