import React from "react";
import { projects, Iprojects } from "../constant/index";
// import { useNavigate } from "react-router-dom";

const ProjectsSection: React.FC = () => {
  // const navigate = useNavigate();

  const handleClick = (project: Iprojects) => {
    // navigate(project.link);
    window.open(project.link,'_blank', 'rel=noopener noreferrer')
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden"
    >
      {/* Parallax background effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("path-to-background-image.jpg")' }}
      ></div>

      {/* Animated section title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 relative z-10 animate-fadeInUp">
        My Projects
      </h2>

      {/* Project cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-10 relative z-10">
        {projects.map((project: Iprojects, index) => (
          <div
            key={index}
            className="group relative p-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Project image */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Overlay with hover effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>

            {/* Project details */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition duration-300 mb-4">
                {project.description}
              </p>
              <button
                onClick={() => handleClick(project)}
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
