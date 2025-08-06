import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../components/ProjectCard';
import { martinNGina, roboSnip, pape } from "../assets/images";

const Games = () => {
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

  const games = [ 
    {
      title: "Martin and Gina",
      description: "Martin and Gina is a 2D puzzle platformer inspired by Fireboy and Watergirl. Designed as a cooperative or single-player experience, players must control both characters to solve puzzles and navigate through levels together.",
      imageUrl: martinNGina,
      githubLink: "https://github.com/rstrauman/Martin-and-Gina",
      demoLink: "https://rstrauman.github.io/Martin-and-Gina/"
    },
    {
      title: "Roboman",
      description: "Roboman is a fun and challenging Flappy Bird–style arcade game with a twist — it includes three difficulty levels and an exciting boss fight at the end. Players navigate Roboman through obstacles, aiming for high scores while facing increasing challenges. The game features simple controls, pixel art visuals, and escalating intensity to keep players engaged. Built with Unity and deployed as a WebGL game playable in any modern browser.",
      imageUrl: roboSnip,
      githubLink: "https://github.com/rstrauman/unity-games",
      demoLink: "https://rstrauman.github.io/unity-games/Roboman/"
    },
    {
      title: "Paper Mario",
      description: "Paper Mario is a 2.5D platformer inspired by Paper Mario 64. Built in Unity as a 3D project, it features classic side-scrolling gameplay with simple turn-based battles against Goombas. Explore a colorful world, jump through handcrafted environments, and take on light RPG-style encounters in a nostalgic throwback to Mario's papery adventures.",
      imageUrl: pape,
      githubLink: "https://github.com/rstrauman/unity-games",
      demoLink: "https://rstrauman.github.io/unity-games/papermario/"
    }
  ];

  return (
    <>
      <div onClick={handleRipple}
      className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl text-center mx-auto flex flex-col items-center min-h-[400px] w-full max-w-[940px]" data-aos="fade-up">
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
          Games
        </h1>
        <div className="h-4" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 w-full max-w-[880px]">
          {games.map((game) => (
            <ProjectCard key={game.title} project={game} />
          ))}
        </div>
        <div className="h-6" />
      </div>
    </>
  );
};

export default Games;
