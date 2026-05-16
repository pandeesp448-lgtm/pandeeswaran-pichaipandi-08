import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, ArrowUpRight, Brain, Code, Cpu, Globe, BarChart3, Sparkles } from 'lucide-react';
import { fadeInLeft, fadeInRight, cardHoverLiftGlow, cardSlideIn } from '../utils/animations';
import NeuralNetworkBg from './NeuralNetworkBg';

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
  const meta = categoryMeta[project.category] || categoryMeta['All'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-3xl overflow-hidden border border-white/5 bg-surface/60 backdrop-blur-sm hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${meta.hex}15, transparent)`,
        }}
      />
      
      <div className="flex flex-col md:flex-row min-h-[200px]">
        {/* Image panel */}
        <motion.div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <motion.div 
            className="absolute bottom-3 left-3 flex items-center gap-2 px-2 py-1 rounded-full border backdrop-blur-md text-[9px] font-mono tracking-wider uppercase"
            style={{ borderColor: `${meta.hex}40`, backgroundColor: `${meta.hex}18`, color: meta.hex }}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <meta.icon className="w-3 h-3" />
            {project.category}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative z-20">
          <div>
            <motion.div className="flex items-center gap-2 mb-2" initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: idx * 0.08 + 0.2 }}>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border" 
                    style={{ color: meta.hex, borderColor: `${meta.hex}40` }}>
                {project.emoji}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </motion.div>
            <p className="text-textMuted text-xs leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((tech, tIdx) => (
                <motion.span 
                  key={tIdx} 
                  className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-textDim hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 text-[10px] font-mono text-textDim hover:text-white transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>SOURCE</span>
            </motion.a>
            <div className="w-px h-2 bg-white/10" />
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-primary hover:text-accent transition-colors duration-300"
              whileHover={{ x: 4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
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
      <div className="opacity-10 scale-150 rotate-12">
        <NeuralNetworkBg />
      </div>
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
