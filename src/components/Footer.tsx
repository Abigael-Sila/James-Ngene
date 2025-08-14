import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:ngenejames43@gmail.com',
      label: 'Email',
      color: 'hover:text-amber-400'
    },
    {
      icon: Phone,
      href: 'tel:+254718254131',
      label: 'Phone',
      color: 'hover:text-emerald-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ngene-james-20625b371/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      href: 'https://github.com/ngenejames',
      label: 'GitHub',
      color: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-slate-900 via-navy-900 to-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="text-amber-400">J</span>ames{' '}
              <span className="text-emerald-400">N</span>gene
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Manufacturing, Industrial & Textile Engineer specializing in sustainable 
              manufacturing solutions and process optimization. Ready to drive innovation 
              in modern manufacturing environments.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Kitui, Eastern Kenya</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5, color: '#f59e0b' }}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-left py-1"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:ngenejames43@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ngenejames43@gmail.com</span>
              </a>
              <a
                href="tel:+254718254131"
                className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+254 718 254 131</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-amber-400">B.Eng</div>
              <div className="text-gray-400 text-sm">Manufacturing Engineering</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-emerald-400">2+</div>
              <div className="text-gray-400 text-sm">Internships Completed</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-gray-400 text-sm">Professional Roles</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-gray-400 text-sm">Commitment to Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <span>© {currentYear} James Ngene. Crafted with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              </motion.span>
              <span>and dedication to engineering excellence.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-sm text-gray-400"
            >
              <span>Ready for new opportunities</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;