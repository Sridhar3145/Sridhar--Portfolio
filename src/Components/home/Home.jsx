import React, { useEffect } from "react";
import sd from "../../assets/sd.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-white text-center py-44 md:flex-col">
      <img
        src={sd}
        alt="Profile"
        className="mx-auto mb-8 w-56 h-56 rounded-full object-cover "
        data-aos="flip-right"
      />
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold">
          I'm <span className="text-green-400 font-abc">Sridhar</span>,
          Front-End Developer
        </h1>
        <p className="mt-4 text-sm text-gray-300 font-abc">
          Specializing in Responsive, Interactive, and Modern Web Design.
        </p>
      </div>

      <div className="mt-6 space-x-4" data-aos="fade-up">
        <a href="/assets/Resume.pdf" download="Resume.pdf">
          <button className="bg-green-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full font-abc">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
