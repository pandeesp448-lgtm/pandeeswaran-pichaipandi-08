import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Award } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, containerVariants, cardHoverLiftGlow, cardSlideIn } from '../utils/animations';
import NeuralNetworkBg from './NeuralNetworkBg';

const Education = () => {
  const certifications = [
    "Machine Learning Fundamentals",
    "Python for Data Science",
    "Web Development with React",
  ];

  const timelineItems = [
    { year: "2024 — 2025 (Feb)", title: "NAPS Apprentice", subtitle: "Lakshmi Machine Works Limited (LMW) — Machine Tool Division, Arasur", desc: "Worked in CNC (VMC) machines and automation processes. Supported production team in ensuring quality and efficiency. Discontinued in February 2025 (Relieved)." },
    { year: "2023 — 2025", title: "NATS Apprentice", subtitle: "Lakshmi Machine Works Limited (LMW) — Machine Tool Division, Arasur", desc: "Trained in CNC (VMC) machining and industrial automation. Operated machines and handled production workflows. Learned machine setup, tool setting and process optimization." },
    { year: "2022 — 2023", title: "Temporary Apprentice (Diploma)", subtitle: "Lakshmi Machine Works Limited (LMW) — Unit 2, Kaniyur, Coimbatore", desc: "Worked in automation and CNC (VMC) manufacturing environment. Assisted in machine operations, setup and production activities. Gained hands-on experience in machining and quality processes." },
    { year: "2022", title: "Diploma in Mechanical Engineering", subtitle: "TKS Polytechnic College, Theni", desc: "Completed mechanical engineering diploma before transitioning to AI. Year: 2022 | Status: Completed" },
    { year: "2020", title: "Higher Secondary Education (12th)", subtitle: "Z.K.M.HR.SCHOOL, Bodinayakanur", desc: "Year: 2020 | Percentage: 49%" },
    { year: "2018", title: "SSLC (10th)", subtitle: "Z.K.M.HR.SCHOOL, Bodinayakanur", desc: "Year: 2018 | Percentage: 71%" },
  ];

  return (
    <section id="education" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <NeuralNetworkBg />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-[10px] text-primary font-mono tracking-[0.3em] uppercase mb-4">// Academic Journey</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-textMain tracking-tight">
            EDU<span className="text-gradient">CATION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Education Card with College Image BG ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-2xl border border-primary/[0.08] hover:border-primary/[0.3] transition-all duration-500 shadow-lg hover:shadow-2xl"
            style={{ minHeight: '480px', boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          >
            {/* College image background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/college.png')" }}
            />
            {/* Dark gradient overlay so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

            {/* Top gradient bar */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent opacity-60 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
            />

            {/* Content */}
            <div className="relative z-10 p-10 flex flex-col h-full">
              <motion.div className="flex items-center gap-3 mb-6" whileHover={{ scale: 1.05, x: 4 }}>
                <span className="w-2 h-2 rounded-full bg-accent pulse-glow" />
                <span className="text-[10px] font-mono text-accent tracking-[0.3em] uppercase">Currently Enrolled</span>
              </motion.div>

              <p className="text-primary font-mono text-sm tracking-[0.2em] mb-4">2025 — 2026</p>

              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-textMain mb-4 tracking-wide leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                B.Tech Artificial Intelligence<br />
                <span className="text-gradient">& Data Science</span>
              </motion.h3>

              <p className="text-textMuted font-light mb-8 leading-relaxed">
                Nadar Saraswati College of Engineering and Technology, Theni
              </p>

              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="px-5 py-2.5 border border-primary/[0.15] rounded-xl bg-background/60 backdrop-blur-sm hover:border-primary/[0.3] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-textMain font-mono tracking-[0.15em] text-sm font-bold">CGPA: 8.2</span>
                </motion.div>
                <motion.div 
                  className="px-5 py-2.5 border border-primary/[0.15] rounded-xl bg-background/60 backdrop-blur-sm hover:border-primary/[0.3] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-textMuted font-mono tracking-[0.15em] text-sm">Completed II Year, Moving to III Year</span>
                </motion.div>
              </div>

              <div className="mt-auto pt-6 border-t border-primary/[0.08]">
                <p className="text-[10px] font-mono text-textDim tracking-[0.2em] uppercase mb-3">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP', 'Statistics'].map((course, idx) => (
                    <motion.span 
                      key={idx} 
                      className="text-[9px] font-mono text-textDim tracking-[0.1em] px-3 py-1.5 rounded-md bg-background/60 backdrop-blur-sm border border-primary/[0.08] uppercase hover:border-primary/[0.2] transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative watermark icon */}
            <motion.div 
              className="absolute top-8 right-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
              whileHover={{ rotate: 10 }}
            >
              <GraduationCap className="w-40 h-40 text-primary" />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Career Goal */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-surface border border-primary/[0.06] rounded-2xl overflow-hidden hover:border-primary/[0.2] transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
            >
              <motion.div className="h-[2px] w-full bg-gradient-to-r from-secondary to-primary opacity-50 group-hover:opacity-100 transition-opacity" whileHover={{ scale: 1.2 }} />
              <div className="p-10 relative">
                <div className="absolute top-8 right-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <Target className="w-32 h-32 text-secondary" />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-mono text-secondary tracking-[0.3em] uppercase mb-4">Career Objective</p>
                  <p className="text-xl md:text-2xl text-textMuted font-light leading-relaxed">
                    Motivated and enthusiastic B.Tech Artificial Intelligence and Data Science student with strong industrial experience in automation and CNC (VMC) manufacturing. Seeking an AI Engineer Intern opportunity to apply my technical knowledge, problem-solving skills and practical experience to develop intelligent and innovative solutions while contributing to organizational growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications / Tools */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-surface border border-primary/[0.06] rounded-2xl overflow-hidden hover:border-primary/[0.2] transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
            >
              <motion.div className="h-[2px] w-full bg-gradient-to-r from-accent to-secondary opacity-50 group-hover:opacity-100 transition-opacity" whileHover={{ scale: 1.2 }} />
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase">Tools & Software</p>
                </div>
                <div className="space-y-3">
                  {["MS Office", "Basic Programming", "Computer Fundamentals"].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-primary/[0.02] border border-primary/[0.04] hover:border-primary/[0.1] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      <span className="text-sm text-textMuted font-light">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Industrial Exposure */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-surface border border-primary/[0.06] rounded-2xl overflow-hidden hover:border-primary/[0.2] transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
            >
              <motion.div className="h-[2px] w-full bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" whileHover={{ scale: 1.2 }} />
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">Industrial / Technical Skills</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "CNC (VMC) Machine Operation",
                    "Automation Basics",
                    "Manufacturing Processes",
                    "Machinist Operations",
                    "Machine Setup & Operation",
                    "Quality Inspection"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-primary/[0.02] border border-primary/[0.04] hover:border-primary/[0.1] transition-colors">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      <span className="text-xs text-textMuted font-mono uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-textMain tracking-wide">Previous Education & <span className="text-gradient">Experience</span></h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="space-y-8 border-l-2 border-primary/20 pl-8 ml-4 md:ml-6 relative">
            {timelineItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                
                <div className="p-6 bg-surface border border-primary/[0.06] rounded-2xl hover:border-primary/[0.2] hover:bg-surfaceHover transition-all duration-300">
                  <p className="text-primary font-mono text-xs tracking-[0.15em] mb-2">{item.year}</p>
                  <h4 className="text-xl font-bold text-textMain">{item.title}</h4>
                  <p className="text-sm text-textMuted mt-1 font-medium">{item.subtitle}</p>
                  {item.desc && <p className="text-sm text-textDim mt-4 leading-relaxed">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
