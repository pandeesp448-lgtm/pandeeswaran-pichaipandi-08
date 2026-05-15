import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AiAssistant from './components/AiAssistant';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background text-textMain font-sans overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Cursor Glow Effect (desktop only) */}
      <div 
        className="cursor-glow hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <Navbar />
      <main>
        <Hero />
        
        {/* Section Divider */}
        <motion.div 
          className="section-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        
        <About />
        <motion.div 
          className="section-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        
        <Skills />
        <motion.div 
          className="section-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        
        <Projects />
        <motion.div 
          className="section-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        
        <Education />
        <motion.div 
          className="section-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        
        <Contact />
      </main>
      
      <Footer />

      {/* Floating AI Assistant */}
      <AiAssistant />
    </motion.div>
  );
}

export default App;
