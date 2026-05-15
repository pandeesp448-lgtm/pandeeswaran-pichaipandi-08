/**
 * Centralized animation definitions for consistent motion across the portfolio
 */

// ═══════════════════════════════════════════════════════════════
// CONTAINER ANIMATIONS (for groups/sections)
// ═══════════════════════════════════════════════════════════════

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const containerVariantsSmooth = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// ITEM ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleInRotate = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// INTERACTIVE ANIMATIONS (hover/tap states)
// ═══════════════════════════════════════════════════════════════

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverLift = {
  whileHover: { y: -8 },
  whileTap: { y: 0 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 20px 40px rgba(210, 180, 140, 0.25)" },
  transition: { duration: 0.3 },
};

export const tapPulse = {
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 600, damping: 20 },
};

// ═══════════════════════════════════════════════════════════════
// SCROLL TRIGGER ANIMATIONS (useInView)
// ═══════════════════════════════════════════════════════════════

export const inViewProps = {
  initial: { opacity: 0, y: 50, filter: "blur(15px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const inViewPropsLeft = {
  initial: { opacity: 0, x: -60, filter: "blur(15px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export const inViewPropsRight = {
  initial: { opacity: 0, x: 60, filter: "blur(15px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export const inViewPropsScale = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(15px)" },
  whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

// ═══════════════════════════════════════════════════════════════
// FLOAT/FLOAT UP ANIMATIONS (subtle continuous motion)
// ═══════════════════════════════════════════════════════════════

export const floatAnimation = {
  animate: { y: [0, -20, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const floatAnimationSlow = {
  animate: { y: [0, -15, 0] },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const floatAnimationFast = {
  animate: { y: [0, -25, 0] },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ═══════════════════════════════════════════════════════════════
// ROTATING ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const rotateAnimation = {
  animate: { rotate: 360 },
  transition: {
    duration: 20,
    repeat: Infinity,
    linear: true,
  },
};

export const rotateAnimationSlow = {
  animate: { rotate: 360 },
  transition: {
    duration: 30,
    repeat: Infinity,
    linear: true,
  },
};

// ═══════════════════════════════════════════════════════════════
// TEXT ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const charAnimation = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ═══════════════════════════════════════════════════════════════
// PROGRESS BAR ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const progressBarVariants = {
  hidden: { scaleX: 0 },
  visible: (i) => ({
    scaleX: 1,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

export const progressBarOrigin = {
  originX: 0,
};

// ═══════════════════════════════════════════════════════════════
// STAGGER + SEQUENCE ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ═══════════════════════════════════════════════════════════════
// MODAL/DRAWER ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

export const slideFromBottom = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  transition: { type: "spring", damping: 25, stiffness: 300 },
};

// ═══════════════════════════════════════════════════════════════
// BUTTON ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const buttonHover = {
  whileHover: { scale: 1.02, shadowColor: "rgba(210, 180, 140, 0.4)" },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const buttonGlow = {
  whileHover: {
    textShadow: "0 0 20px rgba(210, 180, 140, 0.6)",
    filter: "drop-shadow(0 0 12px rgba(210, 180, 140, 0.3))",
  },
  transition: { duration: 0.3 },
};

// ═══════════════════════════════════════════════════════════════
// BACKGROUND ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const backgroundShift = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
  },
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: "linear",
  },
};

// ═══════════════════════════════════════════════════════════════
// BADGE/CHIP ANIMATIONS
// ═══════════════════════════════════════════════════════════════

export const badgeHover = {
  whileHover: { y: -4, shadow: "0 12px 20px rgba(210, 180, 140, 0.2)" },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const badgePulse = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(210, 180, 140, 0.4)",
      "0 0 0 12px rgba(210, 180, 140, 0)",
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

// ═══════════════════════════════════════════════════════════════
// PARALLAX ANIMATIONS (for scroll effects)
// ═══════════════════════════════════════════════════════════════

export const parallaxContainer = {
  y: [0, -50],
  transition: { duration: 0.8 },
};

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTION: Create delayed animation
// ═══════════════════════════════════════════════════════════════

export const createDelayedAnimation = (baseAnimation, delay) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay,
  },
});

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTION: Combine animations
// ═══════════════════════════════════════════════════════════════

export const combineAnimations = (...animations) => {
  return animations.reduce((acc, animation) => ({ ...acc, ...animation }), {});
};
