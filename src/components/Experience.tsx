import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  MapPin,
  Building,
  Award,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Manufacturing & Textile Departments Intern",
      company: "Kenya Industrial Research and Development Institute (KIRDI)",
      location: "Nairobi, Kenya",
      period: "May - July 2024",
      type: "Internship",
      description: "Gained hands-on experience in industrial research, process improvement, and quality control within a government-led innovation and manufacturing environment.",
      achievements: [
        "Supported process monitoring, lab testing, and technical documentation across textile and general manufacturing units",
        "Assisted engineers in analyzing production efficiency, material performance, and equipment functionality",
        "Participated in product development trials, quality inspections, and standards compliance activities",
        "Developed practical understanding of sustainable materials and eco-friendly production alternatives",
        "Contributed to data collection and reporting on production output and process deviations"
      ],
      skills: ["Process Monitoring", "Quality Control", "Technical Documentation", "Sustainable Materials", "Data Analysis"],
      icon: Building,
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      title: "Industrial Attachment Intern", 
      company: "Buffalo Millers",
      location: "Eldoret, Kenya",
      period: "2023",
      type: "Internship",
      description: "Gained practical experience in industrial manufacturing processes, production optimization, and quality assurance in a food processing environment.",
      achievements: [
        "Observed and participated in industrial manufacturing processes",
        "Learned production planning and scheduling techniques",
        "Assisted in quality control procedures and testing protocols",
        "Supported maintenance operations and equipment troubleshooting",
        "Gained insight into supply chain management and logistics"
      ],
      skills: ["Production Planning", "Quality Assurance", "Equipment Maintenance", "Supply Chain", "Food Safety"],
      icon: Zap,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      title: "Computer Technician Assistant",
      company: "RK Computers",
      location: "Eldoret, Kenya",
      period: "Part-time",
      type: "Technical Role",
      description: "Provided comprehensive computer system support including installation, configuration, and troubleshooting of hardware and software components.",
      achievements: [
        "Performed installation and configuration of computer systems and software packages",
        "Diagnosed and repaired hardware issues including motherboards, RAM, hard drives, and power supplies",
        "Provided basic network support, including LAN setup and printer configuration", 
        "Successfully reduced client downtime by quickly identifying and resolving over 50 hardware/software issues",
        "Gained proficiency in Windows OS installation, antivirus setup, and routine system maintenance"
      ],
      skills: ["Hardware Troubleshooting", "Software Installation", "Network Support", "System Maintenance", "Customer Service"],
      icon: Users,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Maintenance Assistant",
      company: "120 Hardware",
      location: "Kitui, Kenya", 
      period: "Jan - June 2020",
      type: "Technical Role",
      description: "Supported machinery maintenance and process continuity in a busy hardware environment, working directly with technicians to optimize machine reliability.",
      achievements: [
        "Assisted with preventive maintenance and breakdown response for electrical/mechanical systems",
        "Participated in installation of production equipment and ensured proper calibration",
        "Maintained maintenance logs and followed safety protocols on-site",
        "Helped improve machine uptime by 15% through routine inspections and quick interventions"
      ],
      skills: ["Preventive Maintenance", "Equipment Calibration", "Safety Protocols", "Process Optimization", "Technical Documentation"],
      icon: Award,
      color: "from-amber-400 to-yellow-500"
    },
    {
      id: 5,
      title: "Data Entry Clerk",
      company: "County Government of Kitui",
      location: "Kitui, Kenya",
      period: "March - April 2021", 
      type: "Administrative Role",
      description: "Responsible for inputting vaccination data into official databases with focus on accuracy and data integrity during critical public health initiatives.",
      achievements: [
        "Accurately input vaccination data into official government database systems",
        "Organized and maintained comprehensive vaccination records",
        "Ensured proper documentation and updating of all vaccinated individuals' information",
        "Contributed to public health data management during critical vaccination campaigns"
      ],
      skills: ["Data Entry", "Database Management", "Record Keeping", "Attention to Detail", "Public Health Systems"],
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-navy-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diverse professional experience spanning manufacturing, industrial research, technical support, 
            and administrative roles, demonstrating adaptability and technical excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-emerald-400 to-blue-400"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center border-4 border-slate-800 shadow-lg`}>
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-400/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4 text-emerald-400" />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-amber-400" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${experience.color} text-white`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-emerald-400 font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-amber-400 font-semibold mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-emerald-400/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;