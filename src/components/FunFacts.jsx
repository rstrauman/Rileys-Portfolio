import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';

const FunFacts = () => {

    
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
    <div onClick={handleRipple} className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl w-full max-w-[800px] text-center mx-auto items-center min-h-[400px]" data-aos="fade-up">
  <div className="h-4" />
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
  <h1
    className="text-4xl font-bold text-outline-white mt-8 mb-4"
    style={{ color: "var(--color-primary-500)" }}
  >
    Fun Facts
  </h1>

  <p className="text-white font-bold mb-6">Just a few fun facts about me!</p>

    <div className="h-4" />

  {/* Wrapper with proper padding */}
  <div className="text-left space-y-3 px-6 sm:px-10 md:px-16 w-full max-w-[600px] mx-auto">
    <p className="text-white text-base leading-relaxed">• I love going to the gym — it's like a second home.</p>
    <p className="text-white text-base leading-relaxed">• I’m the oldest of 6 siblings.</p>
    <p className="text-white text-base leading-relaxed">• I'm a huge NBA fan and have recorded a basketball podcast with my cousin.</p>
    <p className="text-white text-base leading-relaxed">• I played football growing up.</p>
    <p className="text-white text-base leading-relaxed">• I'm a certified personal trainer.</p>
    <p className="text-white text-base leading-relaxed">• I'm a huge anime fan and love <em>One Piece</em>.</p>
  </div>
</div>



</>
  )
}

export default FunFacts
