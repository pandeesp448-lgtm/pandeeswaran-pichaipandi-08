import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { slideFromBottom } from '../utils/animations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) { setActiveSection(sections[i]); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/70 backdrop-blur-xl border-b border-primary/[0.06] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="relative group">
          <span className="text-xl font-bold tracking-tighter text-textMain">
            Pandees<span className="text-gradient">waran</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a key={link.name} href={link.href} className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-textMain' : 'text-textMuted hover:text-textMain'}`}>
                {isActive && (
                  <motion.span layoutId="activeNav" className="absolute inset-0 bg-primary/[0.08] rounded-lg border border-primary/[0.1]" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
          <a href="#contact" className="ml-4 text-sm font-semibold px-5 py-2 rounded-lg bg-primary text-background hover:bg-secondary transition-colors duration-300">
            Let's Talk
          </a>
        </div>

        <button id="mobile-menu-toggle" className="md:hidden text-textMain p-2 rounded-lg hover:bg-primary/5 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-primary/[0.06]">
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a key={link.name} href={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}
                    className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${isActive ? 'text-textMain bg-primary/[0.08]' : 'text-textMuted hover:text-textMain hover:bg-primary/[0.04]'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <a href="#contact" className="mt-4 text-center text-sm font-semibold px-5 py-3 rounded-lg bg-primary text-background hover:bg-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
