import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react'
import { cpp, godot, greenfoot, scratch, unity, js, mitt } from "../assets/images";
import AOS from 'react'


const techMilestones = [
  {
    year: "Intro",
    text: "My very first exposure to programming, like many was through Scratch in middle school. It sparked my interest in tech with game development.",
    image:  scratch,
    isIntro: true
  },
  { year: "2019", image: greenfoot, text: "In my grade 10 year of highschool i began learning the basics of programming with C++. For my end of the year project I designed a NBA player guesser game, similar to Akinator, based of content clues." },
  { year: "2020", image: cpp, text: "In my grade 11 year we began building on our basic skills that we learned in grade 10, and expaned to game development with Greenfoot and Java. We designed a few projects throughout the year, one of which was a frogger style game, and I decided to use Mario Kart Characters" },
  { year: "2021", image: unity, text: "In my final year of High School we took our game development to another level. This time as we were now stuck at home we expanded to Unity, where we created a few games, including all of the games previously mentioned on my Portfolio." },
  { year: "2022-2024", image: godot, text: "Out of High school and into the working world. Life got very busy, and this really took a toll on my Development journey, I continued making some game development projects in Unity that never really got off the ground, as well as began learning Godot and GDscript, similarly never really truly getting off the ground." },
  { year: "2025" , image: js, text: "After deciding to part ways my my job, I began to re-find my passion for programming. Where I started with self learning Web-Development, with HTML, CSS and JavaScript. To begin learning I designed my Task Manager Site, Calcualtor, and the Mock Uber Eats Website, and am now expanding out and learning of more tools including React, to continue building more intruiging and professional projects."},
  { year: "2025-2026" , image: mitt, text: "In September of 2025 I will begin school at the Manitoba Institue of Trades and Technology, for Software Development, where I will continue to improve my programming knoweldge. We will be learning JavaScript, C#, React, Git and APIs."},
];


const TechTimeline = () => {

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
         <div onClick={handleRipple} className="relative px-4 sm:px-10 min-h-[760px] min-w-[1600px] mx-auto bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 overflow-visible" data-aos="fade-up">
  <div className="text-center mb-32 px-4">
    
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
    <h2 className="text-4xl font-bold mb-2 text-outline-white"
    style={{ color: "var(--color-primary-500)" }}>My Tech Journey</h2>
    <p className="text-white max-w-xl mx-auto">
      A look at the key milestones that shaped my development journey.
    </p>
  </div>

  <div className="relative px-10 overflow-visible min-h-[800px]">
      <div className="h-[380px]" />

    <div className="relative flex gap-16 justify-start w-[1400px] mx-auto overflow-visible">
      
      {/* Center timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 border-1 border-white z-0 transform -translate-y-1/2" />


          {techMilestones.map((item, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-[200px]"
              >
                {/* Dot */}
                <div className="z-10 w-4 h-4 rounded-full bg-sky-600 border-2 border-white" />

                {/* Vertical Line */}
{isTop ? (
  <div className="absolute bottom-1/2 w-[2px] h-[50px] bg-gray-400 z-0" />
) : (
  <div className="absolute top-1/2 w-[2px] h-[50px] bg-gray-400 z-0" />
)}

                {/* Card */}
                <motion.div
                  className={`absolute w-[240px] bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 p-4 rounded-lg shadow-md ${
                    isTop ? "bottom-[calc(100%+60px)]" : "top-[calc(100%+60px)]"
                  }`}
                  initial={{ opacity: 0, y: isTop ? -40 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold text-center text-white">
                        {item.year}
                    </h3>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.year}
                      className="w-10 h-10 object-contain mx-auto mb-2"
                    />
                  )}
                  
                  <p className="text-sm text-gray-300 text-center">
                    {item.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default TechTimeline;