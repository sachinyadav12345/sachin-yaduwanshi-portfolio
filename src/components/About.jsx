import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { CheckCircle2, User, Award, Layers } from 'lucide-react';
import { stats, aboutDetails } from '../data/portfolioData';

// Reusable CountUp component for statistical numbers
const StatCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: 'easeOut',
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card text-center">
      <span className="text-4xl sm:text-5xl font-outfit font-extrabold text-gradient-purple-blue">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </span>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900 bg-white/20 dark:bg-darkbg-950/20">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              About Me
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
            Passionate About Coding
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Highlights Grid */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white">
                Who I Am
              </h3>
              <p>
                {aboutDetails.text}
              </p>
            </motion.div>

            {/* Checklist of Professional Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4"
            >
              {aboutDetails.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 w-full self-center"
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
