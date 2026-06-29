import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Background glow orb */}
      <div className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              Work History
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
            Professional Experience Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          
          {experienceTimeline.map((exp, index) => {
            const isLatest = index === 0;
            return (
              <div key={index} className="relative pl-8 sm:pl-10">
                {/* Timeline node node */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 flex items-center justify-center ${
                    isLatest
                      ? 'bg-blue-500 border-blue-100 dark:border-blue-900/60 shadow-lg shadow-blue-500/30'
                      : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-darkbg-950'
                  }`}
                >
                  {isLatest && (
                    <span className="absolute w-5 h-5 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
                  )}
                </motion.div>

                {/* Timeline content box */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-800/80 transition-colors"
                >
                  {/* Subtle right-side highlight on latest company card */}
                  {isLatest && (
                    <div className="absolute top-0 right-0 w-[4px] h-full bg-blue-500" />
                  )}

                  {/* Header metadata row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/10 dark:border-slate-800/30 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Experience;
