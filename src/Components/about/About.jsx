import React, { useEffect } from "react";
import sd from "../../assets/sd.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-10 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          <span className="text-green-400">About </span>Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={sd}
            alt="Sridhar"
            className="w-72 h-80 rounded-2xl object-cover mb-8 md:mb-0 border-dashed border-4 border-green-400"
            data-aos="fade-right"
          />

          <p className="text-lg font-abc" data-aos="fade-left">
            I am a passionate Front-End Developer with expertise in creating
            dynamic and responsive web applications. With a strong foundation in
            HTML, CSS, and JavaScript, I specialize in building user-friendly
            interfaces that deliver seamless user experiences. Proficient in
            modern tools like React.js and Tailwind CSS, I enjoy crafting
            pixel-perfect designs and optimizing web performance.
            <br />
            <br />I thrive on staying up-to-date with the latest web development
            trends and am dedicated to turning creative ideas into functional,
            visually appealing websites. Whether collaborating in a team or
            working independently, I aim to deliver high-quality solutions that
            exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
