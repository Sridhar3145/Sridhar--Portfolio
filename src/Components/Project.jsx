import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";

// Import project images
import pimg from "../assets/pimg.webp";
import waimg from "../assets/waimg.webp";
import pimg5 from "../assets/pimg5.webp";

const projects = [
  {
    image: pimg5,
    title: "SarbathKart",
    tech: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "SarbathKart is a full-stack e-commerce cart application for a local sarbath and juice shop. Users can browse products fetched from MongoDB, select quantities, and add items to the cart. The app includes user authentication  for login/signup, and protected routes for cart management. Built with React.js, Node.js, Express, and MongoDB for real-world project practice.",

    source: "https://github.com/Sridhar3145/sarbath-kart-frontend",
    demo: "https://sarbath-kart-pro.onrender.com/",
  },
  {
    image: waimg,
    title: "Weather Application",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "OpenWeather API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Geolocation API",
    ],
    description:
      "A full-stack weather application that allows users to search for real-time weather details of any city. The app stores search history in MongoDB, enabling users to view and manage their previous searches. It also uses the browser's Geolocation API to show the user's current weather. Built with Next.js frontend and Node.js + Express backend for real-world practice.",

    source: "https://github.com/Sridhar3145/weather-application",
    demo: "https://weather-application-sd.onrender.com/",
  },
  {
    image: pimg,
    title: "EB-Bill-Calculator",
    tech: ["React", "Tailwind CSS"],
    description:
      "This project is an interactive platform that helps users calculate their electricity bills and provides tips for reducing electricity consumption.",
    source: "https://github.com/Sridhar3145/EB-Bill-Calculator",
    demo: "https://eb-bill-calculator.netlify.app",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="text-white py-20 flex flex-col items-center mb-28"
      style={{
        backgroundImage: `url("../../assets/img2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-12 font-head">Projects</h2>

        {/* Centered Project Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-between place-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer group overflow-hidden rounded-xl shadow-lg 
                sm:hover:shadow-gray-400 sm:hover:scale-105 transition duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 15px rgb(123,129,138)",
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0px 4px 15px rgb(123,129,138)",
                }}
                data-aos="zoom-in"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover border-2 border-gray-400 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full text-center relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {/* Modal Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedProject.title}</h3>
            <p className="text-gray-400 mt-2">{selectedProject.description}</p>

            {/* Tech Used */}
            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500 px-2 py-1 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links & Close Button in One Row */}
            <div className="flex justify-evenly gap-4 mt-5">
              <a
                href={selectedProject.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Source Code
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-500"
              >
                Live Demo
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-red-500 px-4 py-2 rounded-md text-white font-bold hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
