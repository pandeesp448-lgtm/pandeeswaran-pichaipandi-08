import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette, Zap } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, inViewPropsLeft, inViewPropsRight, containerVariants } from '../utils/animations';

/* ── Main About Component ── */
const About = () => {
  const stats = [
    { number: '8.2', label: 'CGPA', suffix: '' },
    { number: '6', label: 'Projects', suffix: '+' },
    { number: '3rd', label: 'Year', suffix: '' },
    { number: '5', label: 'Skills', suffix: '+' },
  ];

  const highlights = [
    { icon: Brain, title: 'AI & ML', desc: 'Building intelligent systems with neural networks and deep learning', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: Code, title: 'Development', desc: 'Crafting modern web experiences with React and cutting-edge tools', color: 'text-accent', bg: 'bg-accent/10' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Designing intuitive, beautiful interfaces that users love', color: 'text-secondary', bg: 'bg-secondary/10' },
    { icon: Zap, title: 'Problem Solving', desc: 'Turning complex challenges into elegant, efficient solutions', color: 'text-accent', bg: 'bg-accent/10' },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Decorative Blur */}
      <div className="absolute left-[-20%] top-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center w-full">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-5/12 relative"
            initial={{ opacity: 0, x: -60, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="relative h-[600px] md:h-[720px] rounded-2xl overflow-hidden border border-white/5 bg-surface/50 backdrop-blur-sm group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{ 
                    backgroundImage: "url('/profile.png')",
                    filter: 'grayscale(100%) contrast(1.1)',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)'}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-xs font-mono text-textMuted tracking-[0.3em] uppercase mb-2">Pandeeswaran Pichaipandi</p>
                  <p className="text-[10px] font-mono text-primary tracking-[0.2em]">B.Tech AI & Data Science</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 glass-card p-6 rounded-2xl z-20 shadow-2xl border-white/10"
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <p className="text-4xl md:text-5xl font-black text-white text-glow">8.2</p>
                <p className="text-[10px] font-mono text-primary tracking-[0.3em] mt-2 text-center uppercase">CGPA</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 60, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
               <span className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">// About Me</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              Building the<br /><span className="text-gradient">Future with AI</span>
            </h2>
            
            <p className="text-textMuted text-lg leading-relaxed mb-12 max-w-xl">
              I am a <span className="text-white font-medium">B.Tech Artificial Intelligence & Data Science</span> student 
              (3rd year) with a background in <span className="text-white font-medium">Mechanical Engineering</span> and CNC Machining. 
              Born on August 8, 2003, my focus shifted towards building intelligent systems. My expertise spans across 
              <span className="text-white font-medium"> Machine Learning</span>, 
              <span className="text-white font-medium"> Full Stack Development</span>, and 
              <span className="text-white font-medium"> AI Automation</span> — 
              bridging the gap between industrial operations and modern software solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="relative text-center p-5 rounded-2xl glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  <p className="relative z-10 text-3xl font-black text-white group-hover:text-primary transition-colors duration-300">
                    {stat.number}<span className="text-primary group-hover:text-white transition-colors duration-300">{stat.suffix}</span>
                  </p>
                  <p className="relative z-10 text-[9px] font-mono text-textDim group-hover:text-textMuted tracking-[0.2em] mt-2 uppercase transition-colors duration-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group relative flex items-start gap-4 p-5 rounded-2xl glass-card border-white/5 hover:border-primary/20 overflow-hidden transition-all duration-500"
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Subtle Background Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <div className={`relative z-10 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-base font-bold text-white tracking-wide group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-xs text-textMuted mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
