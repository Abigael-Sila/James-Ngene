import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. IMPORTS & ASSETS
// ----------------------------------------------------------------------
// NOTE: I have updated this to .jpg based on your error logs. 
import JamesNgenePortrait from '../assets/Ngene.png'; 
import GradImage1 from '../assets/ngene grad 1.jpg';
import GradImage2 from '../assets/ngene grad 2.jpg';
import GradImage3 from '../assets/ngene grad 3.jpg';
import GradImage4 from '../assets/ngene grad 4.jpg';

// Define the list of images
const images = [
  { src: JamesNgenePortrait, alt: "Professional Portrait" },
  { src: GradImage1, alt: "Graduation 1" },
  { src: GradImage2, alt: "Graduation 2" },
  { src: GradImage3, alt: "Graduation 3" },
  { src: GradImage4, alt: "Graduation 4" },
];

// ----------------------------------------------------------------------
// 2. ANIMATION VARIANTS
// ----------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ----------------------------------------------------------------------
// 3. MOVING GEARS BACKGROUND (New)
// ----------------------------------------------------------------------

const GearIcon = ({ className, size = 100 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" opacity="0" />
    <path d="M12 22a10 10 0 0 1-10-10" opacity="0"/>
    {/* Complex Gear Path */}
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MovingGearsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 1. Large Top Right Gear */}
      <motion.div
        className="absolute -top-20 -right-20 text-slate-700/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <GearIcon size={500} />
      </motion.div>

      {/* 2. Smaller Connecting Gear (Top Right) */}
      <motion.div
        className="absolute top-64 right-64 text-slate-600/20"
        animate={{ rotate: -360 }} // Counter-clockwise
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        <GearIcon size={300} />
      </motion.div>

      {/* 3. Large Bottom Left Gear */}
      <motion.div
        className="absolute -bottom-32 -left-32 text-slate-700/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        <GearIcon size={600} />
      </motion.div>

      {/* 4. Medium Floating Gear (Center-ish Left) */}
      <motion.div
        className="absolute top-1/4 left-10 text-slate-800/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        <GearIcon size={200} />
      </motion.div>

       {/* 5. Extra Small Gear (Background accent) */}
       <motion.div
        className="absolute bottom-1/4 right-1/3 text-slate-800/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <GearIcon size={150} />
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. CIRCULAR ORBIT CAROUSEL COMPONENT
// ----------------------------------------------------------------------
const CircularCarousel = () => {
  const [rotation, setRotation] = useState(0);
  
  // Carousel Configuration
  const totalImages = images.length;
  const radius = 160; 
  const angleStep = 360 / totalImages;

  const rotateNext = () => setRotation((prev) => prev - angleStep);
  const rotatePrev = () => setRotation((prev) => prev + angleStep);

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - angleStep);
    }, 4000);
    return () => clearInterval(interval);
  }, [angleStep]);

  return (
    <div className="relative flex h-[450px] w-full items-center justify-center overflow-visible">
      
      {/* Orbit Ring */}
      <motion.div 
        className="absolute rounded-full border-2 border-dashed border-emerald-500/30"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: rotation }} 
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      
      {/* Center Element */}
      <div className="absolute z-0 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
         <RotateCw className="text-emerald-500/50" size={32} />
      </div>

      {/* Images Orbiting */}
      <div className="absolute h-full w-full flex items-center justify-center">
        {images.map((img, index) => {
          const currentAngle = index * angleStep + rotation;
          const rad = (currentAngle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <motion.div
              key={index}
              className="absolute rounded-full border-4 border-slate-800 bg-slate-900 shadow-xl overflow-hidden"
              style={{
                width: '100px',
                height: '100px',
                x: x, 
                y: y,
              }}
              animate={{ x, y }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 flex gap-4">
         <button onClick={rotatePrev} className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-emerald-500 hover:text-black transition-all border border-slate-700">
           <ChevronLeft size={20} />
         </button>
         <button onClick={rotateNext} className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-emerald-500 hover:text-black transition-all border border-slate-700">
           <ChevronRight size={20} />
         </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 5. HERO COMPONENT
// ----------------------------------------------------------------------
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12181F] font-inter text-white">
      
      {/* NEW BACKGROUND: Moving Gears */}
      <MovingGearsBackground />

      {/* Main content container */}
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
                href="#contact"
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

          {/* Right Side: Circular Carousel */}
          <div className="hidden lg:block relative">
             <CircularCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;