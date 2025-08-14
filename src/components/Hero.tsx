import React, { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';
// Import the image from the assets folder
import JamesNgene from '../assets/Ngene.png';

// Declare THREE as a global variable to satisfy TypeScript
declare global {
  interface Window {
    THREE: any;
  }
}

// Load Three.js from a CDN for this self-contained React app
const loadThreeJS = () => {
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  script.onload = () => {
    console.log('Three.js loaded successfully!');
  };
  document.head.appendChild(script);
};

// Check if three.js is loaded, and if not, load it.
if (typeof window !== 'undefined' && typeof window.THREE === 'undefined') {
  loadThreeJS();
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

// Component for the 3D animated background
const ThreeJSBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure Three.js and the ref are available before proceeding
    if (!window.THREE || !mountRef.current) {
      // Return early if not ready. The effect will re-run when the state changes.
      return;
    }

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
      color: 0x808080, // A metallic grey
      metalness: 0.8,
      roughness: 0.2,
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
    for (let i = 0; i < 50; i++) {
      createObject();
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate each object in the group
      objects.children.forEach((object: any) => {
        object.rotation.x += 0.005;
        object.rotation.y += 0.005;
      });

      // Slowly move objects
      objects.position.x += 0.01;
      objects.position.y += 0.01;

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
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-10" />;
};

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

          {/* Right Side: Image - Hidden on small screens, shown on large screens */}
          <motion.div
            className="hidden lg:block relative mx-auto w-full max-w-sm lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {/* The inline style is used here for a dynamic gradient that can't be easily replicated with standard Tailwind classes. */}
            <div className="relative rounded-lg p-2 " style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
              {/* Metallic Shine Effect */}
              <div className="absolute inset-0 z-10 rounded-lg border border-white/10" />
              <div className="absolute -inset-px z-0 rounded-lg bg-gradient-to-br from-emerald-500 via-transparent to-amber-500 opacity-30 blur-lg" />
              
              {/* The image */}
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
