import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Brain, Code, Palette, GitBranch,
  Eye, Globe, Terminal, Zap,
  Database, Cpu, Layers, Monitor,
  Server, BookOpen, Flame, BarChart3,
  Network, Box, FileCode, PenTool, Settings
} from 'lucide-react';
import { containerVariants, fadeInUp, inViewPropsScale } from '../utils/animations';
import NeuralNetworkBg from './NeuralNetworkBg';

/* ── Skill categories data ── */
const skillCategories = [
  {
    title: "Programming & AI", subtitle: "Core Logic", icon: Brain,
    hex: '#D2B48C',
    skills: [
      { name: "Python", icon: Terminal, level: 92 },
      { name: "AI Basics", icon: Brain, level: 85 },
      { name: "ML Basics", icon: Cpu, level: 80 },
      { name: "Data Analysis", icon: BarChart3, level: 78 },
    ]
  },
  {
    title: "Industrial Skills", subtitle: "Technical Expertise", icon: Settings,
    hex: '#8B6F47',
    skills: [
      { name: "CNC Operation", icon: Cpu, level: 90 },
      { name: "Automation", icon: Zap, level: 85 },
      { name: "Manufacturing", icon: Layers, level: 88 },
      { name: "Machinist Ops", icon: Settings, level: 90 },
      { name: "Quality Inspect", icon: Eye, level: 85 },
    ]
  },
  {
    title: "Tools & Software", subtitle: "Workflow", icon: Terminal,
    hex: '#D2B48C',
    skills: [
      { name: "MS Office", icon: FileCode, level: 90 },
      { name: "Git / GitHub", icon: GitBranch, level: 85 },
      { name: "VS Code", icon: Monitor, level: 92 },
    ]
  }
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
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/5 bg-surface/50 transition-all duration-300 cursor-default"
    >
      {/* SVG Ring */}
      <div className="relative w-16 h-16">
        <svg width="64" height="64" className="-rotate-90">
          <circle cx="32" cy="32" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <motion.circle
            cx="32" cy="32" r={RADIUS}
            fill="none"
            stroke={hex}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={inView ? { strokeDashoffset: CIRC - (CIRC * skill.level) / 100 } : { strokeDashoffset: CIRC }}
            transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <skill.icon className="w-5 h-5" style={{ color: hex }} />
        </div>
      </div>

      <p className="text-[10px] font-bold text-textMuted group-hover:text-white text-center tracking-wide uppercase leading-tight transition-colors">
        {skill.name}
      </p>

      <span
        className="text-[9px] font-mono px-2 py-0.5 rounded-full border"
        style={{ color: hex, borderColor: `${hex}40`, backgroundColor: `${hex}10` }}
      >
        {skill.level}%
      </span>
    </motion.div>
  );
};

/* ── Static Badge ── */
const TechBadge = ({ tech }) => (
  <div className="mx-4 shrink-0 flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md">
    <span className="text-2xl">{tech.icon}</span>
    <span className="text-[11px] font-bold tracking-widest text-textMuted uppercase whitespace-nowrap">
      {tech.name}
    </span>
  </div>
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
      <NeuralNetworkBg />
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
