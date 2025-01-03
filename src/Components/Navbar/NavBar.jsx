import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);

  const linkClass =
    "relative hover:text-green-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-300 hover:after:w-full after:transition-all after:duration-300 font-head";

  return (
    <>
      <nav className="text-white px-8 py-2 flex md:justify-between md:items-center bg-primary shadow-lg shadow-gray-800">
        {/* Logo */}
        <div className="text-2xl font-bold md:mx-0 font-title">
          <span className=" text-green-100">sridhar</span>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:block">
          <Link to="/" className={linkClass}>
            Home
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
          <IoMenuSharp className="text-white h-5" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="mobile-nav block md:hidden">
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
