import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import { gooberEats, taskManager, calc, workoutTracker, onlineStore, linkedInButBetter } from "../assets/images";

const Projects = () => {

  useEffect(() => {
   AOS.init({ duration: 1000 });
  }, []);

  const projects = [
  {
    title: "Workout Tracker",
    description: "A full-stack fitness tracking app built with React and Firebase (Auth, Firestore, Storage). Features real workout logging with a live timer, a saved-routines builder, and a dashboard with streaks and weekly activity charts, all backed by per-user Firestore security rules.",
    imageUrl: workoutTracker,
    githubLink: "https://github.com/rstrauman/workout-tracker",
  },
  {
    title: "Veltra Online Store",
    description: "A React storefront pulling live product data from the Fake Store API. Includes product browsing and detail pages, a persistent cart with quantity controls and totals, and an order summary, backed by React Router and local storage.",
    imageUrl: onlineStore,
    githubLink: "https://github.com/rstrauman/online-store",
    demoLink: "https://rstrauman.github.io/online-store/"
  },
  {
    title: "Goober Eats",
    description: "A front-end simulation of a food delivery app inspired by Uber Eats. Built with vanilla JavaScript, it features a menu system, shopping cart functionality, and dynamic item totals. Menu data is fetched from a local JSON file, mimicking a basic backend interaction.",
    imageUrl: gooberEats,
    githubLink: "https://github.com/rstrauman/goober-eats",
    demoLink: "https://rstrauman.github.io/goober-eats/"
  },
  {
    title: "LinkedIn But Better",
    description: "A two-page mock professional social network built with vanilla JavaScript. Features a localStorage-based login system, a LinkedIn-style 3-column feed populated via the Random User API, and a modal-based post creation flow.",
    imageUrl: linkedInButBetter,
    githubLink: "https://github.com/rstrauman/LinkedInButBetter",
    demoLink: "https://rstrauman.github.io/LinkedInButBetter/"
  },
  {
    title: "Calculator",
    description: "Just a simple Calculator inspired by the Apple design using HTML CSS and JS.",
    imageUrl: calc,
    githubLink: "https://github.com/rstrauman/calculator",
    demoLink: "https://rstrauman.github.io/calculator/"
  },
  {
    title: "Task Manager App",
    description: "A simple and responsive task manager built with vanilla JavaScript, HTML, and CSS. Users can add, complete, and remove tasks, with data stored in localStorage for persistence between sessions.",
    imageUrl: taskManager ,
    githubLink: "https://github.com/rstrauman/task-manager",
    demoLink: "https://rstrauman.github.io/task-manager/",
  },
  // more projects...
];

  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame;
    const speed = 0.6;
    const step = () => {
      if (!isPaused.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    isPaused.current = true;
    el.scrollBy({ left: direction * 460, behavior: 'smooth' });
    setTimeout(() => { isPaused.current = false; }, 700);
  };

  return (
    <>
      {/* Title Box */}
      <div id="projects" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 px-6 py-8 rounded-xl w-full max-w-[420px] text-center mx-auto min-h-[75px] flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap" style={{ color: "var(--color-primary-500)" }}>
          Projects
        </h1>
      </div>

      <div className="h-10" />

      <div className="w-full max-w-[1300px] mx-auto">
        <div
          ref={scrollRef}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          className="flex gap-6 overflow-x-auto scrollbar-hide w-full px-6 sm:px-10"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative shrink-0 w-[320px] sm:w-[420px] md:w-[460px] h-[400px] sm:h-[460px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Neutral darkening scrim so text stays legible over any screenshot */}
              <div className="absolute inset-0 bg-black/35 pointer-events-none" />

              {/* Bottom gradient for extra title/links legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Top-right description panel */}
              <div className="absolute top-4 right-4 w-[67%] bg-black/45 backdrop-blur-md border border-white/10 rounded-xl p-4 text-left">
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom-left title + links */}
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow-md mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm font-semibold hover:underline"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 text-sm font-semibold hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-4" />

        {/* Nav arrows */}
        <div className="flex gap-3 justify-end pr-6 sm:pr-10">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll projects left"
            className="glass w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Scroll projects right"
            className="glass w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </>
  )
}

export default Projects
