import { motion } from 'framer-motion';

export default function TrackMap() {
  return (
    <div className="relative w-full aspect-video border border-white/5 bg-tech-black/50 overflow-hidden flex items-center justify-center p-8">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {/* Track SVG Placeholder (Monza shape approximation) */}
      <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        <motion.path
          d="M 200,100 C 300,50 500,50 600,100 C 700,150 750,250 650,300 C 550,350 400,250 300,300 C 200,350 50,250 100,150 Z"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M 200,100 C 300,50 500,50 600,100 C 700,150 750,250 650,300 C 550,350 400,250 300,300 C 200,350 50,250 100,150 Z"
          fill="none"
          stroke="#E32636"
          strokeWidth="3"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          animate={{ strokeDashoffset: [2000, 0] }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
        
        {/* Car blip */}
        <motion.circle
          r="6"
          fill="#FFF"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
           <animateMotion 
            dur="4s" 
            repeatCount="1"
            path="M 200,100 C 300,50 500,50 600,100 C 700,150 750,250 650,300 C 550,350 400,250 300,300 C 200,350 50,250 100,150 Z" 
          />
        </motion.circle>
      </svg>

      <div className="absolute bottom-4 left-4 text-xs font-rajdhani text-white/50 space-y-1">
        <div>TRACK_ID: MNZ_01</div>
        <div>GRIP_LEVEL: <span className="text-ferrari-red">OPTIMAL</span></div>
      </div>
    </div>
  );
}
