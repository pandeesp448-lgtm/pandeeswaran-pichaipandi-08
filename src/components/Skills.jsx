import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Brain, Code, Palette, GitBranch,
  Eye, Globe, Terminal, Zap,
  Database, Cpu, Layers, Monitor,
  Server, BookOpen, Flame, BarChart3,
  Network, Box, FileCode, PenTool
} from 'lucide-react';
import { containerVariants, fadeInUp, inViewPropsScale } from '../utils/animations';

/* ── Skill categories data ── */
const skillCategories = [
  {
    title: "AI / ML Frameworks", subtitle: "Intelligence Layer", icon: Brain,
    hex: '#D2B48C',
    skills: [
      { name: "TensorFlow", icon: Brain, level: 85 },
      { name: "PyTorch", icon: Flame, level: 80 },
      { name: "Scikit-learn", icon: BarChart3, level: 85 },
      { name: "Keras", icon: Layers, level: 80 },
      { name: "OpenCV", icon: Eye, level: 82 },
      { name: "LangChain", icon: Network, level: 78 },
      { name: "LangGraph", icon: Network, level: 75 },
      { name: "NumPy", icon: Cpu, level: 88 },
      { name: "Pandas", icon: Database, level: 85 },
      { name: "MediaPipe", icon: Eye, level: 75 },
      { name: "Matplotlib", icon: BarChart3, level: 80 },
    ]
  },
  {
    title: "Web Development", subtitle: "Digital Craft", icon: Code,
    hex: '#8B6F47',
    skills: [
      { name: "HTML5", icon: FileCode, level: 92 },
      { name: "CSS3", icon: Palette, level: 90 },
      { name: "JavaScript", icon: Code, level: 85 },
      { name: "React.js", icon: Layers, level: 85 },
      { name: "Node.js", icon: Server, level: 78 },
      { name: "FastAPI", icon: Zap, level: 80 },
      { name: "Three.js", icon: Box, level: 75 },
      { name: "Tailwind CSS", icon: Palette, level: 85 },
    ]
  },
  {
    title: "Databases", subtitle: "Data Layer", icon: Database,
    hex: '#34D399',
    skills: [
      { name: "Firebase Firestore", icon: Flame, level: 82 },
      { name: "Realtime Database", icon: Zap, level: 80 },
      { name: "MySQL", icon: Database, level: 78 },
    ]
  },
  {
    title: "Tools & DevOps", subtitle: "Workflow", icon: Terminal,
    hex: '#D2B48C',
    skills: [
      { name: "Git", icon: GitBranch, level: 85 },
      { name: "GitHub", icon: GitBranch, level: 88 },
      { name: "VS Code", icon: Monitor, level: 92 },
      { name: "Jupyter Notebook", icon: BookOpen, level: 85 },
      { name: "Google Colab", icon: Globe, level: 88 },
    ]
  },
  {
    title: "UI/UX Design", subtitle: "Creative Suite", icon: PenTool,
    hex: '#F9A8D4',
    skills: [
      { name: "Figma", icon: PenTool, level: 82 },
      { name: "UI Design", icon: Palette, level: 80 },
      { name: "Prototyping", icon: Box, level: 78 },
    ]
  },
  {
    title: "AI / ML Core", subtitle: "Neural Systems", icon: Cpu,
    hex: '#818CF8',
    skills: [
      { name: "Machine Learning", icon: Brain, level: 85 },
      { name: "Deep Learning", icon: Cpu, level: 80 },
      { name: "Neural Networks", icon: Network, level: 82 },
      { name: "LLMs", icon: Brain, level: 82 },
      { name: "Computer Vision", icon: Eye, level: 80 },
      { name: "NLP", icon: Terminal, level: 75 },
      { name: "Python", icon: Terminal, level: 92 },
    ]
  },
];

/* ── Circular Progress Ring ── */
const RADIUS = 28;
const CIRC = 2 * Math.PI * RADIUS;

const RingCard = ({ skill, hex, idx, isActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 220, damping: 20, delay: idx * 0.06 }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/5 bg-surface/50 hover:border-white/15 hover:bg-surface/80 transition-all duration-300 cursor-default"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: hex }}
      />

      {/* SVG Ring */}
      <div className="relative w-16 h-16">
        <svg width="64" height="64" className="-rotate-90">
          {/* Track */}
          <circle cx="32" cy="32" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          {/* Progress */}
          <motion.circle
            cx="32" cy="32" r={RADIUS}
            fill="none"
            stroke={hex}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={inView ? { strokeDashoffset: CIRC - (CIRC * skill.level) / 100 } : { strokeDashoffset: CIRC }}
            transition={{ duration: 1.4, delay: 0.3 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: `drop-shadow(0 0 6px ${hex}80)` }}
          />
        </svg>
        {/* Icon inside ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <skill.icon className="w-5 h-5" style={{ color: hex }} />
        </div>
      </div>

      {/* Skill Name */}
      <p className="text-[11px] font-bold text-textMuted group-hover:text-white text-center tracking-wide transition-colors duration-300 uppercase leading-tight">
        {skill.name}
      </p>

      {/* Percentage badge */}
      <motion.span
        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
        style={{ color: hex, borderColor: `${hex}40`, backgroundColor: `${hex}10` }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + idx * 0.07 }}
      >
        {skill.level}%
      </motion.span>
    </motion.div>
  );
};

/* ── Scrolling Marquee Badge ── */
const TechBadge = ({ tech }) => (
  <motion.div
    whileHover={{ scale: 1.12, y: -6, rotate: -1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 320, damping: 14 }}
    className="relative group cursor-pointer mx-4 shrink-0"
  >
    <div
      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      style={{ backgroundColor: tech.color }}
    />
    <motion.div
      className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30"
      style={{ backgroundColor: tech.color }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
    />
    <div className="relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md group-hover:border-white/25 group-hover:bg-surfaceHover transition-all duration-300 overflow-hidden shadow-xl shadow-black/40">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" style={{ color: tech.color }}>
        {tech.icon}
      </span>
      <span className="text-[13px] font-extrabold tracking-[0.18em] text-textMuted group-hover:text-white transition-colors duration-300 uppercase whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  </motion.div>
);

const techRow1 = [
  { name: 'Python',      icon: '🐍', color: '#3776AB' },
  { name: 'TensorFlow',  icon: '🔶', color: '#FF6F00' },
  { name: 'PyTorch',     icon: '🔥', color: '#EE4C2C' },
  { name: 'React',       icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js',     icon: '🟢', color: '#339933' },
  { name: 'FastAPI',     icon: '⚡', color: '#009688' },
  { name: 'LangChain',   icon: '🔗', color: '#D2B48C' },
  { name: 'Firebase',    icon: '🔥', color: '#FFCA28' },
  { name: 'LangGraph',   icon: '🕸️', color: '#818CF8' },
  { name: 'OpenCV',      icon: '👁️', color: '#5C3EE8' },
  { name: 'NumPy',       icon: '🔢', color: '#4DABCF' },
];

const techRow2 = [
  { name: 'Pandas',       icon: '🐼', color: '#150458' },
  { name: 'Scikit-learn', icon: '🤖', color: '#F7931E' },
  { name: 'Keras',        icon: '🧠', color: '#D00000' },
  { name: 'MySQL',        icon: '🗄️', color: '#4479A1' },
  { name: 'GitHub',       icon: '🐙', color: '#8B6F47' },
  { name: 'Figma',        icon: '🎨', color: '#F24E1E' },
  { name: 'Jupyter',      icon: '📓', color: '#F37626' },
  { name: 'Google Colab', icon: '🔬', color: '#F9AB00' },
  { name: 'GraphQL',      icon: '◈',  color: '#E10098' },
  { name: 'Three.js',     icon: '🧊', color: '#FFFFFF' },
  { name: 'MediaPipe',    icon: '✋', color: '#D2B48C' },
];

/* ── Main Skills Component ── */
const Skills = () => {
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];

  return (
    <section id="skills" className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-6">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-mono text-primary tracking-[0.25em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-5">
            TECH <span className="text-gradient">STACK</span>
          </h2>
          <p className="text-textMuted max-w-xl mx-auto text-base">
            Click a category to explore my expertise in each domain.
          </p>
        </motion.div>

        {/* ── Category Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 22 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((c, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActive(idx)}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 overflow-hidden border"
              style={{
                borderColor: active === idx ? `${c.hex}50` : 'rgba(255,255,255,0.06)',
                backgroundColor: active === idx ? `${c.hex}18` : 'rgba(13,13,20,0.6)',
                color: active === idx ? c.hex : '#71717A',
              }}
            >
              {/* Active glow */}
              {active === idx && (
                <motion.div
                  layoutId="tab-glow"
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ backgroundColor: `${c.hex}10` }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <c.icon className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">{c.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Active Category Header ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`header-${active}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="flex items-center gap-4 mb-8 px-2"
          >
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center border relative overflow-hidden"
              style={{ borderColor: `${cat.hex}30`, backgroundColor: `${cat.hex}12` }}
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: cat.hex }} />
              <cat.icon className="w-7 h-7 relative z-10" style={{ color: cat.hex }} />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[10px] font-mono tracking-[0.3em] uppercase mb-1"
                style={{ color: cat.hex }}
              >
                {cat.subtitle}
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-black text-white"
              >
                {cat.title}
              </motion.h3>
            </div>
            {/* Count badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="ml-auto px-4 py-1.5 rounded-full text-xs font-mono border"
              style={{ color: cat.hex, borderColor: `${cat.hex}30`, backgroundColor: `${cat.hex}10` }}
            >
              {cat.skills.length} skills
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Skill Ring Cards Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-20"
          >
            {cat.skills.map((skill, sIdx) => (
              <RingCard key={`${active}-${sIdx}`} skill={skill} hex={cat.hex} idx={sIdx} isActive={true} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12" />

        {/* ── Scrolling Marquee ── */}
        <motion.div
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-row mb-6 py-6">
            <div className="marquee-track animate-marquee-left flex items-center">
              {[...techRow1, ...techRow1].map((tech, idx) => <TechBadge key={idx} tech={tech} />)}
            </div>
          </div>
          <div className="marquee-row py-6">
            <div className="marquee-track animate-marquee-right flex items-center">
              {[...techRow2, ...techRow2].map((tech, idx) => <TechBadge key={idx} tech={tech} />)}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
