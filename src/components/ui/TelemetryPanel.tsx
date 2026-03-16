import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string; // Add optional className
}

export default function TelemetryPanel({ title, children, delay = 0, className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative bg-black/60 border border-white/10 p-6 backdrop-blur-xl overflow-hidden ${className}`}
    >
      {/* Decorative top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ferrari-red to-transparent opacity-80" />
      
      {/* Decorative grid lines */}
      <div className="absolute top-0 right-0 p-2 flex space-x-1 opacity-30">
        <div className="w-1 h-3 bg-white" />
        <div className="w-1 h-3 bg-white" />
        <div className="w-1 h-3 bg-white" />
      </div>

      <h3 className="text-sm text-ferrari-red font-rajdhani uppercase tracking-[0.2em] mb-4">
        {title}
      </h3>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
      {/* Scanning effect */}
      <motion.div 
        animate={{ y: ['-10%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none z-0"
      />
    </motion.div>
  );
}
