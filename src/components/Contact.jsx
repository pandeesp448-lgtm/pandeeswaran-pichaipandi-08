import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Briefcase, Send, ArrowUpRight, CheckCircle, Loader2, Phone, MapPin, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeInUp, fadeInDown, containerVariants, inViewPropsScale, cardHoverLiftGlow, cardSlideInLeft, cardSlideInRight } from '../utils/animations';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('R_a22z7Q0Ea-HnwZ_');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_pqtjz0n',           // EmailJS Service ID
        'template_jc2pujl',          // EmailJS Template ID
        {
          user_name: formState.name,
          user_email: formState.email,
          message: formState.message,
        }
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Full Error:', err);
      console.error('Error Status:', err.status);
      console.error('Error Text:', err.text);
      setError(`Error: ${err.status || 'Unknown'} - Check browser console for details`);
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: 'Main Email', value: 'pandeesp448@gmail.com', href: 'mailto:pandeesp448@gmail.com', icon: Mail },
    { name: 'Domain Email', value: 'pandeeswaranp_ai@nscet.org', href: 'mailto:pandeeswaranp_ai@nscet.org', icon: Mail },
    { name: 'Phone / WhatsApp', value: '9047323345', href: 'tel:+919047323345', icon: Phone },
    { name: 'LinkedIn', value: 'pandeeswaranp0', href: 'https://www.linkedin.com/in/pandeeswaranp0', icon: Briefcase },
    { name: 'Address', value: 'Bodinayakanur, Theni, 625513', href: '#', icon: MapPin },
    { name: 'GitHub', value: 'pandeesp448-lgtm', href: 'https://github.com/pandeesp448-lgtm', icon: GitBranch },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[10px] text-primary font-mono tracking-[0.3em] uppercase mb-3">// Let's Connect</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-textMain tracking-tight">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-textMuted mt-3 max-w-md mx-auto text-sm">Have a project in mind? I'd love to hear from you.</p>
        </motion.div>

        {/* Slide Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Social Links Slide */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -60, filter: "blur(15px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-3 h-full">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group relative bg-surface/60 border border-primary/[0.08] p-4 rounded-xl flex items-center gap-3 hover:border-primary/[0.25] hover:bg-surface/80 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ x: 6, y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                >
                  <motion.div 
                    className="w-9 h-9 rounded-lg bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center group-hover:bg-primary/[0.15] transition-all duration-300 flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    <social.icon className="w-4 h-4 text-textMuted group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[8px] font-mono text-textDim tracking-[0.15em] uppercase mb-0.5">{social.name}</p>
                    <p className="text-textMain font-medium text-xs truncate group-hover:text-primary transition-colors duration-300">{social.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <motion.div 
                className="mt-4 p-4 rounded-xl bg-surface/60 border border-primary/[0.08] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.span 
                    className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[9px] font-mono text-accent tracking-[0.15em] uppercase">Available</span>
                </div>
                <p className="text-textMuted text-xs leading-relaxed">Open to internships & collaborations in AI/ML.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Slide */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 60, filter: "blur(15px)" }} 
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="relative bg-surface/60 border border-primary/[0.08] p-6 md:p-8 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/[0.2]"
              whileHover={{ scale: 1.01 }}
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
            >
              <div className="mb-6">
                <p className="text-[10px] font-mono text-textDim tracking-[0.2em] uppercase mb-2">Send a Message</p>
                <motion.div 
                  className="h-[1px] w-8 bg-gradient-to-r from-primary to-accent rounded-full" 
                  whileHover={{ scaleX: 1.5 }}
                />
              </div>

              {error && (
                <motion.div 
                  className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-xs">{error}</p>
                </motion.div>
              )}

              <div className="space-y-4">
                <motion.div className="space-y-1.5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <label className="text-[9px] text-textMuted font-mono tracking-[0.15em] uppercase">Full Name</label>
                  <motion.input 
                    id="contact-name" 
                    type="text" 
                    value={formState.name} 
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-background/40 border border-primary/[0.08] rounded-lg px-4 py-3 text-textMain text-sm font-light focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-300 placeholder:text-textDim placeholder:font-mono placeholder:text-xs" 
                    placeholder="Your name" 
                    required 
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(210, 180, 140, 0.1)" }}
                  />
                </motion.div>
                
                <motion.div className="space-y-1.5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                  <label className="text-[9px] text-textMuted font-mono tracking-[0.15em] uppercase">Email Address</label>
                  <motion.input 
                    id="contact-email" 
                    type="email" 
                    value={formState.email} 
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-background/40 border border-primary/[0.08] rounded-lg px-4 py-3 text-textMain text-sm font-light focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-300 placeholder:text-textDim placeholder:font-mono placeholder:text-xs" 
                    placeholder="your@email.com" 
                    required 
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(210, 180, 140, 0.1)" }}
                  />
                </motion.div>
                
                <motion.div className="space-y-1.5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <label className="text-[9px] text-textMuted font-mono tracking-[0.15em] uppercase">Message</label>
                  <motion.textarea 
                    id="contact-message" 
                    rows="4" 
                    value={formState.message} 
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-background/40 border border-primary/[0.08] rounded-lg px-4 py-3 text-textMain text-sm font-light focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none placeholder:text-textDim placeholder:font-mono placeholder:text-xs" 
                    placeholder="Tell me about your project..." 
                    required 
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(210, 180, 140, 0.1)" }}
                  />
                </motion.div>
                
                <motion.button 
                  id="contact-submit" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-background text-sm font-bold tracking-[0.15em] uppercase hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  {isSubmitted ? (
                    <><CheckCircle className="w-4 h-4 text-accent animate-pulse" /><span className="text-background">Sent!</span></>
                  ) : isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                  ) : (
                    <><Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /><span>Send Message</span></>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
