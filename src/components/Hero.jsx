import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { fadeInDown, fadeInUp, scaleIn, floatAnimation } from '../utils/animations';
import CnnVisual from './CnnVisual';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = ['AI Engineer', 'Machine Learning', 'Full Stack Developer', 'Machinist'];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-background flex items-center">
      
      <div className="absolute inset-0 animated-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <CnnVisual />
      </div>

      {/* Profile image with subtle parallax only */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: mousePos.y * 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/profile.png')" }} />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </motion.div>

      <div className="absolute inset-0 scanline pointer-events-none z-[1]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col"
        >
          {/* Terminal Status */}
          <div className="text-[9px] md:text-xs font-mono tracking-[0.2em] space-y-1.5 mb-6 md:mb-8 uppercase">
            <motion.p className="flex items-center gap-2 text-accent/80" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <span className="w-1.5 h-1.5 bg-accent rounded-full pulse-glow" />
              System Online
            </motion.p>
            <motion.p className="text-primary/50" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>
              &gt; Initializing Portfolio v3.0
            </motion.p>
            <motion.p className="text-primary/50" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
              &gt; Neural Link Established
            </motion.p>
          </div>

          {/* Name */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-textMain tracking-[0.05em] leading-[0.9] select-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="block uppercase">PANDEESWARAN</span>
            <span className="block text-gradient glow-text uppercase">PICHAIPANDI</span>
          </motion.h1>

          <motion.div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <div className="flex items-center gap-3 md:gap-5">
              <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-primary/50 to-transparent" />
              <div className="text-sm md:text-lg font-mono text-textMuted tracking-wider">
                <span className="text-primary">&gt;</span>{' '}
                <span className="text-textMain">{displayText}</span>
                <span className="typing-cursor text-primary ml-0.5">|</span>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.a 
              href="/cv.pdf" 
              download="Pandeeswaran_Pichaipandi_CV.pdf"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-background font-bold text-xs md:text-sm tracking-[0.1em] uppercase hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* HUD */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute right-6 md:right-12 bottom-32 text-right hidden lg:block">
          <div className="text-[9px] text-textDim font-mono tracking-[0.3em] space-y-1.5 uppercase">
            <p className="text-textMuted">STATUS: ACTIVE</p>
            <p>REACT × VITE × TAILWIND</p>
            <p>AI & DATA SCIENCE</p>
            <div className="mt-4 w-24 h-[1px] bg-gradient-to-l from-primary/30 to-transparent ml-auto" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span className="text-[9px] font-mono text-textDim tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-4 h-4 text-textMuted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
