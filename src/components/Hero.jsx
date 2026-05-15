import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { fadeInDown, fadeInUp, scaleIn, floatAnimation } from '../utils/animations';

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

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}

      {/* Profile image with left-right float + parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: mousePos.y * 0.3 }}
      >
        {/* Left-right floating animation on the image */}
        <motion.div
          className="absolute inset-0"
          animate={{ x: [0, 28, 0, -28, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/profile.png')" }} />
          </motion.div>
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
          <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] space-y-2 mb-8 md:mb-12 uppercase">
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
            className="text-6xl md:text-8xl lg:text-[10rem] font-black text-textMain tracking-[0.05em] leading-[0.9] select-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="block">PANDEES</span>
            <span className="block text-gradient glow-text">WARAN P</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <div className="h-[1px] w-10 md:w-20 bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="text-base md:text-xl font-mono text-textMuted tracking-wider">
              <span className="text-primary">&gt;</span>{' '}
              <span className="text-textMain">{displayText}</span>
              <span className="typing-cursor text-primary ml-0.5">|</span>
            </div>
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
