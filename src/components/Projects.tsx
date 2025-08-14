import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Leaf, Zap, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Development of Biodegradable Potting Bags",
      description: "Innovative sustainable solution using sugarcane bagasse as primary raw material for eco-friendly nursery applications.",
      fullDescription: "This study focuses on the development of biodegradable potting bags using sugarcane bagasse as the primary raw material. It covers the collection and pre-treatment of bagasse, formulation of composites with natural binders, fabrication of potting bags, and performance evaluation through mechanical, water resistance, and biodegradability tests.",
      icon: Leaf,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Material Science", "Biodegradable Polymers", "Composite Materials", "Sustainability"],
      highlights: [
        "Sustainable alternative to plastic potting bags",
        "Utilizes agricultural waste (sugarcane bagasse)",
        "Comprehensive performance testing",
        "Economic viability analysis",
        "Environmental impact assessment"
      ],
      category: "Capstone Project",
      status: "Completed",
      year: "2025"
    },
    {
      id: 2,
      title: "Vehicle-Based Power Generation System",
      description: "Innovative piezoelectric energy harvesting system for powering smart streetlight infrastructure using traffic-induced mechanical stress.",
      fullDescription: "This project focuses on developing a compact road-based energy harvesting prototype using piezoelectric components that converts traffic-induced mechanical stress into electrical energy for smart infrastructure applications.",
      icon: Zap,
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Piezoelectric Systems", "IoT", "ESP8266", "Energy Harvesting", "Smart Infrastructure"],
      highlights: [
        "Piezoelectric energy harvesting technology",
        "AC to DC power conversion system",
        "Data logging and wireless transmission",
        "Web-based monitoring platform",
        "Prototype validation and testing"
      ],
      category: "Collaborative Project",
      status: "Completed", 
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative engineering solutions demonstrating expertise in sustainable manufacturing, 
            renewable energy systems, and cutting-edge technology applications.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-slate-900/70 text-white px-3 py-1 rounded-full text-sm">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <project.icon className="w-12 h-12 text-amber-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <motion.h3
                      whileHover={{ x: 10 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4 cursor-pointer hover:text-amber-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-emerald-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-amber-400 font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <Award className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Status */}
                  <div className="flex items-center space-x-4 pt-4">
                    <span className="flex items-center space-x-2 text-emerald-400">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold">{project.status}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;