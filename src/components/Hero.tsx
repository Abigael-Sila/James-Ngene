import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. IMPORTS & ASSETS
// ----------------------------------------------------------------------
// Ensure these paths match exactly where you saved the files in your src/assets folder
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
// 2. TYPES & GLOBALS
// ----------------------------------------------------------------------
declare global {
  interface Window {
    THREE: any;
  }
}

// ----------------------------------------------------------------------
// 3. ANIMATION VARIANTS
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
// 4. THREE.JS BACKGROUND COMPONENT
// ----------------------------------------------------------------------
const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const setupAnimation = () => {
      if (!mountRef.current) return;

      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      
      camera.position.z = 10;
      
      const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new window.THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const objects = new window.THREE.Group();
      scene.add(objects);

      const boltGeometry = new window.THREE.CylinderGeometry(0.5, 0.5, 2, 6);
      const nutGeometry = new window.THREE.CylinderGeometry(0.8, 0.8, 0.5, 6);
      const gearGeometry = new window.THREE.CylinderGeometry(1.5, 1.5, 0.3, 10, 1, false);
      
      const material = new window.THREE.MeshStandardMaterial({
        color: 0xeeeeee, 
        metalness: 0.9,
        roughness: 0.3,
      });

      const createObject = () => {
        const geometries = [boltGeometry, nutGeometry, gearGeometry];
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const object = new window.THREE.Mesh(geometry, material);
        
        object.position.x = (Math.random() - 0.5) * 50;
        object.position.y = (Math.random() - 0.5) * 50;
        object.position.z = (Math.random() - 0.5) * 50;
        
        object.rotation.x = Math.random() * Math.PI;
        object.rotation.y = Math.random() * Math.PI;
        
        objects.add(object);
      };

      for (let i = 0; i < 100; i++) {
        createObject();
      }

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        objects.children.forEach((object: any) => {
          object.rotation.x += 0.01;
          object.rotation.y += 0.01;
        });
        objects.position.x += 0.02;
        objects.position.y += 0.02;
        renderer.render(scene, camera);
      };

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      animate();

      return () => {
        if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    };

    if (typeof window.THREE === 'undefined') {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = setupAnimation;
      document.head.appendChild(script);
    } else {
      setupAnimation();
    }
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-20" />;
};

// ----------------------------------------------------------------------
// 5. CIRCULAR ORBIT CAROUSEL COMPONENT (New)
// ----------------------------------------------------------------------
const CircularCarousel = () => {
  const [rotation, setRotation] = useState(0);
  
  // Carousel Configuration
  const totalImages = images.length;
  const radius = 160; // Radius of the circle in pixels
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
      
      {/* 1. The Orbit Ring (Decorative Dashed Line) */}
      <motion.div 
        className="absolute rounded-full border-2 border-dashed border-emerald-500/30"
        style={{ 
          width: radius * 2, 
          height: radius * 2,
        }}
        animate={{ rotate: rotation }} 
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      
      {/* 2. Center Decorative Element */}
      <div className="absolute z-0 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-sm border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
         <RotateCw className="text-emerald-500/50" size={32} />
      </div>

      {/* 3. The Images Orbiting */}
      <div className="absolute h-full w-full flex items-center justify-center">
        {images.map((img, index) => {
          // Calculate the angle for this specific image
          // index * step gives base position. + rotation adds the spin.
          const currentAngle = index * angleStep + rotation;
          
          // Convert Degrees to Radians for Math.cos/sin
          const rad = (currentAngle * Math.PI) / 180;
          
          // Calculate X and Y coordinates relative to center
          // We swap cos/sin or +/- to adjust starting position (0 deg is usually 3 o'clock)
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <motion.div
              key={index}
              className="absolute rounded-full border-4 border-slate-800 bg-slate-900 shadow-xl overflow-hidden"
              style={{
                width: '100px',
                height: '100px',
                // Center the item on its calculated point
                x: x, 
                y: y,
              }}
              // Animate the position change smoothly
              animate={{ x, y }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="h-full w-full object-cover"
              />
              {/* Optional: Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* 4. Controls */}
      <div className="absolute bottom-0 flex gap-4">
         <button 
           onClick={rotatePrev} 
           className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-emerald-500 hover:text-black transition-all border border-slate-700"
         >
           <ChevronLeft size={20} />
         </button>
         <button 
           onClick={rotateNext} 
           className="rounded-full bg-slate-800/80 p-3 text-white hover:bg-emerald-500 hover:text-black transition-all border border-slate-700"
         >
           <ChevronRight size={20} />
         </button>
      </div>

    </div>
  );
};


// ----------------------------------------------------------------------
// 6. HERO COMPONENT
// ----------------------------------------------------------------------
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12181F] font-inter text-white">
      {/* Three.js animated background */}
      <ThreeJSBackground />

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