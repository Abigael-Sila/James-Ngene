import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  BarChart3, 
  Monitor, 
  Wrench, 
  Shield, 
  FileText,
  Database,
  Lightbulb
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Manufacturing & Industrial",
      icon: Settings,
      color: "from-amber-400 to-yellow-500",
      skills: [
        { name: "Manufacturing Process Optimization", level: 90 },
        { name: "Lean Manufacturing & Continuous Improvement", level: 85 },
        { name: "Production Planning & Control", level: 88 },
        { name: "Industrial Safety Standards", level: 92 },
        { name: "Quality Assurance & Control", level: 87 }
      ]
    },
    {
      title: "Design & Engineering",
      icon: Monitor,
      color: "from-emerald-400 to-teal-500",
      skills: [
        { name: "CAD Design (AutoCAD, SolidWorks)", level: 88 },
        { name: "Engineering Project Management", level: 85 },
        { name: "Technical Reporting & Documentation", level: 90 },
        { name: "Process Control", level: 83 },
        { name: "Material Science", level: 80 }
      ]
    },
    {
      title: "Data & Analysis",
      icon: BarChart3,
      color: "from-blue-400 to-indigo-500",
      skills: [
        { name: "Data Analysis (Excel, MATLAB)", level: 82 },
        { name: "Python Basics", level: 75 },
        { name: "Statistical Process Control", level: 78 },
        { name: "Performance Monitoring", level: 85 },
        { name: "Research & Development", level: 88 }
      ]
    },
    {
      title: "Technical & Digital",
      icon: Database,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Microsoft Office Suite", level: 95 },
        { name: "Computer Hardware & Software", level: 87 },
        { name: "Digital Communication Tools", level: 90 },
        { name: "Database Management", level: 80 },
        { name: "Technical Troubleshooting", level: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-amber-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across manufacturing processes, engineering design, 
            and modern industrial technologies gained through academic excellence and practical experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-amber-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Wrench, title: "Process Control", desc: "Advanced manufacturing process optimization" },
            { icon: Shield, title: "Safety Standards", desc: "Industrial safety protocols & compliance" },
            { icon: FileText, title: "Documentation", desc: "Technical reporting & project documentation" },
            { icon: Lightbulb, title: "Innovation", desc: "Sustainable solutions & creative problem solving" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(59, 130, 246, 0.1)"
              }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-emerald-400/30 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;