import React, { useEffect, useState } from 'react';

const ParallaxBackground = ({ bgImage, children }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: `center ${offsetY * 0.3}px`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};


  return (
    <div style={backgroundStyle} className="min-h-screen flex flex-col items-center relative">
      {/* Dark semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-0" />

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0f172a] z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl px-4 pt-80 pb-32">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;


