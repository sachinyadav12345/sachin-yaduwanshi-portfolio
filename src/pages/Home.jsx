import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import WhyHireMe from '../components/WhyHireMe';
import Contact from '../components/Contact';
import ProjectDetailModal from '../components/ProjectDetailModal';
import useActiveSection from '../hooks/useActiveSection';

export const Home = () => {
  // Activate scrollspy observer for these section elements
  useActiveSection(['home', 'about', 'skills', 'projects', 'experience', 'contact']);

  return (
    <>
      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <WhyHireMe />
      <Contact />

      {/* Details modal overlays */}
      <ProjectDetailModal />
    </>
  );
};

export default Home;
