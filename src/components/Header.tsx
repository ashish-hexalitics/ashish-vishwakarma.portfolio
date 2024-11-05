import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
// import { Document, Page } from "react-pdf";
// import AshishCV from "../assets/Ashish-React-CV-5.pdf";
import PdfPreviewModal from "./PdfPreviewModal"; // Import the modal

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false); // State for PDF modal
  const borderRefTop = useRef<HTMLSpanElement | null>(null);
  const borderRefBottom = useRef<HTMLSpanElement | null>(null);
  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSocialDropdown = () => setIsSocialOpen((prev) => !prev);

  // const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
  //   setNumPages(numPages);
  // };

  const handleMouseEnter = (index: number) => {
    const linkElement = document.getElementById(`link-${index}`);
    if (linkElement) {
      const { offsetLeft, clientWidth } = linkElement;

      if (borderRefTop.current) {
        borderRefTop.current.style.left = `${offsetLeft}px`;
        borderRefTop.current.style.top = `-${2}px`;
        borderRefTop.current.style.transform = "translate(0,0)";
        borderRefTop.current.style.width = `${clientWidth}px`;
        borderRefTop.current.style.height = `20px`;
        borderRefTop.current.style.borderTop = `2px solid #000`;
        borderRefTop.current.style.borderRight = `none`;
        borderRefTop.current.style.borderBottomLeftRadius = `0`;
        borderRefTop.current.style.borderTopLeftRadius = `0`;
        borderRefTop.current.style.borderBottomRightRadius = `0`;
        borderRefTop.current.style.borderTopRightRadius = `0`;
      }

      if (borderRefBottom.current) {
        borderRefBottom.current.style.left = `${offsetLeft}px`;
        borderRefBottom.current.style.bottom = `-${2}px`;
        borderRefBottom.current.style.width = `${clientWidth}px`;
        borderRefBottom.current.style.transform = "translate(1px,-1px)";
        borderRefBottom.current.style.height = `20px`;
        borderRefBottom.current.style.borderBottom = `2px solid #000`;
        borderRefBottom.current.style.borderLeft = `none`;
        borderRefBottom.current.style.borderBottomLeftRadius = `0`;
        borderRefBottom.current.style.borderTopLeftRadius = `0`;
        borderRefBottom.current.style.borderBottomRightRadius = `0`;
        borderRefBottom.current.style.borderBottomLeftRadius = `0`;
      }
    }
  };

  const handleMouseLeaveTop = () => {
    if (borderRefTop.current) {
      borderRefTop.current.style.transition =
        "left 0.5s ease-out, width 0.5s ease-out";
      borderRefTop.current.style.left = `calc(100% + 2px)`;
      borderRefTop.current.style.transform = "translate(-100%,0)";
      borderRefTop.current.style.width = "20px";
      borderRefTop.current.style.borderRight = `2px solid #000`;
      borderRefTop.current.style.borderBottomLeftRadius = `0`;
      borderRefTop.current.style.borderTopLeftRadius = `0`;
      borderRefTop.current.style.borderBottomRightRadius = `0`;
      borderRefTop.current.style.borderTopRightRadius = `.5rem`;
    }
  };

  const handleMouseLeaveBottom = () => {
    if (borderRefBottom.current) {
      borderRefBottom.current.style.transition =
        "left 0.5s ease-out, width 0.5s ease-out";
      borderRefBottom.current.style.left = `calc(0% - 2px)`;
      borderRefBottom.current.style.width = "20px";
      borderRefBottom.current.style.transform = "translate(1px,-1px)";
      borderRefBottom.current.style.borderLeft = `2px solid #000`;
      borderRefBottom.current.style.borderTopLeftRadius = `0`;
      borderRefBottom.current.style.borderBottomRightRadius = `0`;
      borderRefBottom.current.style.borderBottomLeftRadius = `.5rem`;
    }
  };


  const handleLinkClick = (project: {link:string}) => {
    const newWindow = window.open(project.link, "_blank");
    if (newWindow) newWindow.opener = null; 
  };
  

  return (
    <header className="fixed w-full p-4 transition-all duration-1000 bg-transparent bg-opacity-90 z-50 backdrop-blur-md">
      <nav className="flex justify-between h-full items-center max-w-6xl mx-auto">
        <h1
          className="text-md h-full font-bold text-gray-800 cursor-pointer transition-transform uppercase underline duration-1000 hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ashish Vishwakarma
        </h1>

        {/* Desktop Menu */}
        <div className="hidden h-full md:flex relative p-2  border-2 border-gray-300 rounded-lg">
          <div className="grid grid-cols-4 h-full w-full text-lg text-gray-800 font-semibold bg-gray-100  px-6 border-2 border-gray-200 rounded-lg relative">
            {["Home", "Projects"].map((item, index) => (
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
                className="relative group cursor-pointer h-[70px] w-full px-2 flex justify-between items-center"
                id={`link-${index}`}
              >
                <span className="hover:text-gray-800 transition h-full flex justify-center items-center w-full">{item}</span>
              </Link>
            ))}

            {/* Social Dropdown */}
            <Link
              className="relative group cursor-pointer px-2 h-[70px] flex justify-center items-center"
              duration={500}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => {
                handleMouseLeaveTop();
                handleMouseLeaveBottom();
              }}
              to=""
              id={`link-4`}
            >
              <button
                onClick={toggleSocialDropdown}
                className="hover:text-gray-800 transition cursor-pointer"
              >
                Social
              </button>
              {isSocialOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  <Link
                    to="https://linkedin.com/in/yourprofile"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center hover:bg-gray-100"
                      onClick={() =>
                        handleLinkClick({
                          link: "https://www.linkedin.com/in/ashish-vishwakarma-5827131a2",
                        })
                      }
                    >
                      <FaLinkedin className="mr-2" />
                      LinkedIn
                    </button>
                  </Link>
                  <Link
                    to=""
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center hover:bg-gray-100"
                      onClick={() =>
                        handleLinkClick({
                          link: "https://github.com/aishuvishwakarma",
                        })
                      }
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </button>
                  </Link>
                  <Link
                    to=""
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="flex items-center hover:bg-gray-100"
                      onClick={() =>
                        handleLinkClick({
                          link: "https://www.instagram.com/codeamon_",
                        })
                      }
                    >
                      <FaInstagram className="mr-2" /> Instagram
                    </button>
                  </Link>
                </div>
              )}
            </Link>
            <Link
              className="relative group cursor-pointer px-2 h-[70px] flex justify-center items-center"
              duration={500}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={() => {
                handleMouseLeaveTop();
                handleMouseLeaveBottom();
              }}
              to=""
              id={`link-5`}
            >
              <button
                onClick={() => setShowPdf(true)}
                className="text-gray-800 font-semibold focus:outline-none cursor-pointer"
              >
                View CV
              </button>
            </Link>
            {/* Borders for Links */}
            <span
              ref={borderRefTop}
              className="absolute h-[2px]  transition-all duration-1000"
              style={{
                left: 0,
                width: 0,
                top: 0,
              }}
            />
            <span
              ref={borderRefBottom}
              className="absolute h-[2px] transition-all duration-1000"
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
              <Link
                to="https://linkedin.com/in/yourprofile"
                className="text-white hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                to="https://github.com/ashish-hexalitics"
                className="text-white hover:text-yellow-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </nav>
      {showPdf && <PdfPreviewModal onClose={() => setShowPdf(false)} />}
    </header>
  );
};

export default Header;
