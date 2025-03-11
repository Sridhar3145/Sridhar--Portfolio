import React, { useEffect } from "react";
import about1 from "../../assets/about1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

// Define social links outside the component to avoid re-creation
const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/sridhar31",
  whatsApp: "https://wa.me/9345866691",
  github: "https://github.com/Sridhar3145",
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-10 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          <span className="text-green-400">About </span>Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <img
            src={about1}
            alt="Sridhar"
            loading="lazy"
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover mb-8 md:mb-0"
            data-aos="fade-right"
          />

          {/* About Text */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <p className="text-lg font-abc leading-relaxed">
              I am a <strong>passionate Front-End Developer</strong> dedicated
              to creating seamless and engaging web experiences. With expertise
              in{" "}
              <strong>HTML, CSS, JavaScript, React.js, and Tailwind CSS</strong>
              , I develop dynamic and responsive web applications.
            </p>

            <p className="text-lg font-abc mt-4">
              Skilled in building <strong>user-friendly interfaces</strong> with
              a focus on <strong>pixel-perfect design</strong> and{" "}
              <strong>optimized web performance</strong>.
            </p>

            <p className="text-lg font-abc mt-4">
              Enthusiastic about{" "}
              <strong>
                staying updated with the latest web development trends
              </strong>{" "}
              and transforming creative ideas into functional solutions.
            </p>

            <p className="text-lg font-abc mt-4">
              Strong ability to work <strong>independently</strong> or
              collaborate in a <strong>team environment</strong> to deliver
              high-quality results.
            </p>

            {/* Social Links Section */}
            <h1 className="mt-8 text-2xl font-bold font-abc">
              <span className="text-green-400">Follow</span> me on
            </h1>

            {/* For medium and larger screens */}
            <div
              className="gap-5 mt-2 md:flex hidden justify-start"
              data-aos="fade-left"
            >
              {Object.entries(socialLinks).map(([key, link]) => (
                <a
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  {key === "whatsApp" && (
                    <FaWhatsapp size={35} className="text-green-400" />
                  )}
                  {key === "linkedIn" && (
                    <CiLinkedin size={40} className="text-blue-400" />
                  )}
                  {key === "github" && (
                    <FaGithub size={35} className="text-gray-400" />
                  )}
                </a>
              ))}
            </div>

            {/* For small screens */}
            <div className="md:hidden flex gap-5 justify-center mt-4">
              {Object.entries(socialLinks).map(([key, link]) => (
                <a
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  {key === "whatsApp" && (
                    <FaWhatsapp size={35} className="text-green-400" />
                  )}
                  {key === "linkedIn" && (
                    <CiLinkedin size={40} className="text-blue-400" />
                  )}
                  {key === "github" && (
                    <FaGithub size={35} className="text-gray-400" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
