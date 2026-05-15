import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, ArrowUpRight, Brain, Code, Cpu, Globe, BarChart3, Sparkles } from 'lucide-react';
import { fadeInLeft, fadeInRight, hoverLift, inViewPropsScale } from '../utils/animations';

const categories = ['All', 'AI / ML', 'Full Stack', 'Web Dev', 'Data Science', 'Creative'];

const categoryMeta = {
  'AI / ML':      { hex: '#FFFFFF', icon: Brain },
  'Full Stack':   { hex: '#D2B48C', icon: Code },
  'Web Dev':      { hex: '#8B6F47', icon: Globe },
  'Data Science': { hex: '#D2B48C', icon: BarChart3 },
  'Creative':     { hex: '#8B6F47', icon: Sparkles },
  'All':          { hex: '#FFFFFF', icon: Cpu },
};

const projects = [
  {
    title: "Face Recognition Attendance",
    description: "An intelligent attendance system powered by OpenCV and ML that identifies faces in real-time and automatically logs attendance records.",
    tech: ["Python", "OpenCV", "ML", "NumPy"],
    image: "/project-face.png",
    github: "https://github.com/pandeesp448-lgtm/face-to-face",
    category: "AI / ML",
    emoji: "Face Recognition",
  },
  {
    title: "AI Digital Threat Detection",
    description: "An AI-powered system that detects spam, cyberbullying, and fake news using NLP and machine learning models to safeguard digital platforms.",
    tech: ["Python", "NLP", "ML", "TensorFlow", "Flask"],
    image: "/project-threat.png",
    github: "https://github.com/pandeesp448-lgtm/-AI-Based-Digital-Threat-Detection-System-that-detects-spam-cyberbullying-and-fake-news",
    category: "AI / ML",
    emoji: "AI Threat Detection",
  },
  {
    title: "College Grievance System",
    description: "A full-stack grievance management platform for colleges enabling students to submit, track, and resolve complaints with real-time status updates.",
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    image: "/project-grievance.png",
    github: "https://github.com/pandeesp448-lgtm/v0-college-grievance-system",
    category: "Full Stack",
    emoji: "Grievance System",
  },
  {
    title: "Agrolio E-Commerce",
    description: "A full-featured agricultural e-commerce platform with product listings, cart system, and responsive design for rural marketplace.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/project-agrolio.png",
    github: "https://github.com/pandeesp448-lgtm/agrolink-2.0",
    category: "Web Dev",
    emoji: "Agrolio",
  },
  {
    title: "KNN Algorithm Seminar",
    description: "An interactive web presentation explaining the K-Nearest Neighbors algorithm with visual demonstrations and live parameter tweaking.",
    tech: ["Web Dev", "Algorithms", "KNN", "Data Science"],
    image: "/project-knn.png",
    github: "https://github.com/pandeesp448-lgtm/KNN-algorithm",
    category: "Data Science",
    emoji: "KNN Algorithm",
  },
  {
    title: "Naruto VFX Project",
    description: "A creative VFX project featuring cinematic visual effects, particle animations, and motion graphics inspired by anime aesthetics.",
    tech: ["VFX", "After Effects", "Animation"],
    image: "/project-naruto.png",
    github: "https://github.com/pandeesp448-lgtm/naruto",
    category: "Creative",
    emoji: "VFX Project",
  },
];

/* ── Single Project Card ── */
const ProjectCard = ({ project, idx }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const fromLeft = idx % 2 === 0;
  const meta = categoryMeta[project.category] || categoryMeta['All'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -80 : 80, y: 30 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 160, damping: 22, delay: (idx % 3) * 0.1 }}
      whileHover={{ y: -8, boxShadow: `0 40px 80px rgba(210, 180, 140, 0.15)` }}
      className="group relative rounded-3xl overflow-hidden border border-white/5 bg-surface/60 backdrop-blur-sm hover:border-white/15 transition-all duration-500 cursor-pointer"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ 
          border: `2px solid transparent`,
          backgroundClip: 'padding-box',
          background: `linear-gradient(135deg, ${meta.hex}40, ${meta.hex}10, transparent) border-box`
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Top colour bar */}
      <motion.div
        className="absolute top-0 inset-x-0 h-[2px] opacity-60 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${meta.hex}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Hover glow layer */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${meta.hex}, transparent 60%)` }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.08 }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex flex-col md:flex-row min-h-[220px]">

        {/* ── Image / visual panel ── */}
        <div className="relative w-full md:w-72 h-52 md:h-auto shrink-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Number watermark - animated */}
          <motion.span 
            className="absolute top-4 left-5 text-[72px] font-black text-white/[0.05] leading-none select-none transition-colors duration-500"
            initial={{ opacity: 0.05 }}
            whileHover={{ opacity: 0.15, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            0{idx + 1}
          </motion.span>

          {/* Category badge - enhanced */}
          <motion.div
            className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-[10px] font-mono tracking-[0.15em] uppercase"
            style={{ borderColor: `${meta.hex}40`, backgroundColor: `${meta.hex}18`, color: meta.hex }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + idx * 0.06 }}
            whileHover={{ scale: 1.08, y: -2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <meta.icon className="w-3 h-3" />
            </motion.div>
            {project.category}
          </motion.div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 p-7 md:p-10 flex flex-col justify-between">
          <div>
            {/* Title */}
            <div className="flex items-start gap-3 mb-3">
              <motion.span 
                className="text-xs font-mono font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border"
                style={{ color: meta.hex, borderColor: `${meta.hex}40`, backgroundColor: `${meta.hex}10` }}
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                {project.emoji}
              </motion.span>
              <motion.h3 
                className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 }}
                whileHover={{ color: meta.hex }}
              >
                {project.title}
              </motion.h3>
            </div>

            {/* Description - reveal animation */}
            <motion.p 
              className="text-textMuted text-sm leading-relaxed mb-6 max-w-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Tech chips - staggered entrance with bounce */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, tIdx) => (
                <motion.span
                  key={tIdx}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + tIdx * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                  whileHover={{ 
                    scale: 1.12, 
                    y: -3,
                    backgroundColor: `${meta.hex}25`,
                    boxShadow: `0 8px 16px ${meta.hex}20`
                  }}
                  className="text-[10px] font-mono font-bold tracking-[0.15em] px-3 py-1.5 rounded-full uppercase transition-all duration-300 cursor-pointer"
                  style={{
                    color: meta.hex,
                    borderColor: `${meta.hex}30`,
                    backgroundColor: `${meta.hex}12`,
                    border: `1px solid ${meta.hex}30`,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.95 }}
              className="group/link flex items-center gap-2 text-xs font-mono text-textDim hover:text-white transition-colors duration-300"
            >
              <GitBranch className="w-4 h-4" />
              <span className="tracking-[0.12em] uppercase">Source Code</span>
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                whileHover={{ opacity: 1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-3 h-3" />
              </motion.div>
            </motion.a>

            <motion.div 
              className="w-px h-3 bg-white/10"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.6 }}
            />

            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.12em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 relative overflow-hidden group/btn"
              style={{ color: meta.hex, borderColor: `${meta.hex}40`, backgroundColor: `${meta.hex}10` }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <ExternalLink className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">View Project</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Projects Component ── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          className="mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-5">
                <GitBranch className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-primary tracking-[0.25em] uppercase">Featured Work</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                SELECTED <span className="text-gradient">PROJECTS</span>
              </h2>
            </div>
            <p className="text-textMuted text-sm max-w-sm leading-relaxed">
              A collection of projects that showcase my skills in AI, web development, and creative design.
            </p>
          </div>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 22 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] tracking-[0.12em] uppercase border overflow-hidden transition-colors duration-300"
                style={{
                  borderColor: isActive ? `${meta.hex}50` : 'rgba(255,255,255,0.06)',
                  backgroundColor: isActive ? `${meta.hex}18` : 'rgba(13,13,20,0.6)',
                  color: isActive ? meta.hex : '#71717A',
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-tab-glow"
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ backgroundColor: `${meta.hex}10` }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <meta.icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Project Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── GitHub CTA ── */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 180 }}
        >
          <motion.a
            href="https://github.com/pandeesp448-lgtm"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 text-sm font-mono font-bold tracking-[0.15em] uppercase px-10 py-4 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 text-textMuted hover:text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <GitBranch className="relative z-10 w-4 h-4 text-primary" />
            <span className="relative z-10">View All on GitHub</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
