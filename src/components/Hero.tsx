import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. IMPORTS & ASSETS
// ----------------------------------------------------------------------
// *** FIXED: Using Ngene.png as requested. ***
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
// 3. INDUSTRIAL GEAR SVG COMPONENT (Updated for Realistic Depth)
// ----------------------------------------------------------------------

const IndustrialGearSVG = ({ className, size = 100 }: { className?: string, size?: number }) => (
  // ViewBox is set to 0 0 100 100 for easy scaling
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={className}
  >
    {/* Base Metal Color (Slate 800) */}
    <defs>
      <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'currentColor', stopOpacity: 0.8}} />
        <stop offset="100%" style={{stopColor: 'currentColor', stopOpacity: 0.3}} />
      </linearGradient>
      
      {/* Pattern for Bolt Holes */}
      <pattern id="boltHoles" patternUnits="userSpaceOnUse" width="10" height="10">
        <circle cx="5" cy="5" r="1.5" fill="#12181F" />
      </pattern>
    </defs>

    {/* Gear Body - Simulating Depth */}
    {/* Shadow layer (Slightly offset and darker) */}
    <circle cx="50.5" cy="50.5" r="45" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="1" />

    {/* Outer Teeth (Updated shape for realism) */}
    <path 
      d="M50 5 L55 0 L50 5 L45 0 Z M50 95 L55 100 L50 95 L45 100 Z M5 50 L0 55 L5 50 L0 45 Z M95 50 L100 55 L95 50 L100 45 Z M22.5 7.5 L27.5 2.5 L22.5 7.5 L17.5 2.5 Z M77.5 7.5 L82.5 2.5 L77.5 7.5 L72.5 2.5 Z M7.5 22.5 L2.5 27.5 L7.5 22.5 L2.5 17.5 Z M92.5 22.5 L97.5 27.5 L92.5 22.5 L87.5 17.5 Z M7.5 77.5 L2.5 82.5 L7.5 77.5 L2.5 72.5 Z M92.5 77.5 L97.5 82.5 L92.5 77.5 L87.5 72.5 Z M22.5 92.5 L27.5 97.5 L22.5 92.5 L17.5 97.5 Z M77.5 92.5 L82.5 97.5 L77.5 92.5 L72.5 97.5 Z" 
      fill="url(#metalGradient)" 
      stroke="#333" 
      strokeWidth="0.5"
    />

    {/* Main Circular Body */}
    <circle cx="50" cy="50" r="40" fill="url(#metalGradient)" stroke="#333" strokeWidth="1" />

    {/* Inner Spokes/Web */}
    <circle cx="50" cy="50" r="30" fill="#12181F" stroke="#333" strokeWidth="1" />

    {/* Spokes that connect the hub to the inner rim */}
    <rect x="48.5" y="20" width="3" height="30" rx="1.5" fill="url(#metalGradient)" transform="rotate(0 50 50)" />
    <rect x="48.5" y="20" width="3" height="30" rx="1.5" fill="url(#metalGradient)" transform="rotate(90 50 50)" />
    <rect x="48.5" y="20" width="3" height="30" rx="1.5" fill="url(#metalGradient)" transform="rotate(180 50 50)" />
    <rect x="48.5" y="20" width="3" height="30" rx="1.5" fill="url(#metalGradient)" transform="rotate(270 50 50)" />
    
    {/* Central Hub with gradient for realism */}
    <circle cx="50" cy="50" r="10" fill="url(#metalGradient)" stroke="#333" strokeWidth="1" />
    
    {/* Bolt Holes on the Outer Body (pattern fill is complex to implement directly with rotation, so we use manual circles for visual effect) */}
    <circle cx="50" cy="15" r="2" fill="#12181F" />
    <circle cx="85" cy="50" r="2" fill="#12181F" />
    <circle cx="50" cy="85" r="2" fill="#12181F" />
    <circle cx="15" cy="50" r="2" fill="#12181F" />
    
    {/* Final Center Hole */}
    <circle cx="50" cy="50" r="4" fill="#12181F" />
  </svg>
);


const MovingGearsBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 1. Large Top Right Gear */}
      <motion.div
        className="absolute -top-32 -right-32 text-slate-700/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <IndustrialGearSVG size={700} />
      </motion.div>

      {/* 2. Smaller Connecting Gear (Top Center) */}
      <motion.div
        className="absolute top-20 right-1/2 -translate-x-1/2 text-slate-600/20"
        animate={{ rotate: -360 }} // Counter-clockwise for meshing look
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        <IndustrialGearSVG size={400} />
      </motion.div>

      {/* 3. Large Bottom Left Gear */}
      <motion.div
        className="absolute -bottom-48 -left-48 text-slate-700/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        <IndustrialGearSVG size={800} />
      </motion.div>

      {/* 4. Medium Floating Gear (Center-ish Right) */}
      <motion.div
        className="absolute bottom-1/4 right-24 text-slate-800/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        <IndustrialGearSVG size={300} />
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