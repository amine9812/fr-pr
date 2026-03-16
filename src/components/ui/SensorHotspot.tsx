import { motion } from 'framer-motion';

interface Props {
  x: number;
  y: number;
  label: string;
  delay?: number;
}

export default function SensorHotspot({ x, y, label, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, type: 'spring' }}
      className="absolute flex items-center group cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Radar blip */}
      <div className="relative flex justify-center items-center">
        <div className="w-4 h-4 bg-ferrari-red rounded-full z-10" />
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-4 h-4 bg-ferrari-red rounded-full"
        />
      </div>

      {/* Label line and box */}
      <div className="flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <div className="w-8 h-px bg-ferrari-red/80 mr-2" />
        <div className="bg-black/80 border border-ferrari-red/50 text-white text-xs px-2 py-1 font-rajdhani uppercase tracking-widest backdrop-blur-sm">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
