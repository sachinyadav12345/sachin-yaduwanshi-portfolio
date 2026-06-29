import React from 'react';
import { useSelector } from 'react-redux';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export const Layout = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  
  // Hook for top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-darkbg-950 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Modern Background Blur Lights (Glowing Orbs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 dark:bg-blue-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-400/10 dark:bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-cyan-400/10 dark:bg-cyan-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navbar Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative pt-20 pb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Trigger */}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
