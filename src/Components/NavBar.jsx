import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import logo7 from "../assets/logo7.webp";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);

  const linkClass =
    "relative hover:text-green-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-300 hover:after:w-full after:transition-all after:duration-300 font-head";

  return (
    <>
      <nav className="nav-box ">
        {/* Logo */}
        <div className=" font-bold md:mx-0 font-title">
          <img src={logo7} alt="logo" className="w-17 h-11" />
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 justify-end hidden md:block">
          <Link to="/" className={linkClass}>
            <motion.span whileHover={{ scale: 2 }}>Home</motion.span>
          </Link>
          <Link to="/about" className={linkClass}>
            About
          </Link>
          <Link to="/skills" className={linkClass}>
            Skills
          </Link>
          <Link to="/project" className={linkClass}>
            Project
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="block md:hidden ml-auto" onClick={handleClick}>
          <IoMenuSharp className="text-white h-12 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="mobile-nav block md:hidden z-50">
          <div className="flex flex-col text-white text-center border-none">
            <Link to="/" onClick={() => setToggleMenu(false)}>
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setToggleMenu(false)}
              className="mt-2"
            >
              About
            </Link>
            <Link
              to="/skills"
              onClick={() => setToggleMenu(false)}
              className="mt-2"
            >
              Skills
            </Link>
            <Link
              to="/project"
              onClick={() => setToggleMenu(false)}
              className="mt-2"
            >
              Project
            </Link>
            <Link
              to="/contact"
              onClick={() => setToggleMenu(false)}
              className="mt-2"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
