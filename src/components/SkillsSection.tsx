import React from "react";
import {
  SiTailwindcss,
  SiRemix,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const skills = [
  {
    icon: <FaReact />,
    name: "React.js",
    description: "Building dynamic and responsive UIs",
    link: "https://react.dev/",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend development and API handling",
    link: "https://nodejs.org/",
  },
  {
    icon: <FaDatabase />,
    name: "MongoDB",
    description: "NoSQL database for scalable applications",
    link: "https://www.mongodb.com/",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    description: "Styling and responsive design",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
    description: "Core language for front-end logic",
    link: "https://www.javascript.com/",
  },
  {
    icon: <SiRemix />,
    name: "Remix",
    description: "Building modern and dynamic UIs",
    link: "https://remix.run/",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    description: "React framework with server-side rendering",
    link: "https://nextjs.org/",
  },
  {
    icon: <SiNestjs />,
    name: "Nest.js",
    description: "Node.js framework for scalable server-side applications",
    link: "https://nestjs.com/",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    link: "https://www.prisma.io/",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
        <p className="text-gray-600 mb-12">
          Here are some of the technologies and tools I work with to bring
          projects to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <Link to={skill.link} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                <div className="text-4xl text-blue-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
