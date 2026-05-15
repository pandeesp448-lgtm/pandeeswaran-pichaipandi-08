import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Briefcase, Mail, ArrowUp, Heart } from 'lucide-react';
import { fadeInUp, containerVariants } from '../utils/animations';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-primary/[0.06]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold tracking-tighter text-textMain">
              Pandees<span className="text-gradient">waran</span>
            </a>
            <p className="text-textDim text-xs font-mono tracking-[0.15em] mt-2 uppercase">AI Engineer & Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/pandeesp448-lgtm", icon: GitBranch, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pandeeswaranp0", icon: Briefcase, label: "LinkedIn" },
              { href: "mailto:pandeesp448@gmail.com", icon: Mail, label: "Email" },
            ].map((social, idx) => (
              <a key={idx} href={social.href} target={social.label !== 'Email' ? '_blank' : undefined} rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-surface border border-primary/[0.06] flex items-center justify-center text-textDim hover:text-primary hover:bg-surfaceHover hover:border-primary/[0.15] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button onClick={scrollToTop} className="group flex items-center gap-2 text-textDim hover:text-primary transition-colors duration-300" aria-label="Back to top">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Back to Top</span>
            <div className="w-8 h-8 rounded-lg bg-surface border border-primary/[0.06] flex items-center justify-center group-hover:bg-surfaceHover group-hover:border-primary/[0.15] transition-all">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textDim text-xs font-mono tracking-wider">© {currentYear} Pandeeswaran Pichaipandi. All rights reserved.</p>
          <p className="text-textDim/60 text-[10px] font-mono tracking-wider flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-primary/50" /> using React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
