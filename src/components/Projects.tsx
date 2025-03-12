import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import colorPaletteImg from "../assets/color-palette.png";
import timeraImg from "../assets/timera.png";
import portfolioImg from "../assets/portfolio.png";


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A website to showcase my learnings and experince gained while working on some projects",
      image: portfolioImg,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "React", "Typescript"],
      github: "https://github.com/27Adityasahil/Portfolio",
      demo: "https://saditya.me"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A simple weather application that fetches real-time weather data from a public API and displays forecasts with a clean UI.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["JavaScript", "API", "CSS", "LocalStorage"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Timera",
      description: "A to-do list application with features like task categories, priorities, pomodoro and local storage persistence.",
      image: timeraImg,
      tags: ["JavaScript", "HTML", "CSS", "LocalStorage", "React", "Typescript"],
      github: "https://github.com/27Adityasahil/Timera",
      demo: "https://timera.vercel.app/"
    },
    {
      id: 4,
      title: "Color Palette Master",
      description: "A place to pick color with adjustable backgrond to check if it suits with your UI.",
      image: colorPaletteImg,
      tags: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/27Adityasahil/color-palette",
      demo: "https://color-palette-aditya.vercel.app/"
    },    
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Here are some of the web development projects I've worked on during my learning journey.
          From simple applications to more complex systems.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-700/50"
            variants={item}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-700/70 rounded-md text-xs font-medium text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a 
                  href={project.github} 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo} 
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a 
          href="https://github.com/27Adityasahil" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg shadow-blue-600/20"
        >
          <Code size={18} className="mr-2" />
          <span>View More on GitHub</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;