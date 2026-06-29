import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-darkbg-950/40 backdrop-blur-md py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo/Brand info */}
          <div className="text-center md:text-left">
            <span className="font-outfit font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
              Sachin <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Yaduwanshi</span>
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
              &copy; {new Date().getFullYear()} All rights reserved. Made with &hearts; in India.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top footer link */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.2]" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
