import React from 'react'


function ProjectCard({ project }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">

      {/* Image */}
    <div className="h-4" />
      <img
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        className="w-64 h-40 object-cover rounded-md mb-4"
      />

      {/* Title */}
      <div className="h-2" />
      <h3 className="text-xl text-white font-bold mb-2">{project.title}</h3>
      <div className="h-2" />
      {/* Description */}
      <p className="text-white text-sm mb-4">{project.description}</p>
      <div className="h-2" />

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Live Demo
        </a>
      </div>
      <div className="h-4" />
    </div>
  );
}

export default ProjectCard;

