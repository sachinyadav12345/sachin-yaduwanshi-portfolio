import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Sliders, Cpu, Globe, Terminal, Award } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon strings to Lucide components
const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Layout':
      return <Layout className="w-6 h-6 text-blue-500" />;
    case 'Sliders':
      return <Sliders className="w-6 h-6 text-purple-500" />;
    case 'Cpu':
      return <Cpu className="w-6 h-6 text-cyan-500" />;
    case 'Globe':
      return <Globe className="w-6 h-6 text-indigo-500" />;
    case 'Terminal':
      return <Terminal className="w-6 h-6 text-pink-500" />;
    default:
      return <Award className="w-6 h-6 text-blue-500" />;
  }
};

// Animation config
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              Technical Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
            My  Toolkit
          </motion.h2>
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Top gradient glow indicator */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List inside Category */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-blue-500/20 dark:hover:border-blue-500/30 hover:shadow-md hover:shadow-primary-500/5 hover:text-primary-500 dark:hover:text-primary-400 cursor-default transition-all duration-200"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
