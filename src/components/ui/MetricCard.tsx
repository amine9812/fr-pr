import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  value: number;
  unit: string;
  color?: 'red' | 'white' | 'gray';
  delay?: number;
}

export default function MetricCard({ title, value, unit, color = 'white', delay = 0 }: Props) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; // ms
    
    // Simulate count up animation manually (or with GSAP in bigger components)
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setDisplayValue(Math.floor(ease * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    const timeout = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  const colorClasses = {
    red: 'text-ferrari-red shadow-[0_0_15px_rgba(227,38,54,0.3)] border-ferrari-red/50',
    white: 'text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border-white/20',
    gray: 'text-white/60 border-white/10'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-4 bg-tech-gray/50 backdrop-blur-md border rounded-lg ${colorClasses[color].split(' ')[2]}`}
    >
      <div className="text-xs text-white/50 uppercase tracking-widest font-inter mb-1">
        {title}
      </div>
      <div className={`text-4xl font-rajdhani font-bold flex items-baseline space-x-1 ${colorClasses[color].split(' ')[0]}`}>
        <span>{displayValue}</span>
        <span className="text-lg text-white/40">{unit}</span>
      </div>
    </motion.div>
  );
}
