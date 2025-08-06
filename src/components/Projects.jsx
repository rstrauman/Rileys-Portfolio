import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { gooberEats, taskManager, calc } from "../assets/images";

const Projects = () => {

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

  const projects = [
  {
    title: "Task Manager App",
    description: "A simple and responsive task manager built with vanilla JavaScript, HTML, and CSS. Users can add, complete, and remove tasks, with data stored in localStorage for persistence between sessions.",
    imageUrl: taskManager ,
    githubLink: "https://github.com/rstrauman/task-manager",
    demoLink: "https://rstrauman.github.io/task-manager/",
  },
  {
    title: "Goober Eats",
    description: "A front-end simulation of a food delivery app inspired by Uber Eats. Built with vanilla JavaScript, it features a menu system, shopping cart functionality, and dynamic item totals. Menu data is fetched from a local JSON file, mimicking a basic backend interaction.",
    imageUrl: calc,
    githubLink: "https://github.com/rstrauman/goober-eats",
    demoLink: "https://rstrauman.github.io/goober-eats/"
  },
  {
    title: "Calculator",
    description: "Just a simple Calculator inspired by the Apple desgin using HTML CSS and JS.",
    imageUrl: gooberEats ,
    githubLink: "https://github.com/rstrauman/calculator",
    demoLink: "https://rstrauman.github.io/calculator/"
  },
  // more projects...
];


  return (
    <>
      <div onClick={handleRipple} 
      id="projects" className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl text-center mx-auto flex flex-col items-center min-h-[400px] w-full max-w-[940px] " data-aos="fade-up">
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
            Projects
        </h1>

      <div className="h-4" />

      

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 w-full max-w-[880px] ">

  {projects.map((project) => (
    
    <ProjectCard key={project.title} project={project} />
  ))}
</div>
  <div className="h-6" />
  </div>
</>
  )
}

export default Projects
