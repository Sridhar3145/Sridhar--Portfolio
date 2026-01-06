import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="text-white flex flex-wrap justify-center items-center font-abc text-sm sm:text-base md:text-xl mb-5 px-4 text-center gap-1 mt-4">
        &copy; {new Date().getFullYear()} Sridhar
        <span className="text-green-400">Portfolio</span>| All rights reserved.
      </div>
    </>
  );
};

export default Footer;
