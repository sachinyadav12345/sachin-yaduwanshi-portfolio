import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { clearSelectedProject } from '../store/portfolioSlice';

export const ProjectDetailModal = () => {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state) => state.portfolio);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(clearSelectedProject())}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={() => dispatch(clearSelectedProject())}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors border border-slate-200/20 dark:border-slate-850"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column: Media panel */}
              <div className="md:col-span-5 relative bg-slate-950 flex flex-col justify-center min-h-[220px] md:min-h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Right Column: Information Panel */}
              <div className="md:col-span-7 p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${
                    selectedProject.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                  }`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-xs font-mono font-bold text-primary-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedProject.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5 font-outfit">
                    <ShieldCheck className="w-4 h-4 text-primary-500" />
                    Core Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5 font-outfit">
                    <Tag className="w-4 h-4 text-purple-500" />
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {selectedProject.url !== '#' && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/85 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-700/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Code
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
