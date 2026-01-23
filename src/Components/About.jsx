import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import about1 from "../assets/about1.webp";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <CiLinkedin size={40} className="text-blue-400" />,
    url: "https://www.linkedin.com/in/sridhar31",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={35} className="text-green-400" />,
    url: "https://wa.me/9345866691",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={35} className="text-gray-400" />,
    url: "https://github.com/Sridhar3145",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-10 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          <span className="text-green-400">About </span>Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={about1}
            alt="Sridhar - MERN Stack Developer"
            loading="lazy"
            className="about-img"
            data-aos="fade-right"
          />

          <div className="text-center md:text-left" data-aos="fade-left">
            <p className="text-lg leading-relaxed">
              I am a <strong>passionate MERN Stack Developer</strong> focused on building
              scalable and high-performance web applications with modern technologies.
              I specialize in{" "}
              <strong>
                MongoDB, Express.js, React.js, Node.js, JavaScript, and Tailwind CSS
              </strong>.
            </p>

            <p className="text-lg mt-4">
              Experienced in developing <strong>full-stack applications</strong> with
              RESTful APIs, secure authentication, and efficient database management.
            </p>

            <p className="text-lg mt-4">
              Strong in creating <strong>responsive user interfaces</strong> and
              integrating them seamlessly with <strong>backend services</strong> for
              smooth user experiences.
            </p>

            <p className="text-lg mt-4">
              Passionate about <strong>problem-solving</strong>, writing clean and
              maintainable code, and continuously learning new technologies to improve
              application performance and scalability.
            </p>

            <h3 className="mt-8 text-2xl font-bold">
              <span className="text-green-400">Follow</span> me on
            </h3>

            <SocialLinks />
          </div>
        </div>

      </div>
    </section>
  );
};

const SocialLinks = () => (
  <div
    className="flex gap-5 mt-4 justify-center md:justify-start"
    data-aos="fade-left"
  >
    {socialLinks.map(({ name, icon, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
        aria-label={name}
      >
        {icon}
      </a>
    ))}
  </div>
);

export default About;
