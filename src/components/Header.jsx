import React, { useState, useEffect } from "react";
import { github, linkd, x, Headshot } from "../assets/images";
import "../index.css";
import AOS from 'aos';

const WaveEmoji = ({ delay = 2000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? (
    <div className="absolute -top-2 -right-2 opacity-100 transition-opacity duration-500 z-30 text-xl wave">
      👋
    </div>
  ) : null;
};

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
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
    <div
      onClick={handleRipple}
      className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 p-8 rounded-xl max-w-4xl w-full text-center space-y-6 mx-auto min-h-[250px] flex flex-col justify-center shadow-xl cursor-pointer" data-aos="fade-right"
    >
      {/* Ripples */}
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

      {/* Top Row: Name + Headshot */}
      <div className="flex items-center justify-center gap-12 sm:gap-12 px-4 mt-8">
        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl font-bold whitespace-nowrap text-outline-white"
          style={{ color: "var(--color-primary-500)" }}
        >
          Riley Strauman | Developer
        </h1>

        {/* Headshot w/ ring and emoji */}
        <div
          className="relative w-32 h-32 rounded-full ml-4 mt-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* SVG ring */}
          <svg
            className="absolute inset-0 w-full h-full z-10"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#1E3A8A"
              strokeWidth="6"
              opacity="0.4"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="#60A5FA"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 54}
              strokeDashoffset={isHovered ? 0 : 2 * Math.PI * 54}
              style={{
                transition: "stroke-dashoffset 2s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "center",
              }}
            />
          </svg>

          {/* Headshot */}
          <img
            src={Headshot}
            alt="Headshot"
            className="absolute inset-2 rounded-full object-cover w-[112px] h-[112px] z-20"
          />

          {/* Wave Emoji */}
          {isHovered && <WaveEmoji />}
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-xl text-gray-300 px-4 max-w-3xl mx-auto">
        I'm Riley — a front-end developer with a passion for software development,
        clean UI, thoughtful user experiences, and interactive web apps.
      </p>

      {/* Location */}
      <p className="text-2xl text-white text-outline-red">
        📍Winnipeg, Manitoba, Canada
      </p>
    </div>
    <div className="h-2"></div>
    <div className="relative overflow-hidden bg-gray-900 border rounded-xl border-white/20 text-center mx-auto px-4 py-2 max-w-fit min-h-[25px] flex flex-row justify-center items-center gap-1 shadow-xl" data-aos="fade-left">

      <a href="https://github.com/rstrauman" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-120" />
      </a>
      <a href="https://linkedin.com/in/rileystrauman" target="_blank" rel="noopener noreferrer">
        <img src={linkd} alt="LinkedIn" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-120" />
      </a>
              
      <a href="https://x.com/Riley_Strauman" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="LinkedIn" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-120" />
      </a>
    </div>
  </>
  );
}














