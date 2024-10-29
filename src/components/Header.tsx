import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false); 
  const borderRefTop = useRef<HTMLSpanElement | null>(null);
  const borderRefBottom = useRef<HTMLSpanElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSocialDropdown = () => setIsSocialOpen((prev) => !prev); 

  const handleMouseEnter = (index: number) => {
    const linkElement = document.getElementById(`link-${index}`);
    if (linkElement) {
      const { offsetLeft, clientWidth } = linkElement;

      if (borderRefTop.current) {
        borderRefTop.current.style.left = `${offsetLeft}px`;
        borderRefTop.current.style.width = `${clientWidth}px`;
      }

      if (borderRefBottom.current) {
        borderRefBottom.current.style.left = `${offsetLeft}px`;
        borderRefBottom.current.style.width = `${clientWidth}px`;
      }
    }
  };

  const handleMouseLeaveTop = () => {
    if (borderRefTop.current) {
      borderRefTop.current.style.transition = "left 0.5s ease-out, width 0.5s ease-out";
      borderRefTop.current.style.left = "100%";
      borderRefTop.current.style.width = "0";
    }
  };

  const handleMouseLeaveBottom = () => {
    if (borderRefBottom.current) {
      borderRefBottom.current.style.transition = "left 0.5s ease-out, width 0.5s ease-out";
      borderRefBottom.current.style.left = "0";
      borderRefBottom.current.style.width = "0";
    }
  };

  return (
    <header className="fixed w-full p-4 transition-all duration-1000 bg-transparent bg-opacity-90 z-50 backdrop-blur-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1
          className="text-md font-bold text-gray-800 cursor-pointer transition-transform uppercase underline duration-1000 hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ashish Vishwakarma
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex relative p-2 border-2 border-gray-300 rounded-lg">
          <div className="flex gap-8 text-lg text-gray-800 font-semibold bg-gray-100 py-4 px-6 border-2 border-gray-200 rounded-lg relative">
            {["Home", "Projects", "Contact"].map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => {
                  handleMouseLeaveTop();
                  handleMouseLeaveBottom();
                }}
                className="relative group cursor-pointer px-2"
                id={`link-${index}`}
              >
                <span className="hover:text-gray-800 transition">{item}</span>
              </Link>
            ))}

            {/* Social Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSocialDropdown}
                className="text-gray-800 font-semibold focus:outline-none cursor-pointer"
              >
                Social
              </button>
              {isSocialOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/yourprofile"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="mr-2" /> Instagram
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="text-gray-800 font-semibold focus:outline-none cursor-pointer"
              >
                Download CV
              </button>
            </div>

            {/* Borders for Links */}
            <span
              ref={borderRefTop}
              className="absolute h-[2px] bg-black transition-all duration-1000"
              style={{
                left: 0,
                width: 0,
                top: 0,
              }}
            />
            <span
              ref={borderRefBottom}
              className="absolute h-[2px] bg-black transition-all duration-1000"
              style={{
                left: 0,
                width: 0,
                bottom: "-3px",
              }}
            />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-500 bg-opacity-90 p-5 flex flex-col items-center gap-6 md:hidden">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={1000}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-yellow-300"
              >
                {item}
              </Link>
            ))}

            {/* Social Links for Mobile Menu */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-white hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourprofile"
                className="text-white hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/yourprofile"
                className="text-white hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
