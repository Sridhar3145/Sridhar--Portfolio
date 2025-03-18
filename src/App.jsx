import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Project from "./Components/project/Project";
import Contact from "./Components/contact/Contact";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 sec wait and remove loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        // Loading screen
        <div className="flex items-center justify-center h-screen text-5xl font-bold text-white">
          Loading...
        </div>
      ) : (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
