import React, { useEffect } from "react";
import img2 from "../assets/img2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaWhatsapp, FaDownload, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/sridhar31",
  whatsApp: "https://wa.me/9345866691",
  github: "https://github.com/Sridhar3145",
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [text] = useTypewriter({
    words: ["Front-End Developer.", "React Developer."],
    loop: true,
  });

  return (
    <div className="home-box">
      {/* Text Section (Left) */}
      <div
        data-aos="fade-up"
        className="text-center md:text-left flex flex-col items-center md:items-start"
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-12">
          Welcome To My
          <span className="text-green-400 font-abc"> Portfolio</span>
        </h1>

        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-green-400 font-abc">Sridhar</span>
        </h1>
        <h2 className="text-2xl mt-2">
          a{" "}
          <span className="font-abc">
            {text}
            <Cursor cursorStyle="|" cursorColor="green" />
          </span>
        </h2>
        <p className="mt-4 text-gray-300 font-abc text-base">
          Specializing in Responsive, Interactive, and Modern Web Design.
        </p>

        {/* Buttons and Social Icons */}
        <div className="cv-social-icon-main ">
          {/* Download Resume Button */}
          <a href="/assets/Resume.pdf" download="Resume.pdf">
            <motion.button
              whileHover={{ border: "2px solid #99e6b7", scale: 1.1 }}
              transition={{ duration: 0.1 }}
              className="cv-download-btn"
              data-aos="fade-right"
            >
              <FaDownload size={20} /> Download CV
            </motion.button>
          </a>

          {/* Social Media Icons */}
          <div
            className="flex gap-5 sm:flex-wrap justify-center md:justify-start"
            data-aos="fade-left"
          >
            {Object.entries(socialLinks).map(([key, link]) => (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icons-btn"
              >
                {key === "whatsApp" && (
                  <FaWhatsapp size={28} className="icon" />
                )}
                {key === "linkedIn" && (
                  <CiLinkedin size={32} className="icon" />
                )}
                {key === "github" && <FaGithub size={28} className="icon" />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section (Right) */}
      <div
        className="home__img"
        data-aos="fade-left"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        alt="Sridhar - Front-End Developer"
      ></div>
    </div>
  );
};

export default Home;
