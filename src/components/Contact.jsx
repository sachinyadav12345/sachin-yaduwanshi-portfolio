import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {



  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-[-10%] w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-primary-600 dark:text-primary-400 border border-blue-500/20 uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
            Get In Touch With Me
          </motion.h2>
        </div>

        {/* Centered Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center flex flex-col items-center justify-center group"
          >
            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 mb-5 group-hover:bg-blue-500/20 transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Email Me</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500 transition-colors break-all">
              {personalInfo.email}
            </a>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center flex flex-col items-center justify-center group"
          >
            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500 mb-5 group-hover:bg-purple-500/20 transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Call Me</h3>
            <div className="flex flex-col gap-1">
              {personalInfo.phone.split(',').map((p, idx) => (
                <a key={idx} href={`tel:${p.trim()}`} className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-500 transition-colors">
                  {p.trim()}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-card-hover p-8 rounded-3xl text-center flex flex-col items-center justify-center group"
          >
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-500 mb-5 group-hover:bg-cyan-500/20 transition-colors">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Location</h3>
            <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
              {personalInfo.location}
            </p>
          </motion.div>
        </div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-6 mt-12"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:shadow-lg hover:shadow-primary-500/5 transition-all hover:-translate-y-1"
            aria-label="GitHub Page"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:shadow-lg hover:shadow-primary-500/5 transition-all hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
