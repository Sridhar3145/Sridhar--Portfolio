import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import NavBar from "./Components/Navbar/NavBar";
const Home = React.lazy(() => import("./Components/home/Home"));
const About = React.lazy(() => import("./Components/about/About"));
const Skills = React.lazy(() => import("./Components/skills/Skills"));
const Project = React.lazy(() => import("./Components/project/Project"));
const Contact = React.lazy(() => import("./Components/contact/Contact"));

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
