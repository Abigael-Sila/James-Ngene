import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
// Import all the images for the carousel
import JamesNgene1 from '../assets/Ngene.png'; // Assuming this is the main portrait
// Placeholder names for the newly uploaded files
// You must adjust the actual import paths for these files in your project:
import GradImage1 from '../assets/ngene grad 1.jpg';
import GradImage2 from '../assets/ngene grad 2.jpg';
import GradImage3 from '../assets/ngene grad 3.jpg';
import GradImage4 from '../assets/ngene grad 4.jpg';
import Portrait from '../assets/Ngene.jpg';

// Define the list of images for the carousel
const images = [
  { src: JamesNgene1, alt: "Professional portrait" },
  { src: GradImage1, alt: "Graduation photo 1" },
  { src: GradImage2, alt: "Graduation photo 2" },
  { src: GradImage3, alt: "Graduation photo 3" },
  { src: GradImage4, alt: "Graduation photo 4" },
  { src: Portrait, alt: "Alternative portrait" },
];

// Declare THREE as a global variable to satisfy TypeScript
declare global {
  interface Window {
    THREE: any;
  }
}

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

// Component for the 3D animated background (kept unchanged)
const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Function to set up the animation
    const setupAnimation = () => {
      if (!mountRef.current) return;

      // Basic Three.js setup
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Position the camera
      camera.position.z = 10;

      // Add ambient light for overall illumination
      const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Add a directional light for highlights and shadows
      const directionalLight = new window.THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Create a group to hold all the animated objects
      const objects = new window.THREE.Group();
      scene.add(objects);

      // Define object geometries and materials
      const boltGeometry = new window.THREE.CylinderGeometry(0.5, 0.5, 2, 6);
      const nutGeometry = new window.THREE.CylinderGeometry(0.8, 0.8, 0.5, 6);
      const gearGeometry = new window.THREE.CylinderGeometry(1.5, 1.5, 0.3, 10, 1, false);

      const material = new window.THREE.MeshStandardMaterial({
        color: 0xeeeeee, // A brighter metallic color
        metalness: 0.9,
        roughness: 0.3,
      });

      // Function to create a random object
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

      // Create a number of objects
      for (let i = 0; i < 100; i++) {
        createObject();
      }

      // Animation loop
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);

        // Rotate each object in the group
        objects.children.forEach((object: any) => {
          object.rotation.x += 0.01;
          object.rotation.y += 0.01;
        });

        // Slowly move objects
        objects.position.x += 0.02;
        objects.position.y += 0.02;

        renderer.render(scene, camera);
      };

      // Handle window resizing
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
      animate();

      return () => {
        // Clean up on component unmount
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    };

    // If Three.js is not loaded, dynamically add the script
    if (typeof window.THREE === 'undefined') {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = () => {
        // Once the script is loaded, trigger a re-render to start the animation
        setupAnimation();
      };
      document.head.appendChild(script);
    } else {
      // If Three.js is already loaded, just set up the animation
      setupAnimation();
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-20" />;
};


// ----------------------------------------------------------------------
// NEW CAROUSEL COMPONENT
// ----------------------------------------------------------------------

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const slideDuration = 4000; // 4 seconds for auto-slide

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(goToNext, slideDuration);
    return () => clearTimeout(timer); // Cleanup the timer on unmount/re-render
  }, [currentIndex, goToNext]);

  // Framer Motion variants for slide transition
  const slideVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 0.8,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const currentImage = images[currentIndex];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
    >
      <div className="relative rounded-lg p-2 aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
        {/* Metallic Shine Effect */}
        <div className="absolute inset-0 z-10 rounded-lg border border-white/10" />
        <div className="absolute -inset-px z-0 rounded-lg bg-gradient-to-br from-emerald-500 via-transparent to-amber-500 opacity-30 blur-lg" />
        
        {/* Carousel Content */}
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 h-full w-full rounded-md object-cover"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/70 hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition hover:bg-black/70 hover:text-white"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-emerald-400 scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay for the Circular/Gears effect (optional, matching your reference image) */}
        {/* This effect is complex to achieve purely with Tailwind, but we can add a simple geometric overlay */}
        <div 
          className="absolute inset-0 z-20 rounded-lg opacity-20 pointer-events-none" 
          style={{
            // Simplified overlay for visual flair resembling the circular outline/gears in the inspiration image
            backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(20, 20, 20, 0.5) 100%)',
            boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)'
          }}
        />

      </div>
    </motion.div>
  );
};


// ----------------------------------------------------------------------
// UPDATED HERO COMPONENT
// ----------------------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12181F] font-inter text-white">
      {/* Three.js animated background */}
      <ThreeJSBackground />

      {/* Main content container with a higher z-index to sit on top of the background */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Text Content (unchanged) */}
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

          {/* Right Side: Image CAROUSEL */}
          <div className="hidden lg:block">
            <ImageCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;