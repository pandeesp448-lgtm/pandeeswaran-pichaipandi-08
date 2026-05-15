import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkBg = () => {
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      connections: Array.from({ length: 3 }, () => Math.floor(Math.random() * 40))
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg width="100%" height="100%" className="w-full h-full">
        <defs>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Lines between nodes */}
        {nodes.map((node) => 
          node.connections.map((targetId, idx) => {
            const target = nodes[targetId];
            return (
              <motion.line
                key={`${node.id}-${targetId}-${idx}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="var(--color-accent)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 0.3, 0] }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            );
          })
        )}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="var(--color-accent)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkBg;
