import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, Lightbulb, MapPin, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: User,
      title: "Professional Engineer",
      description: "Motivated Manufacturing, Industrial and Textile Engineer with expertise in sustainable manufacturing and process optimization."
    },
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description: "Bachelor of Engineering from Moi University with specialized focus on Manufacturing, Industrial and Textile Engineering."
    },
    {
      icon: Target,
      title: "Technical Expertise",
      description: "Proficient in CAD design (AutoCAD, SolidWorks), lean manufacturing, quality control, and production planning."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Passionate about sustainable solutions, process optimization, and contributing to high-performance manufacturing environments."
    }
  ];

  const personalInfo = [
    { label: "Location", value: "Kitui, Eastern Kenya", icon: MapPin },
    { label: "Education", value: "Moi University - B.Eng", icon: GraduationCap },
    { label: "Specialization", value: "Manufacturing & Industrial Engineering", icon: Award },
    { label: "Experience", value: "Multiple Industrial Attachments", icon: Target }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800/50 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering excellence through innovation, sustainability, and continuous improvement 
            in modern manufacturing environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Background Design Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-3xl transform rotate-6 blur-xl"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-2xl transform rotate-3"></div>
              
              {/* Main Photo Container */}
              <div className="relative bg-slate-700 rounded-2xl overflow-hidden border-4 border-slate-600 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="James Ngene - Professional Manufacturing Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                {/* Professional Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30">
                    <div className="text-amber-400 font-semibold text-sm">James Ngene</div>
                    <div className="text-gray-300 text-xs">Manufacturing Engineer</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-emerald-400 text-slate-900 p-3 rounded-full shadow-lg"
              >
                <Award className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-amber-400 text-slate-900 p-3 rounded-full shadow-lg"
              >
                <Lightbulb className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Professional <span className="text-emerald-400">Engineer</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a motivated and detail-oriented Manufacturing, Industrial and Textile Engineer 
                with a strong foundation in industrial processes, sustainable manufacturing, and 
                production optimization. Through academic excellence at Moi University and practical 
                experience gained through multiple internships and professional roles, I have 
                developed comprehensive skills in process control, lean manufacturing, and quality assurance.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My passion lies in driving efficiency, solving complex engineering challenges, and 
                contributing to high-performance manufacturing environments. With expertise in 
                technical tools like AutoCAD and SolidWorks, combined with hands-on experience 
                in maintenance operations and production support, I am well-positioned to support 
                advanced manufacturing goals and sustainable engineering solutions.
              </p>
            </div>

            {/* Personal Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-700/30 backdrop-blur-sm p-4 rounded-xl border border-slate-600 hover:border-amber-400/50 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <info.icon className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{info.label}</h4>
                      <p className="text-gray-400 text-sm mt-1">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-emerald-400 font-semibold text-xl">Key Highlights</h4>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-600 hover:border-emerald-400/50 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-amber-400 to-emerald-400 p-2 rounded-lg">
                        <highlight.icon className="text-slate-900 w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-2">{highlight.title}</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600"
            >
              <h4 className="text-amber-400 font-semibold mb-3">Ready to Collaborate</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                I'm actively seeking opportunities to apply my engineering expertise in challenging 
                manufacturing environments where innovation, sustainability, and process excellence 
                are valued.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 px-6 py-2 rounded-lg font-semibold text-sm hover:from-amber-300 hover:to-emerald-300 transition-all"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;