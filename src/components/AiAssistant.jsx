import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, ChevronDown, User } from 'lucide-react';
import { slideFromBottom, fadeInScale, containerVariants } from '../utils/animations';

/* ── Portfolio knowledge base for smart responses ── */
const KB = {
  greet: ['hi', 'hello', 'hey', 'vanakkam', 'hai'],
  name: ['name', 'who are you', 'your name', 'pera'],
  about: ['about', 'pandeeswaran', 'background', 'tell me', 'who is'],
  skills: ['skill', 'technology', 'tech', 'python', 'react', 'ai', 'ml', 'stack'],
  projects: ['project', 'work', 'built', 'made', 'portfolio'],
  education: ['education', 'college', 'degree', 'study', 'btech', 'diploma'],
  experience: ['experience', 'work', 'lmw', 'job', 'apprentice', 'machinist'],
  contact: ['contact', 'reach', 'email', 'hire', 'connect'],
  cgpa: ['cgpa', 'score', 'grade', 'marks', '8.2'],
};

const responses = {
  greet: "Hello! 👋 I'm PANDEE-BOT, your AI guide to Pandeeswaran's portfolio. Ask me anything about his skills, projects, education, or experience!",
  name: "I'm PANDEE-BOT 🤖 — an AI assistant built to help you explore Pandeeswaran Pichaipandi's portfolio. What would you like to know?",
  about: "Pandeeswaran Pichaipandi is a B.Tech AI & Data Science student (3rd year) with a unique background in Mechanical Engineering and CNC Machining. He bridges the gap between industrial operations and modern AI, specializing in Machine Learning, Full Stack Development, and AI Automation. 🚀",
  skills: "Pandeeswaran is proficient in:\n\n🧠 **AI/ML:** Python, TensorFlow, PyTorch, LangChain, LangGraph, OpenCV\n⚡ **Web Dev:** React.js, FastAPI, Node.js, Three.js, Tailwind CSS\n🗄️ **Database:** Firebase, MySQL\n🛠️ **Tools:** Git, GitHub, Jupyter, Google Colab, Figma",
  projects: "Pandeeswaran has built 6+ projects including:\n\n🏭 Industrial AI Assistant — Real-time monitoring dashboard\n🎮 3D Endless Runner Game — Subway Surfers style\n🤖 AI Chatbot — LangChain RAG-powered assistant\n📊 Predictive Maintenance System — ML-based forecasting\n\nCheck the Projects section to see them all!",
  education: "🎓 **Current:** B.Tech AI & Data Science @ Nadar Saraswati College of Engg., Theni (2025–2028) — CGPA: 8.2\n\n📜 Diploma in Mechanical Engineering @ TKS PC, Theni — Score: 85%\n📚 HSC @ Z.K.M. Hr. Sec. School, Bodinayakanur",
  experience: "💼 Pandeeswaran worked at **LMW (Lakshmi Machine Works)** from 2023–2025 as:\n\n• NATS Apprentice at LMW Machine Tool Division (Arasur)\n• NAPS Apprentice at LMW Unit 2 (Kaniyur)\n\nHe worked in automation and CNC (VMC) manufacturing for 1+ years.",
  contact: "📬 Want to reach Pandeeswaran? Scroll down to the **Contact** section or use:\n\n📧 Email him directly through the contact form\n🐙 GitHub: Check his open-source projects\n💼 LinkedIn: Professional connections welcome!\n\nHe's open to internships, freelance, and full-time AI/ML roles! 🎯",
  cgpa: "Pandeeswaran maintains a solid **CGPA of 8.2** in his B.Tech AI & Data Science program at Nadar Saraswati College of Engineering, Theni. 🎓",
  default: "That's a great question! I'm still learning about Pandeeswaran's journey. Try asking about his **skills**, **projects**, **education**, or **experience** — I'd love to help! 😊",
};

function getResponse(input) {
  const lower = input.toLowerCase().trim();
  for (const [key, keywords] of Object.entries(KB)) {
    if (keywords.some(kw => lower.includes(kw))) {
      return responses[key] || responses.default;
    }
  }
  return responses.default;
}

const suggestions = [
  "What are his skills?",
  "Tell me about his projects",
  "What's his CGPA?",
  "Work experience?",
];

/* ── Message Bubble ── */
const Bubble = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
        isUser ? 'bg-primary/20 border border-primary/30' : 'bg-accent/10 border border-accent/20'
      }`}>
        {isUser
          ? <User className="w-4 h-4 text-primary" />
          : <Bot className="w-4 h-4 text-accent" />
        }
      </div>

      {/* Text */}
      <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
        isUser
          ? 'bg-primary/15 border border-primary/20 text-white rounded-tr-sm'
          : 'bg-surface/80 border border-white/5 text-textMuted rounded-tl-sm'
      }`}>
        {msg.text}
      </div>
    </motion.div>
  );
};

/* ── Typing Indicator ── */
const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="flex gap-3 items-end"
  >
    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
      <Bot className="w-4 h-4 text-accent" />
    </div>
    <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-surface/80 border border-white/5 flex gap-1.5 items-center">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-accent/60"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  </motion.div>
);

/* ── Main AI Assistant Component ── */
const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', text: "Hello! 👋 I'm PANDEE-BOT. Ask me anything about Pandeeswaran's portfolio — skills, projects, education, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 400);
  }, [open]);

  const sendMessage = (text = input) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botReply = { id: Date.now() + 1, role: 'bot', text: getResponse(trimmed) };
      setTyping(false);
      setMessages(prev => [...prev, botReply]);
    }, 900 + Math.random() * 500);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating Button ── */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${open ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(210,180,140,0.15), rgba(139,111,71,0.15))',
          border: '1px solid rgba(210,180,140,0.3)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 0 40px rgba(210,180,140,0.15), 0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-primary" style={{ animationDuration: '3s' }} />
        <Bot className="w-7 h-7 text-primary relative z-10" />
        {/* Online dot */}
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full pulse-glow" />
      </motion.button>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="fixed bottom-8 right-8 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              height: '560px',
              background: 'rgba(26,26,26,0.92)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(210,180,140,0.12)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 80px rgba(210,180,140,0.08)',
            }}
          >
            {/* ── Header ── */}
            <div className="relative flex items-center gap-3 px-5 py-4 border-b border-white/5 shrink-0">
              {/* Gradient top bar */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60" />

              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background pulse-glow" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-wide">PANDEE-BOT</span>
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-accent tracking-[0.15em] uppercase">AI Portfolio Assistant • Online</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-xl border border-white/5 bg-surface/50 flex items-center justify-center text-textDim hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map(msg => <Bubble key={msg.id} msg={msg} />)}
              <AnimatePresence>{typing && <TypingIndicator />}</AnimatePresence>
              <div ref={bottomRef} />
            </div>

            {/* ── Suggestions ── */}
            {messages.length <= 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="text-[11px] font-mono text-textDim border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:text-primary hover:border-primary/30 rounded-full px-3 py-1.5 transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <div className="px-4 pb-5 shrink-0">
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-white/8 bg-surface/60 backdrop-blur-sm focus-within:border-primary/30 transition-all duration-300">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-textDim outline-none font-mono"
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || typing}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary/30 transition-all duration-200"
                >
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;
