import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/sridhar31",
  whatsApp: " https://wa.me/9345866691",
};

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "638c2a91-10a0-43ae-9bb2-94fddf49fbd2");

    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonData,
      });
      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success",
          text: "Message sent successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          <span className="text-green-400">Contact </span>Me
        </h2>
        <div
          className="flex flex-col md:flex-row items-center md:space-x-12"
          data-aos="fade-down"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-green-400 mb-7 font-head">
              Let's Talk
            </h3>
            <div className="flex gap-9" data-aos="fade-down">
              <a
                href={socialLinks.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={37} className="icon" />
              </a>
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin size={43} className="icon" />
              </a>
            </div>
          </div>

          <div
            className="flex-1 w-full justify-center items-center"
            data-aos="fade-down"
          >
            <form className="space-y-3.5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-abc">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-abc"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-abc">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-abc"
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-abc">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-abc"
                  rows="5"
                  placeholder="Enter Your Message"
                  name="message"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full font-abc"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
