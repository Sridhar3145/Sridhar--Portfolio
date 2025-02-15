import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/sridhar31",
  whatsApp: "https://wa.me/9345866691",
};

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      Swal.fire("Error", "Please enter your name.", "error");
      return false;
    }
    if (!formData.email.trim()) {
      Swal.fire("Error", "Please enter your email.", "error");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire("Error", "Please enter a valid email address.", "error");
      return false;
    }
    if (!formData.subject.trim()) {
      Swal.fire("Error", "Please enter a subject.", "error");
      return false;
    }
    if (!formData.message.trim()) {
      Swal.fire("Error", "Please enter your message.", "error");
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "638c2a91-10a0-43ae-9bb2-94fddf49fbd2");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();

      if (result.success) {
        Swal.fire("Success", "Message sent successfully!", "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className="text-white py-20 bg-gray-900">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 font-head">
          <span className="text-green-400">Contact </span>Me
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Let's Talk */}
          <div
            className="flex flex-col sm:items-start items-center gap-6"
            data-aos="fade-right"
          >
            <h2 className="text-3xl mt-3 sm:mt-32 font-semibold text-green-400 text-center sm:text-left">
              Let's Talk
            </h2>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 text-center sm:text-left">
              {/* Phone */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaPhone size={30} className="text-green-400" />{" "}
                {/* Bigger icon */}
                <a
                  href="tel:+91 9345866691"
                  className="text-lg font-medium text-gray-300"
                >
                  +91 9345866691
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <MdEmail size={30} className="text-green-400" />{" "}
                {/* Bigger icon */}
                <a
                  href="mailto:sridhar314507@gmail.com"
                  className="text-lg font-medium text-gray-300"
                >
                  sridhar314507@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-4 justify-center sm:justify-start">
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center  rounded-xl p-2 border-2 border-gray-400 transform transition-transform duration-300 hover:scale-105  hover:border-2 hover:border-green-400 hover:shadow-[0px_4px_15px_rgba(22,163,74,0.8)] hover:text-green-400 "
              >
                <CiLinkedin size={32} className="icon" />
              </a>
              <a
                href={socialLinks.whatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center  rounded-xl p-2 border-2 border-gray-400 transform transition-transform duration-300 hover:scale-105  hover:border-2 hover:border-green-400 hover:shadow-[0px_4px_15px_rgba(22,163,74,0.8)] hover:text-green-400 "
                >
                <FaWhatsapp size={28} className="icon" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Name *"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Email *"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Subject *"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                rows="5"
                placeholder="Enter Your Message *"
              />

              <button
                type="submit"
                className="bg-gray-800 w-full text-white border-2 border-gray-400 transform transition-transform duration-300 hover:scale-105  hover:border-2 hover:border-green-400 hover:shadow-[0px_4px_15px_rgba(22,163,74,0.8)] hover:text-green-400  px-8 py-2 rounded-xl font-abc"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
