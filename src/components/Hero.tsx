import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, Phone, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-navy-900/95" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Available for Opportunities</span>
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-gray-300 text-sm">Kitui, Kenya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <motion.span 
              className="text-amber-400"
              whileHover={{ scale: 1.05 }}
            >
              James
            </motion.span>{' '}
            <motion.span 
              className="text-emerald-400"
              whileHover={{ scale: 1.05 }}
            >
              Ngene
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
                Manufacturing, Industrial & Textile Engineer
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400">
              <motion.span 
                whileHover={{ scale: 1.05, color: '#f59e0b' }}
                className="cursor-default"
              >
                Process Optimization
              </motion.span>
              <span className="text-emerald-400">•</span>
              <motion.span 
                whileHover={{ scale: 1.05, color: '#10b981' }}
                className="cursor-default"
              >
                Sustainable Manufacturing
              </motion.span>
              <span className="text-amber-400">•</span>
              <motion.span 
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                className="cursor-default"
              >
                CAD Design
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Recent Moi University graduate specializing in manufacturing processes, industrial systems, 
              and sustainable engineering solutions.
            </p>
            <p className="text-base text-gray-400 mb-10 leading-relaxed">
              Experienced in lean manufacturing, quality control, and production optimization through 
              hands-on internships at KIRDI and Buffalo Millers. Ready to drive innovation in modern 
              manufacturing environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href="mailto:ngenejames43@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-semibold hover:from-amber-300 hover:to-yellow-400 transition-all shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ngene-james-20625b371/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all shadow-lg"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center items-center space-x-6 mb-16"
          >
            <motion.a
              href="https://github.com/ngenejames"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 backdrop-blur-sm"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="tel:0718254131"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-emerald-400 transition-colors p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 backdrop-blur-sm"
              aria-label="Phone Number"
            >
              <Phone size={24} />
            </motion.a>
            
            {/* Quick Contact Info */}
            <div className="hidden md:flex items-center space-x-4 ml-8 pl-8 border-l border-slate-700">
              <div className="text-center">
                <div className="text-amber-400 font-semibold text-sm">Quick Contact</div>
                <div className="text-gray-400 text-xs">ngenejames43@gmail.com</div>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { number: "2025", label: "Graduate", color: "text-amber-400" },
              { number: "2+", label: "Internships", color: "text-emerald-400" },
              { number: "5+", label: "Projects", color: "text-blue-400" },
              { number: "100%", label: "Dedicated", color: "text-purple-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ y: 5, scale: 1.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-400 transition-colors p-3 bg-slate-800/30 backdrop-blur-sm rounded-full hover:bg-slate-700/50"
          aria-label="Scroll to About section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;