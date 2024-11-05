import React, { useState } from "react";
import { projects, Iprojects } from "../constant/index";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleToggleDescription = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const handleClick = (project: Iprojects) => {
    window.open(project.link, "_blank", "rel=noopener noreferrer");
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 relative z-10 animate-fadeInUp">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-10 relative z-10">
        {projects.map((project: Iprojects, index) => (
          <div
            key={index}
            className={`flip-card relative  bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${
              selectedProject === index ? "flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front flex-col bg-white shadow-lg overflow-hidden">
                <div
                  className="w-full h-48 bg-cover bg-top rounded-t-lg"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description.slice(0, 50)}
                    <span
                      className="text-gray-500 text-sm font-medium hover:text-gray-700 focus:outline-none cursor-pointer"
                      onClick={() => handleToggleDescription(index)}
                    >
                      ...Read More
                    </span>
                  </p>
                  <button
                    onClick={() => handleClick(project)}
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md"
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Back of the card */}
              <div className="flip-card-back bg-white shadow-lg flex flex-col justify-start items-start">
                <p className="text-sm font-bold text-gray-700 mb-2">
                  {project.sub_title}
                </p>
                <p className="text-gray-600 font-mono text-sm mb-4">
                  {project.technolodgy_used}
                </p>

                <p className="text-sm font-bold text-gray-700 mb-2">Features</p>
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>
                <p className="text-gray-700 mb-4 text-sm">{project.features}</p>
                <button
                  onClick={() => handleToggleDescription(index)}
                  className="text-indigo-600 font-semibold underline mt-2"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
