import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images for skills
import html from "../../assets/html.png";
import css3 from "../../assets/css3.svg";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import twcss from "../../assets/twcss.png";
import git from "../../assets/git.png";

const Skills = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Skill items data
  const skills = [
    {
      image: html,
      label: "HTML",
      borderColor: "border-orange-400",
      shadowColor: "shadow-orange-400/75",
    },
    {
      image: css3,
      label: "CSS",
      borderColor: "border-sky-600",
      shadowColor: "shadow-sky-300/75",
    },
    {
      image: js,
      label: "JAVASCRIPT",
      borderColor: "border-yellow-500",
      shadowColor: "shadow-yellow-500/75",
    },
    {
      image: react,
      label: "REACT JS",
      borderColor: "border-sky-300",
      shadowColor: "shadow-sky-300/75",
    },
    {
      image: twcss,
      label: "TAILWIND CSS",
      borderColor: "border-blue-400",
      shadowColor: "shadow-blue-400/75",
    },
    {
      image: git,
      label: "GITHUB",
      borderColor: "border-black",
      shadowColor: "shadow-gray-300",
    },
  ];

  return (
    <div className="text-white py-20">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          Skills
        </h2>
        <div className="container grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ image, label, borderColor, shadowColor }, index) => (
            <div
              key={index}
              className={`mx-auto px-9 py-6 border-b-2 border-r-2 ${borderColor} shadow-lg ${shadowColor} rounded-md mt-9 hover:scale-105 transition-transform duration-300`}
              data-aos="zoom-in"
            >
              <img src={image} alt={label} className="w-28 h-28 mx-auto" />
              <h4 className="text-center mt-3 font-abc">{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
