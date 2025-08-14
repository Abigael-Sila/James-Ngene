import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  Trophy,
  Star
} from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      field: "Manufacturing, Industrial and Textile Engineering",
      institution: "Moi University",
      location: "Eldoret, Uasin Gishu, Kenya",
      period: "January 2021 - July 2025",
      status: "Graduated",
      minor: "Sustainable Manufacturing",
      description: "Comprehensive engineering program focusing on manufacturing processes, industrial systems, and textile technology with emphasis on sustainable practices and innovation.",
      keyAchievements: [
        "Successfully completed capstone project on biodegradable potting bags",
        "Active member of University Technology Students Association",
        "Participated in student innovation showcase",
        "Presented final year project to department panel",
        "Engaged in academic workshops and innovation challenges"
      ],
      coursework: [
        "Manufacturing Process Optimization",
        "Industrial Systems Design",
        "Textile Engineering Principles",
        "Sustainable Manufacturing Practices",
        "Quality Control & Assurance",
        "Production Planning & Control",
        "Materials Science & Engineering",
        "CAD Design & Engineering Graphics"
      ],
      activities: [
        "University Technology Students Association - Active Member",
        "School Football Team - Team Member",
        "Student Innovation Showcase Participant",
        "Academic Workshops & Peer Training Programs",
        "Inter-school and Interdepartmental Tournaments"
      ],
      icon: GraduationCap,
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      field: "Science and Mathematics Focus",
      institution: "Kisasi Boys High School",
      location: "Kitui, Kenya",
      period: "2016 - 2019",
      status: "Completed",
      grade: "B+",
      description: "Strong foundation in sciences and mathematics with active participation in leadership roles and extracurricular activities.",
      keyAchievements: [
        "Achieved Grade B+ in KCSE examination",
        "Served as student leader in Student Council",
        "Active participation in Science Club activities",
        "Member of Debate Club with strong public speaking skills",
        "Demonstrated leadership and teamwork capabilities"
      ],
      skillsAcquired: [
        "Leadership & Public Speaking",
        "Teamwork & Collaboration", 
        "Time Management",
        "Critical Thinking & Problem Solving",
        "Communication Skills",
        "Scientific Research Methods",
        "Mathematical Problem Solving"
      ],
      activities: [
        "Student Council - Student Leader",
        "Science Club - Active Member",
        "Debate Club - Active Member"
      ],
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const certifications = [
    {
      title: "Computer Packages Certification",
      institution: "St. John Paul II Institute",
      period: "June 2020 - December 2020",
      grade: "Distinction",
      skills: [
        "Microsoft Office Suite (Word, Excel, PowerPoint, Access)",
        "Internet & Email Use",
        "Typing & Document Formatting",
        "Computer Hardware & Software",
        "Digital Communication Tools"
      ],
      icon: Trophy,
      color: "from-amber-400 to-yellow-500"
    },
    {
      title: "Safety and First Aid Awareness Training",
      institution: "Moi University Engineering Department",
      period: "2022",
      skills: [
        "Industrial Safety Protocols",
        "Emergency Response Procedures",
        "First Aid Administration",
        "Risk Assessment",
        "Safety Compliance"
      ],
      icon: Award,
      color: "from-red-400 to-pink-500"
    }
  ];

  const conferences = [
    "Engineering Students Innovation Summit - Moi University (2025)",
    "Textile & Industrial Technology Conference - Nairobi (2024)"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-900 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-amber-400">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation in engineering with continuous learning through 
            certifications, conferences, and professional development programs.
          </p>
        </motion.div>

        {/* Main Education */}
        <div className="space-y-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Icon and Basic Info */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <edu.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-emerald-400 mb-4">{edu.field}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-amber-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="font-semibold text-yellow-400">{edu.grade}</span>
                        </div>
                      )}
                    </div>
                    {edu.minor && (
                      <p className="text-amber-400 font-medium mb-4">
                        Minor/Concentration: {edu.minor}
                      </p>
                    )}
                    <p className="text-gray-300 text-lg leading-relaxed">{edu.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-emerald-400 font-semibold mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.keyAchievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-gray-300">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coursework or Skills */}
                    <div>
                      <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        {edu.coursework ? 'Key Coursework' : 'Skills Acquired'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(edu.coursework || edu.skillsAcquired || []).map((item) => (
                          <span
                            key={item}
                            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-amber-400/50 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Activities */}
                  {edu.activities && (
                    <div className="mt-6">
                      <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Activities & Associations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity) => (
                          <span
                            key={activity}
                            className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications & <span className="text-emerald-400">Additional Training</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-emerald-400 font-medium mb-1">{cert.institution}</p>
                    <p className="text-gray-400 mb-4">{cert.period}</p>
                    {cert.grade && (
                      <p className="text-amber-400 font-semibold mb-4">Grade: {cert.grade}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs border border-slate-600"
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

        {/* Conferences */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Conferences & <span className="text-amber-400">Professional Development</span>
          </h3>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-4">
              {conferences.map((conference, index) => (
                <motion.div
                  key={conference}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg border border-slate-600 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{conference}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;