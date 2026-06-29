import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Eye, Info, ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { setProjectFilter, setSelectedProject } from '../store/portfolioSlice';
import { projects } from '../data/portfolioData';

const categories = ['All', 'Dashboard', 'Web'];

export const Projects = () => {
  const dispatch = useDispatch();
  const { projectFilter } = useSelector((state) => state.portfolio);

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-100 dark:border-slate-900 bg-white/20 dark:bg-darkbg-950/20">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-primary-600 dark:text-primary-400 border border-blue-500/20 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              My Projects
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-900 dark:text-white"
          >
          Professional Projects
          </motion.h2>
        </div>

        {/* Filter Toolbar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setProjectFilter(cat))}
                className={`relative px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  projectFilter === cat
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/15'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:border-primary-500/40 transition-colors border border-slate-200/50 dark:border-slate-800/50 relative"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-sm ${
                    project.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/25'
                      : 'bg-amber-500/10 text-amber-500 border-amber-500/25 animate-pulse'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Image Panel */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Hover Overlay Action */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => dispatch(setSelectedProject(project))}
                      className="p-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors"
                      title="View Details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                    {project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-mono font-semibold text-primary-500 mb-1.5">{project.duration}</div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/20 dark:border-slate-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom CTAs */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <button
                      onClick={() => dispatch(setSelectedProject(project))}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      View Details
                    </button>

                    {project.url !== '#' ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-xs font-bold text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-bold text-slate-400 dark:text-slate-600 cursor-not-allowed border border-transparent">
                        Ongoing Development
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
