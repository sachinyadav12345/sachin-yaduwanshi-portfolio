import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.roles;
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentText, typingSpeed, roleIndex, isDeleting]);

  const tick = () => {
    let i = roleIndex % roles.length;
    let fullTxt = roles[i];
    let updatedTxt = isDeleting 
      ? fullTxt.substring(0, currentText.length - 1) 
      : fullTxt.substring(0, currentText.length + 1);

    setCurrentText(updatedTxt);

    if (isDeleting) {
      setTypingSpeed(50);
    }

    if (!isDeleting && updatedTxt === fullTxt) {
      setIsDeleting(true);
      setTypingSpeed(period); // Wait time at the end of word
    } else if (isDeleting && updatedTxt === '') {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
      setTypingSpeed(150); // Speed after deleting
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-[15%] w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-primary-600 dark:text-primary-400 border border-blue-500/20 mb-6 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Available for Roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold tracking-tight text-slate-900 dark:text-white leading-none"
            >
              Hi, I'm <br />
              <span className="text-gradient-purple-blue block mt-2 py-1 leading-normal">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typewriter Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 sm:h-12 mt-4 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                A{' '}
                <span className="border-r-2 border-primary-500 pr-1 text-primary-500 dark:text-primary-400">
                  {currentText}
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <button
                onClick={() => handleScrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold text-sm border border-primary-500/20 hover:bg-primary-500/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Hero Right Code Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Spinning background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-slow" />

              {/* Developer Illustration SVG Frame */}
              <div className="relative w-full rounded-2xl border border-slate-200/50 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-4 shadow-2xl shadow-slate-100/50 dark:shadow-none animate-float-medium">
                {/* Windows Bar */}
                <div className="flex items-center gap-1.5 pb-3 border-b border-slate-200/50 dark:border-slate-800/40 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-2 text-[10px] text-slate-400 dark:text-slate-500 font-mono">App.jsx</div>
                </div>

                {/* Simulated Code Structure */}
                <div className="font-mono text-left text-xs space-y-2 overflow-x-auto p-1 text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="text-purple-500 font-semibold">import</span>{' '}
                    <span className="text-blue-500">React</span>, {'{'} useState {'}'} {' '}
                    <span className="text-purple-500 font-semibold">from</span>{' '}
                    <span className="text-emerald-500">'react'</span>;
                  </div>
                  <div>
                    <span className="text-purple-500 font-semibold">import</span>{' '}
                    <span className="text-blue-500">ReduxToolkit</span>{' '}
                    <span className="text-purple-500 font-semibold">from</span>{' '}
                    <span className="text-emerald-500">'@reduxjs'</span>;
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 font-medium mt-1">// State driven UI architect</div>
                  <div>
                    <span className="text-purple-500 font-semibold">const</span>{' '}
                    <span className="text-blue-500">Developer</span> = {'() => {'}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-500 font-semibold">const</span> [skills, setSkills] = useState([
                  </div>
                  <div className="pl-8 text-orange-500 dark:text-amber-400">
                    'React', 'Redux', 'Tailwind', 'UX'
                  </div>
                  <div className="pl-4">]);</div>
                  <div className="pl-4">
                    <span className="text-purple-500 font-semibold">return</span> (
                  </div>
                  <div className="pl-8 text-blue-500">
                    {'<'}<span className="text-purple-500 font-semibold">Portfolio</span>
                  </div>
                  <div className="pl-12 text-slate-500">
                    name=<span className="text-emerald-500">"Sachin"</span>
                  </div>
                  <div className="pl-12 text-slate-500">
                    experience=<span className="text-emerald-500">"1+ Years"</span>
                  </div>
                  <div className="pl-12 text-slate-500">
                    speed=<span className="text-emerald-500">"Fast"</span>
                  </div>
                  <div className="pl-8 text-blue-500">{'/>'}</div>
                  <div className="pl-4">);</div>
                  <div>{'};'}</div>
                  <div className="text-purple-500 font-semibold">export default Developer;</div>
                </div>

                {/* Floating Micro Dashboard Component inside Hero Graphic */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute bottom-6 right-[-24px] w-[180px] rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950 p-3 shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-mono font-medium">Server Status</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 dark:bg-slate-900 rounded flex items-center px-1.5 justify-between">
                    <span className="text-[8px] font-mono font-semibold text-slate-500">Build Success</span>
                    <span className="text-[8px] font-mono text-primary-500 font-bold">100%</span>
                  </div>
                  {/* Tiny simulated bar charts */}
                  <div className="flex items-end gap-1.5 h-8 pt-1">
                    <div className="w-full bg-blue-500/30 dark:bg-blue-500/20 h-[30%] rounded-sm" />
                    <div className="w-full bg-purple-500/35 dark:bg-purple-500/25 h-[65%] rounded-sm animate-pulse" />
                    <div className="w-full bg-cyan-500/40 dark:bg-cyan-500/30 h-[90%] rounded-sm" />
                    <div className="w-full bg-primary-500 h-[50%] rounded-sm" />
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
