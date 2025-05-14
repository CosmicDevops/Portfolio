"use client"
import React, { useState } from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaJava, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";

export default function Home() {
  const [Val, SetVal] = useState("home");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    { name: "Java", icon: <FaJava size={60} />, details: "Java is a high-level, class-based programming language." },
    { name: "React", icon: <SiReact size={60} />, details: "React is a JavaScript library for building user interfaces." },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} />, details: "Utility-first CSS framework for rapid UI development." },
    { name: "JavaScript", icon: <SiJavascript size={60} />, details: "Versatile programming language for frontend and backend." },
    { name: "Bootstrap", icon: <FaBootstrap size={60} />, details: "Popular CSS framework for responsive design." },
    { name: "MongoDB", icon: <DiMongodb size={60} />, details: "NoSQL database known for scalability and flexibility." },
  ];

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-t from-cyan-300 via-black to-black flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl p-12 bg-gray-900 rounded-3xl flex flex-col">
        
        {/* Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-20">
          <h1 className="font-bold text-4xl mb-4 md:mb-0 text-white">Portfolio.</h1>
          <nav className="flex flex-wrap gap-6 text-white cursor-pointer text-center">
            <ul onClick={() => SetVal("home")} className="hover:text-cyan-300">Home</ul>
            <ul onClick={() => SetVal("skills")} className="hover:text-cyan-300">Skills</ul>
            <ul onClick={() => SetVal("resume")} className="hover:text-cyan-300">Resume</ul>
            <ul onClick={() => SetVal("contact")} className="hover:text-cyan-300">Contact</ul>
          </nav>
        </div>

        {/* Home Section */}
        {Val === "home" && (
          <>
            <motion.div
              className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-20 py-12 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h2 className="text-xl">Hello, It's Me</h2>
                <h1 className="text-3xl md:text-5xl font-bold">Keerthivasan Venkattesvarane</h1>
                <h3 className="text-xl md:text-2xl">
                  And Im a <span className="text-cyan-300">Frontend Developer</span>
                </h3>
                <p className="text-sm md:text-base text-justify">
                  A passionate developer who thrives on solving complex problems, learning new technologies, and building scalable solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
               
              </motion.div>
            </motion.div>

            {/* Social Media Icons + Download CV */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-20 pb-12">
              <div className="flex gap-6 text-cyan-300 text-3xl">
                {[LinkedIn, Facebook, Instagram, Twitter].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-cyan-300 px-6 py-3 rounded-full font-bold shadow-md shadow-cyan-300 mt-6 sm:mt-0"
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px #22d3ee" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="https://keerthivasanresume.tiiny.site/" className="text-black">DOWNLOAD CV</a>
              </motion.div>
            </div>
          </>
        )}

        {/* Skills Section */}
        {Val === "skills" && (
          <div className="text-white text-center mt-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  className="border-2 border-cyan-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-cyan-300 hover:text-black transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {hoveredSkill === index ? (
                    <p className="text-sm">{skill.details}</p>
                  ) : (
                    <>
                      <div className="text-cyan-300 mb-2">{skill.icon}</div>
                      <p className="text-lg font-semibold">{skill.name}</p>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Resume Section */}
        {Val === "resume" && (
          <div className="text-white text-center mt-10 px-6">
            <h1 className="text-3xl font-bold">Resume</h1>
            <p>Coming soon...</p>
          </div>
        )}

        {/* Contact Section */}
        {Val === "contact" && (
          <div className="text-white text-center mt-10 px-6">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p>Coming soon...</p>
          </div>
        )}

      </div>
    </motion.div>
  );
}
