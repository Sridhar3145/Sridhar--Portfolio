import React, { useEffect } from "react";
import pimg from "../../assets/pimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="text-white py-20">
      <h1 className="text-4xl font-bold text-center mb-12 font-head">
        <span className="text-green-400">My</span> Project
      </h1>
      <div className="project-style w-full max-w-none sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={pimg}
          alt=""
          className="rounded-xl w-full"
          data-aos="flip-right"
        />
        <h2
          className="text-black text-center text-xl font-head mt-5"
          data-aos="fade-up"
        >
          EB Bill Calculator
        </h2>
        <div className="flex justify-center gap-7 mt-6" data-aos="fade-up">
          <a href="https://eb-bill-calculator.netlify.app" target="_blank">
            <button className="bg-green-400 text-black rounded-lg py-3 px-8">
              Go Live
            </button>
          </a>
          <a
            href="https://github.com/Sridhar3145/EB-Bill-Calculator"
            target="_blank"
          >
            <button className="bg-green-400 text-black rounded-lg py-3 px-6">
              View Code
            </button>
          </a>
        </div>
        <div
          className="text-black flex flex-col justify-center items-center gap-2 font-abc mt-9"
          data-aos="fade-up"
        >
          <b className="mr-9">Techniques to Reduce Electricity Bill</b>
          <p>
            This project is an interactive platform that helps users calculate
            their electricity bills and provides tips for reducing electricity
            consumption. The application includes a custom electricity bill
            calculator, an electricity unit per rate table, and a list of
            strategies to reduce electricity usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
