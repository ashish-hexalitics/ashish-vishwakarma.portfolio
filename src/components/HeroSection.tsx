import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const HeroSection: React.FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const el = useRef<HTMLParagraphElement>(null);
  const el2 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // GSAP animation for title and subtitle on load
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" }
    );
    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      ".blob",
      { scale: 1 },
      { scale: 1.05, repeat: -1, yoyo: true, duration: 5, ease: "power1.inOut" }
    );

    // Scroll event for parallax effect
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Typed.js for the hero subtitle
    const typed = new Typed(el.current!, {
      strings: ["My Name is Ashish Vishwakarma, and I am a Web Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      loop: false,
      cursorChar: "👋",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (showDescription) {
      // Initialize Typed.js for the hero description
      const leanMoreTyped = new Typed(el2.current!, {
        strings: [
          `Highly skilled React Developer with 5+ years of experience in developing web
applications. Expertise in React JS, React Native, and JavaScript languages. I
specialize in architecting scalable solutions that prioritize performance and user
experience also dedicated to delivering cutting-edge solutions that elevate user
experience`,
        ],
        startDelay: 10,
        typeSpeed: 20,
        backSpeed: 50,
        backDelay: 50,
        loop: false,
        cursorChar: "😊",
      });

      return () => leanMoreTyped.destroy();
    }
  }, [showDescription]);

  const handleLearnMore = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative text-center overflow-hidden"
      style={{
        backgroundImage: "url('/path/to/your/image.jpg')",
        backgroundPositionY: `${offsetY * 0.5}px`, // Parallax effect on background image
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-70 z-0"></div>

      <div className="relative z-10 px-4">
        {!showDescription && (
          <>
            <p
              ref={el}
              className="hero-subtitle text-lg md:text-xl font-medium bg-clip-text animate-fade-in mb-4 relative text-gray-500"
            ></p>

            <h1 className="hero-title text-xl md:text-4xl font-extrabold text-white leading-tight mb-4 stroke-text">
              Welcome to My Portfolio
            </h1>
            <button
              onClick={handleLearnMore}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            >
              {showDescription ? "Show Less" : "Learn More"}
            </button>
          </>
        )}

        {showDescription && (
          <p
            ref={el2}
            className="hero-desc text-lg md:text-3xl text-gray-600 mt-4 px-6 md:px-96"
          ></p>
        )}
      </div>

      {/* SVG Blobs with Parallax Effect */}
      <svg
        viewBox="0 0 578 440"
        className="blob absolute w-full h-full max-w-2xl opacity-50 -left-1/4 -top-36"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`, // Slow parallax on blob
        }}
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FF0080", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF6600", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        ></path>
      </svg>

      <svg
        viewBox="0 0 578 440"
        className="blob absolute w-full h-full max-w-2xl opacity-50 -right-96 top-36"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`, // Faster parallax on second blob
        }}
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FF0080", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF6600", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        ></path>
      </svg>

      <div
        className="absolute bottom-0"
        style={{
          transform: `translateY(${offsetY * 0.1}px)`,
        }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 stroke-text">
          React, Node.js, Express.js, MongoDB
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
