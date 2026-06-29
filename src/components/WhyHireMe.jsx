import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Smartphone, Globe2, Layers,
  Zap, Package, Lightbulb, Users,
  Palette, FileCode2, HeartHandshake
} from 'lucide-react';
import { whyHireMeCards } from '../data/portfolioData';

// Helper to map title to specific icons
const getHireIcon = (title) => {
  const iconClass = "w-6 h-6 text-primary-500 group-hover:scale-110 transition-transform duration-300";
  switch (title) {
    case 'React.js Expertise':
      return <Code2 className={iconClass} />;
    case 'Responsive UI':
      return <Smartphone className={iconClass} />;
    case 'REST APIs Integration':
      return <Globe2 className={iconClass} />;
    case 'Redux Toolkit State':
      return <Layers className={iconClass} />;
    case 'Performance Optimization':
      return <Zap className={iconClass} />;
    case 'Reusable Components':
      return <Package className={iconClass} />;
    case 'Problem Solving':
      return <Lightbulb className={iconClass} />;
    case 'Team Collaboration':
      return <Users className={iconClass} />;
    case 'UI/UX Development':
      return <Palette className={iconClass} />;
    case 'Clean Code':
      return <FileCode2 className={iconClass} />;
    default:
      return <Code2 className={iconClass} />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export const WhyHireMe = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900 bg-white/20 dark:bg-darkbg-950/20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-primary-600 dark:text-primary-400 border border-blue-500/20 uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              Core Competencies
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
            Why Hire Me For Your Team?
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyHireMeCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group flex flex-col justify-start"
            >
              {/* Corner hover glow */}
              <div className="absolute top-0 right-0 w-[4px] h-[4px] bg-primary-500 rounded-bl-full group-hover:w-full group-hover:h-[4px] group-hover:rounded-none transition-all duration-300" />
              
              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-4 group-hover:bg-primary-500/10 transition-colors duration-300">
                {getHireIcon(card.title)}
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyHireMe;
