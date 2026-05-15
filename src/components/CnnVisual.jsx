import React, { useState, useEffect, useCallback } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const CnnVisual = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const translateX = useSpring(useTransform(mouseX, [0, 1000], [-15, 15]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [0, 600], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Define layers for the CNN visualization
  const layers = [
    { id: 'input', type: 'grid', size: 4, label: 'Input Image' },
    { id: 'conv1', type: 'blocks', count: 3, size: 3, label: 'Conv 1' },
    { id: 'conv2', type: 'blocks', count: 5, size: 2, label: 'Conv 2' },
    { id: 'flatten', type: 'vector', nodes: 8, label: 'Flatten' },
    { id: 'dense', type: 'vector', nodes: 4, label: 'Dense' },
    { id: 'output', type: 'vector', nodes: 2, label: 'Output' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-40"
      style={{ x: translateX, y: translateY }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines with flow effect */}
        <g opacity="0.3">
          {/* Input to Conv 1 */}
          <motion.path
            d="M150 300 L250 200 M150 300 L250 300 M150 300 L250 400"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Conv 1 to Conv 2 */}
          <motion.path
            d="M350 200 L450 150 M350 300 L450 300 M350 400 L450 450"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Conv 2 to Flatten */}
          <motion.path
            d="M550 150 L650 300 M550 300 L650 300 M550 450 L650 300"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Input Layer */}
        <g transform="translate(100, 250)">
          <motion.rect
            width="80"
            height="80"
            fill="rgba(210, 180, 140, 0.05)"
            stroke="var(--color-accent)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M0 20 H80 M0 40 H80 M0 60 H80 M20 0 V80 M40 0 V80 M60 0 V80"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <text x="40" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">INPUT</text>
        </g>

        {/* Conv Layer 1 */}
        <g transform="translate(280, 180)">
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={i}
              x={i * 15}
              y={i * 15}
              width="50"
              height="50"
              fill="rgba(210, 180, 140, 0.1)"
              stroke="var(--color-accent)"
              strokeWidth="1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: i * 15 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              style={{ filter: 'url(#glow)' }}
            />
          ))}
          <text x="40" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">CONV_1</text>
        </g>

        {/* Conv Layer 2 */}
        <g transform="translate(480, 140)">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.rect
              key={i}
              x={i * 10}
              y={i * 10}
              width="35"
              height="35"
              fill="rgba(210, 180, 140, 0.15)"
              stroke="var(--color-accent)"
              strokeWidth="1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: i * 10 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{ filter: 'url(#glow)' }}
            />
          ))}
          <text x="30" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">CONV_2</text>
        </g>

        {/* Flattened Vector */}
        <g transform="translate(680, 150)">
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx="0"
              cy={i * 25}
              r="3"
              fill="var(--color-accent)"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: i * 25 }}
              transition={{ delay: 1 + i * 0.05 }}
            />
          ))}
          <text x="0" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">FLATTEN</text>
        </g>

        {/* Dense Layer */}
        <g transform="translate(800, 200)">
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx="0"
              cy={i * 30}
              r="4"
              fill="var(--color-primary)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              style={{ filter: 'url(#glow)' }}
            />
          ))}
          <text x="0" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">DENSE</text>
        </g>

        {/* Output Layer */}
        <g transform="translate(920, 260)">
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={i}
              cx="0"
              cy={i * 40}
              r="6"
              stroke="var(--color-accent)"
              strokeWidth="2"
              fill="transparent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.2 }}
            />
          ))}
          <text x="0" y="-15" textAnchor="middle" fill="var(--color-textDim)" fontSize="10" fontFamily="monospace">OUTPUT</text>
        </g>

        {/* Dynamic Pulses (moving along connections) */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="var(--color-accent)"
            animate={{
              cx: [150, 280, 480, 680, 800, 920],
              cy: [300, 200 + (i * 20), 180 + (i * 15), 300, 300, 300],
              opacity: [0, 1, 1, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{ filter: 'url(#glow)' }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default CnnVisual;
