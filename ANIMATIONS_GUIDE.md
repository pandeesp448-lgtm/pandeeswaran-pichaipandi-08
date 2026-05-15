# 🎬 Portfolio Animations Guide

This guide documents all available animations in your portfolio and how to use them.

## 📁 Files

- **`src/utils/animations.js`** - Central animation definitions
- **`src/index.css`** - CSS animations and keyframes
- All components import from these for consistent animations

---

## 🎯 Animation Categories

### 1. **Container Animations** (for groups)

Use when animating a group of items with stagger effects.

```jsx
import { containerVariants } from '../utils/animations';

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Children will stagger in */}
</motion.div>
```

**Available:**
- `containerVariants` - Standard stagger with 0.1s delay between items
- `containerVariantsSmooth` - Slower stagger with 0.08s delay

---

### 2. **Entry Animations** (appear from direction)

Use when elements need to slide or fade in from a direction.

```jsx
import { fadeInUp, fadeInLeft, fadeInRight, fadeInDown } from '../utils/animations';

// Fade in from bottom
<motion.div {...fadeInUp}>Content</motion.div>

// Fade in from left
<motion.div {...fadeInLeft}>Content</motion.div>

// Fade in from right
<motion.div {...fadeInRight}>Content</motion.div>

// Fade in from top
<motion.div {...fadeInDown}>Content</motion.div>
```

---

### 3. **Scale Animations** (grow/shrink effects)

```jsx
import { scaleIn, scaleInRotate } from '../utils/animations';

// Simple scale up
<motion.div {...scaleIn}>Content</motion.div>

// Scale with rotation
<motion.div {...scaleInRotate}>Content</motion.div>
```

---

### 4. **Interactive Animations** (hover/tap states)

Use with `while*` variants for interactive effects.

```jsx
import { hoverScale, hoverLift, hoverGlow } from '../utils/animations';

// Grow on hover
<motion.div {...hoverScale}>Hover me</motion.div>

// Lift on hover
<motion.div {...hoverLift}>Lift me</motion.div>

// Glow on hover
<motion.div {...hoverGlow}>Glow me</motion.div>
```

---

### 5. **Scroll Trigger Animations** (useInView)

Use when items should animate as they come into view.

```jsx
import { inViewProps, inViewPropsLeft, inViewPropsRight, inViewPropsScale } from '../utils/animations';

// From bottom (standard)
<motion.div {...inViewProps}>Content</motion.div>

// From left
<motion.div {...inViewPropsLeft}>Content</motion.div>

// From right
<motion.div {...inViewPropsRight}>Content</motion.div>

// Scale up from view
<motion.div {...inViewPropsScale}>Content</motion.div>
```

---

### 6. **Float Animations** (continuous floating motion)

Use for decorative elements or icons that should have subtle motion.

```jsx
import { floatAnimation, floatAnimationSlow, floatAnimationFast } from '../utils/animations';

// Standard (6s)
<motion.div {...floatAnimation}>Float</motion.div>

// Slow (8s)
<motion.div {...floatAnimationSlow}>Float slow</motion.div>

// Fast (4s)
<motion.div {...floatAnimationFast}>Float fast</motion.div>
```

---

### 7. **Rotation Animations** (continuous spin)

```jsx
import { rotateAnimation, rotateAnimationSlow } from '../utils/animations';

// Standard rotation (20s)
<motion.div {...rotateAnimation}>Spin</motion.div>

// Slow rotation (30s)
<motion.div {...rotateAnimationSlow}>Spin slow</motion.div>
```

---

### 8. **Text Animations** (character-by-character)

```jsx
import { textReveal, charAnimation } from '../utils/animations';

// Line by line
<motion.div variants={textReveal} initial="hidden" animate="visible">
  {text.split('\n').map((line, i) => (
    <motion.div key={i} custom={i} variants={textReveal}>
      {line}
    </motion.div>
  ))}
</motion.div>

// Character by character
<motion.div variants={charAnimation} initial="hidden" animate="visible">
  {text.split('').map((char, i) => (
    <motion.span key={i} custom={i} variants={charAnimation}>
      {char}
    </motion.span>
  ))}
</motion.div>
```

---

### 9. **Progress Bar Animations**

```jsx
import { progressBarVariants } from '../utils/animations';

<motion.div
  variants={progressBarVariants}
  initial="hidden"
  animate="visible"
  custom={0}
  style={{ originX: 0 }}
>
  Progress bar
</motion.div>
```

---

### 10. **Modal/Drawer Animations**

```jsx
import { fadeInScale, slideFromBottom } from '../utils/animations';

// Popup effect
<motion.div {...fadeInScale}>Modal</motion.div>

// Slide up from bottom
<motion.div {...slideFromBottom}>Drawer</motion.div>
```

---

### 11. **Button Animations**

```jsx
import { buttonHover, buttonGlow } from '../utils/animations';

// Scale and shadow on hover
<motion.button {...buttonHover}>Click me</motion.button>

// Glow effect on hover
<motion.button {...buttonGlow}>Glow</motion.button>
```

---

### 12. **Badge/Chip Animations**

```jsx
import { badgeHover, badgePulse } from '../utils/animations';

// Lift on hover
<motion.span {...badgeHover}>Badge</motion.span>

// Pulse glow animation
<motion.span {...badgePulse}>Pulse</motion.span>
```

---

## 🎨 CSS Animations

Available CSS classes for quick animations:

```html
<!-- Float animations -->
<div class="animate-float">Floats: 6s cycle</div>
<div class="animate-float-slow">Floats slow: 8s cycle</div>
<div class="animate-float-fast">Floats fast: 4s cycle</div>

<!-- Bounce -->
<div class="animate-bounce-smooth">Bounces smoothly</div>

<!-- Glow -->
<div class="animate-glow-pulse">Pulses with glow</div>

<!-- Rotation -->
<div class="animate-rotate-slow">Rotates slowly</div>

<!-- Fade -->
<div class="animate-fade-in-smooth">Fades in smoothly</div>

<!-- Text glow -->
<div class="animate-text-glow">Text glows</div>

<!-- Gradient shift -->
<div class="animate-gradient-shift">Gradient shifts</div>

<!-- Marquee -->
<div class="marquee-row">
  <div class="marquee-track animate-marquee-left">
    <!-- Content -->
  </div>
</div>
```

---

## 🔧 Usage Patterns

### Pattern 1: Element appears on scroll

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Or use the pre-built version:
import { inViewProps } from '../utils/animations';
<motion.div {...inViewProps}>Content</motion.div>
```

### Pattern 2: Staggered list animation

```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Pattern 3: Interactive card

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ y: -8, scale: 1.02 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Card
</motion.div>
```

### Pattern 4: Conditional animation

```jsx
const inView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## 📊 Animation Timing

Different transition types available:

```jsx
// Spring (bouncy, natural)
transition={{ type: "spring", stiffness: 400, damping: 17 }}

// Ease (smooth)
transition={{ type: "ease", duration: 0.6 }}

// Linear (constant speed)
transition={{ type: "linear", duration: 0.6 }}

// Custom easing
transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.6 }}
```

---

## 🎬 Easing Presets

Common easing functions used in this portfolio:

```javascript
// Standard ease (smooth deceleration)
[0.25, 0.46, 0.45, 0.94]

// Premium ease (more natural)
[0.16, 1, 0.3, 1]
```

---

## 💡 Tips

1. **Always use `viewport={{ once: true }}`** to prevent re-animation on scroll
2. **Use `margin: "-100px"`** to trigger animations before elements are in view
3. **Keep animations under 1 second** for smooth feel
4. **Use spring transitions** for interactive elements (buttons, cards)
5. **Use ease transitions** for scroll-triggered animations
6. **Combine animations** for richer effects:

```jsx
import { combineAnimations, fadeInUp, hoverScale } from '../utils/animations';

<motion.div {...combineAnimations(fadeInUp, hoverScale)}>
  Content
</motion.div>
```

---

## 📚 Component Implementation Examples

### Updated Components Using Animations:

- ✅ `App.jsx` - Page-level entrance animations
- ✅ `Skills.jsx` - Skill cards with scale animations
- ✅ `Projects.jsx` - Project cards with directional fades
- ✅ `About.jsx` - Image and text animations
- ✅ `Hero.jsx` - Float and scale animations
- ✅ `Education.jsx` - Timeline animations
- ✅ `Contact.jsx` - Form animations
- ✅ `Footer.jsx` - Footer content animations
- ✅ `Navbar.jsx` - Navigation animations
- ✅ `AiAssistant.jsx` - Modal animations

---

## 🚀 Best Practices

1. **Use consistent animation timings** across components
2. **Avoid over-animating** - let content breathe
3. **Test on lower-end devices** - use `will-change` CSS for performance
4. **Mobile-first** - animations should enhance, not distract on mobile
5. **Accessibility** - respect `prefers-reduced-motion`:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.6
  }}
>
  Content
</motion.div>
```

---

## 🎯 Quick Reference

| Animation | Usage | Duration |
|-----------|-------|----------|
| `fadeInUp` | Scroll reveal | 0.6s |
| `fadeInLeft/Right` | Directional reveal | 0.7s |
| `scaleIn` | Pop entrance | 0.5s |
| `floatAnimation` | Subtle float | 6s |
| `hoverScale` | Interactive hover | spring |
| `inViewProps` | Scroll trigger | 0.8s |
| `containerVariants` | Stagger group | 0.1s delay |

---

## 📝 Notes

All animations use **Framer Motion** with **Tailwind CSS** for styling. The animations are optimized for performance and accessibility.

For more details, check:
- `src/utils/animations.js` - Main definitions
- `src/index.css` - CSS keyframes
- Individual component files for implementation examples

---

**Happy animating! 🚀✨**
