import React, { useRef, useState, useEffect } from 'react'; // Added useState and useEffect for CircularCarousel
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
// NEW IMPORTS FOR 3D BACKGROUND
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';

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
// 2. ANIMATION VARIANTS (No Change)
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
// 3. 3D GEAR COMPONENT (Using Three.js) - UPDATED
// ----------------------------------------------------------------------

// A modular 3D gear shape with improved visual realism.
const Gear3D = ({ position, rotationSpeed, color, size }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        // Rotate the mesh every frame
        meshRef.current.rotation.z += delta * rotationSpeed * 1.5; // Slightly faster for more motion
    });

    // Material setup for a basic metallic look (Slightly darker for better contrast)
    const metallicMaterial = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.9,
        roughness: 0.3, // Make it shinier
        transparent: true,
        opacity: 0.3, // Keep it subtle in the background
    });

    // Material for the darker, recessed parts (The "holes")
    const recessedMaterial = new THREE.MeshStandardMaterial({ 
        color: '#0F172A', 
        metalness: 0.9, 
        roughness: 0.5 
    });

    const numTeeth = 16;
    const teethRadius = 1.1;
    const teethAngleStep = (Math.PI * 2) / numTeeth;

    return (
        <group ref={meshRef} position={position} scale={[size, size, size]}>
            
            {/* Main Body Rim (Cylinder with slightly increased thickness) */}
            <Cylinder args={[teethRadius, teethRadius, 0.4, 32]} material={metallicMaterial} />
            
            {/* Inner Web (Recessed part of the gear) */}
            <Cylinder args={[0.7, 0.7, 0.4, 32]} position={[0, 0, 0]} material={recessedMaterial} />
            
            {/* Teeth (Simple boxes rotated around the perimeter) */}
            {[...Array(numTeeth)].map((_, i) => (
                <Box
                    key={i}
                    args={[0.2, 0.2, 0.5]} // Extrude the box slightly on the Z-axis for depth
                    position={[
                        (teethRadius + 0.1) * Math.cos(i * teethAngleStep),
                        (teethRadius + 0.1) * Math.sin(i * teethAngleStep),
                        0,
                    ]}
                    rotation={[0, 0, i * teethAngleStep]}
                    material={metallicMaterial}
                />
            ))}
            
            {/* Central Hub (Slightly smaller, recessed) */}
            <Cylinder args={[0.3, 0.3, 0.4, 32]} position={[0, 0, 0]} material={recessedMaterial} />
            
        </group>
    );
};


// ----------------------------------------------------------------------
// 4. WEBGL BACKGROUND COMPONENT (Three.js Canvas) - UPDATED POSITIONS
// ----------------------------------------------------------------------

const WebGLGearBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="!w-full !h-full">
                {/* Ambient Lighting - Soft fill light */}
                <ambientLight intensity={0.8} />
                
                {/* Key Light (Brighter for better metallic sheen) */}
                <pointLight position={[10, 10, 10]} intensity={100} color={'#F0F9FF'} />
                
                {/* Fill Light */}
                <pointLight position={[-10, -10, -10]} intensity={60} color={'#334155'} />

                {/* Gear 1: Large Top Right (Clockwise) */}
                <Gear3D 
                    position={[3, 3, -1]} // Moved slightly further back
                    rotationSpeed={0.5} 
                    color={'#64748B'} // Slate 500
                    size={2.5} 
                />

                {/* Gear 2: Smaller Top Center (Counter-Clockwise - Meshing Effect) */}
                {/* Adjusted position to visually align with Gear 1 */}
                <Gear3D 
                    position={[0.5, 1.5, -0.5]} 
                    rotationSpeed={-1.2} 
                    color={'#334155'} // Slate 700
                    size={1.5} 
                />

                {/* Gear 3: Large Bottom Left (Clockwise) */}
                <Gear3D 
                    position={[-4, -4, -2]} // Deepest layer
                    rotationSpeed={0.4} 
                    color={'#475569'} 
                    size={3} 
                />
                
                {/* Gear 4: Medium Floating Gear (Center-ish Right) */}
                <Gear3D 
                    position={[2, -1, 0]} 
                    rotationSpeed={-0.8} 
                    color={'#64748B'} 
                    size={1.8} 
                />
                
                {/* Simple Background Plane - Darker and further back */}
                <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -5]}>
                    <meshStandardMaterial color="#0A1016" metalness={0.5} roughness={0.8} />
                </Plane>

                {/* Optional: OrbitControls for debugging (Remove in production) */}
                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    );
};


// ----------------------------------------------------------------------
// 5. CIRCULAR ORBIT CAROUSEL COMPONENT (No Change)
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
                                // Ensures the orbiting elements stay on top of the 3D canvas
                                zIndex: 10, 
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
// 6. HERO COMPONENT (Updated Background)
// ----------------------------------------------------------------------
const Hero: React.FC = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12181F] font-inter text-white">
            
            {/* *** UPDATED BACKGROUND: WebGL (Three.js) Gears *** */}
            <WebGLGearBackground />

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