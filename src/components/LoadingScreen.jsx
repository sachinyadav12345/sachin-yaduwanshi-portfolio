import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s loading simulation
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 400); // Small exit delay
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Background glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="text-3xl font-outfit font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                SY
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400 font-medium">
                Portfolio
              </div>
            </motion.div>

            {/* Custom progress bar */}
            <div className="relative h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress percentage */}
            <motion.span
              className="mt-3 text-xs font-mono tracking-wider text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
