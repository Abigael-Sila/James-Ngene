import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';
// The path to the image must be enclosed in quotes to be a valid string
import JamesNgene from '../assets/Ngene.png';

// Animation variants for cleaner reuse with explicit typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12181F] font-inter text-white">
      {/* Subtle Background Accent */}
      <div className="absolute -left-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute -bottom-72 -right-72 h-[40rem] w-[40rem] rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <motion.p variants={itemVariants} className="mb-4 text-lg font-medium text-emerald-400">
              James Ngene
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Manufacturing, Industrial & <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Textile Engineer
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 lg:mx-0">
              A recent Moi University graduate dedicated to optimizing manufacturing processes and pioneering sustainable engineering solutions.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                href="#contact" // Link to your contact section
                className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-8 py-3 font-semibold text-black transition-transform duration-300 hover:bg-emerald-400 sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ngene-james-20625b371/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-slate-600 px-8 py-3 font-semibold text-slate-300 transition-colors duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400 sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {/* The inline style is used here for a dynamic gradient that can't be easily replicated with standard Tailwind classes. */}
            <div className="relative rounded-lg p-2 " style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
              {/* Metallic Shine Effect */}
              <div className="absolute inset-0 z-10 rounded-lg border border-white/10" />
              <div className="absolute -inset-px z-0 rounded-lg bg-gradient-to-br from-emerald-500 via-transparent to-amber-500 opacity-30 blur-lg" />
              
              {/* Replace with actual image */}
              <img
                src={JamesNgene} 
                alt="Professional portrait of James Ngene"
                className="relative z-10 h-auto w-full rounded-md object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
