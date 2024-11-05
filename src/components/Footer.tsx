import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const handleLinkClick = (project: { link: string }) => {
    const newWindow = window.open(project.link, "_blank");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Logo and Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-green-500">
              Ashish Vishwakarma
            </h2>
            <p className="text-gray-400">
              Building modern, responsive websites and creative web applications
              that leave a lasting impression.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Projects"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-green-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: vishwakarmaa949@gmail.com</p>
            <p className="text-gray-400">Phone: +91 8435180974</p>
            <p className="text-gray-400">Location: India</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/aishuvishwakarma",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/ashish-vishwakarma-5827131a2",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/codeamon_",
            },
          ].map((social, index) => (
            <button
              // className="flex items-center hover:bg-gray-100"
              className="text-gray-400 hover:text-green-500 transition text-xl"
              key={index}
              onClick={() =>
                handleLinkClick({
                  link: social.link,
                })
              }
            >
              <span
              >
                {social.icon}
              </span>
            </button>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500 border-t border-gray-700 pt-5">
          <p className="text-sm">© 2024 MyPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
