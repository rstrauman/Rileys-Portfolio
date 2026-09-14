import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react'
import { cpp, godot, greenfoot, scratch, unity, js, mitt } from "../assets/images";


const techMilestones = [
  {
    year: "Intro",
    text: "My very first exposure to programming, like many was through Scratch in middle school. It sparked my interest in tech with game development.",
    image:  scratch,
    isIntro: true
  },
  { year: "2019", image: greenfoot, text: "In my grade 10 year of highschool i began learning the basics of programming with C++. For my end of the year project I designed a NBA player guesser game, similar to Akinator, based of content clues." },
  { year: "2020", image: cpp, text: "In my grade 11 year we began building on our basic skills that we learned in grade 10, and expanded to game development with Greenfoot and Java. We designed a few projects throughout the year, one of which was a frogger style game, and I decided to use Mario Kart Characters" },
  { year: "2021", image: unity, text: "In my final year of High School we took our game development to another level. This time as we were now stuck at home we expanded to Unity, where we created a few games, including all of the games previously mentioned on my Portfolio." },
  { year: "2022-2024", image: godot, text: "Out of High school and into the working world. Life got very busy, and this really took a toll on my Development journey, I continued making some game development projects in Unity that never really got off the ground, as well as began learning Godot and GDscript, similarly never really truly getting off the ground." },
  { year: "2025" , image: js, text: "After deciding to part ways with my job, I began to re-find my passion for programming. I started with self learning Web-Development, with HTML, CSS and JavaScript. To begin learning I designed my Task Manager Site, Calculator, and the Mock Uber Eats Website, and am now expanding out and learning more tools including React, to continue building more intriguing and professional projects."},
  { year: "2025-2026" , image: mitt, text: "In September of 2025 I began school at the Manitoba Institute of Trades and Technology, for Software Development, where I will continue to improve my programming knowledge. We will be learning JavaScript, C#, React, Git and APIs."},
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
         <div onClick={handleRipple} className="relative px-4 sm:px-10 py-16 w-full max-w-[1400px] mx-auto bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl overflow-x-hidden overflow-y-visible" data-aos="fade-up">
  <div className="text-center mb-16 lg:mb-32 px-4">

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
    <h2 className="text-4xl font-bold mb-2"
    style={{ color: "var(--color-primary-500)" }}>My Tech Journey</h2>
    <p className="text-white max-w-xl mx-auto">
      A look at the key milestones that shaped my development journey.
    </p>
  </div>

  {/* Desktop / large screens: alternating horizontal timeline */}
  <div className="hidden lg:block relative px-10">
      <div className="h-[480px]" />

    <div className="relative flex gap-4 justify-between w-full max-w-[1250px] mx-auto overflow-visible">

      {/* Center timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 border-1 border-white z-0 transform -translate-y-1/2" />


          {techMilestones.map((item, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-[160px] shrink-0"
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
                  className={`absolute w-[200px] bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 p-4 rounded-lg shadow-md ${
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
        <div className="h-[500px]" />
      </div>

      {/* Mobile / tablet: stacked vertical timeline */}
      <div className="lg:hidden relative max-w-md mx-auto">
        <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-gray-400" />
        <div className="flex flex-col gap-8">
          {techMilestones.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex gap-4 pl-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="z-10 w-4 h-4 mt-1 rounded-full bg-sky-600 border-2 border-white shrink-0" />
              <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.year}
                      className="w-8 h-8 object-contain shrink-0"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-white">
                    {item.year}
                  </h3>
                </div>
                <p className="text-sm text-gray-300">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default TechTimeline;
