import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, CheckCircle2, Factory, Cog, TestTube2, Cpu, Scale } from 'lucide-react';

// Animation variants for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

// Skill Item Component for reusability
const SkillItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <motion.div variants={itemVariants} className="flex items-center gap-3">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
      <Icon size={18} />
    </div>
    <span className="text-slate-300">{text}</span>
  </motion.div>
);

const About: React.FC = () => {
  const skills = [
    { icon: Factory, text: 'Manufacturing Process Optimization' },
    { icon: Scale, text: 'Lean Manufacturing & Six Sigma Basics' },
    { icon: Cpu, text: 'CAD Design (AutoCAD, SolidWorks)' },
    { icon: Cog, text: 'Production Planning & Quality Control' },
    { icon: TestTube2, text: 'Sustainable Materials & Engineering' },
    { icon: CheckCircle2, text: 'Industrial Safety & Compliance' },
  ];

  return (
    <section id="about" className="overflow-hidden bg-[#12181F] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-base font-semibold leading-7 text-emerald-400">About Me</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Passion for Engineering Excellence
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {/* Left Column: Image Card */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* The inline style is used here for a dynamic gradient that can't be easily replicated with standard Tailwind classes. */}
            <div className="relative w-full max-w-sm rounded-lg p-2" style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                {/* Metallic Shine Effect */}
                <div className="absolute inset-0 z-10 rounded-lg border border-white/10" />
                <div className="absolute -inset-px z-0 rounded-lg bg-gradient-to-br from-emerald-500 via-transparent to-amber-500 opacity-20 blur-lg" />
                
                {/* Replace with actual image */}
                <img
                    src="https://via.placeholder.com/600x700/1f2937/ffffff?text=James+Ngene" // <-- IMPORTANT: Replace this placeholder
                    alt="Professional portrait of James Ngene"
                    className="relative z-10 h-auto w-full rounded-md object-cover"
                />
            </div>
          </motion.div>

          {/* Right Column: Narrative & Skills */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Narrative Section */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                From Concept to Creation
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I am a motivated and detail-oriented Manufacturing, Industrial, and Textile Engineer, recently graduated from Moi University. My academic journey and hands-on internships have equipped me with a strong foundation in industrial processes, sustainable manufacturing, and production optimization.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Through practical experience at the{' '}
                <strong className="font-semibold text-amber-300">Kenya Industrial Research and Development Institute (KIRDI)</strong> and{' '}
                <strong className="font-semibold text-amber-300">Buffalo Millers</strong>, I have honed my skills in process control, lean manufacturing, and quality assurance. My passion lies in driving efficiency, solving complex engineering challenges, and contributing to high-performance manufacturing environments.
              </p>
              <motion.a
                href="/path-to-your-cv.pdf" // <-- IMPORTANT: Update this path
                download
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-8 py-3 font-semibold text-black transition-transform duration-300 hover:bg-emerald-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download My CV
              </motion.a>
            </div>

            {/* Skills Section */}
            <motion.div
              className="w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="rounded-2xl bg-slate-500/5 p-8 ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold tracking-tight text-white mb-6">Core Competencies</h3>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  {skills.map((skill) => (
                    <SkillItem key={skill.text} icon={skill.icon} text={skill.text} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
