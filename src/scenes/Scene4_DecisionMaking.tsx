import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  isActive: boolean;
}

export default function Scene4_DecisionMaking({ isActive }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timer1 = setTimeout(() => setPhase(1), 2000); // Alert appears
      const timer2 = setTimeout(() => setPhase(2), 5000); // Decision made
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        setPhase(0);
      };
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-[60vh] z-10 space-y-8 md:space-y-0 md:space-x-12 px-8">
        
        {/* Left: Communication */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white leading-none mb-6"
          >
            LA DONNÉE <br/>DEVIENT <span className="text-ferrari-red">ACTION</span>
          </motion.h2>
          <p className="text-xl text-white/50 font-inter font-light">
            Une alarme retentit. Une température dérive. Le pilote signale une perte de grip. En quelques secondes, le mur des stands doit trancher.
          </p>
        </div>

        {/* Right: Dynamic Interface */}
        <div className="flex-1 relative flex flex-col justify-center border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden">
          {/* Abstract scanning line */}
          <motion.div
             animate={{ y: ['-10%', '110%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             className="absolute left-0 right-0 h-1 bg-white/20 z-0"
          />

          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div
                key="monitoring"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center h-full space-y-4"
              >
                <CheckCircle2 className="w-20 h-20 text-white/50" />
                <div className="text-2xl tracking-widest text-white/50">MONITORING NORMAL</div>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div
                key="alert"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center h-full space-y-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <AlertCircle className="w-24 h-24 text-ferrari-red drop-shadow-[0_0_20px_rgba(227,38,54,0.8)]" />
                </motion.div>
                <div className="text-3xl font-black tracking-widest text-ferrari-red uppercase text-center">
                  WARNING: FRONT LEFT DEGRADATION
                </div>
                <div className="flex space-x-4 mt-6">
                   <div className="bg-ferrari-red/20 border border-ferrari-red px-6 py-2 text-white">PLAN A</div>
                   <div className="bg-tech-gray border border-white/20 px-6 py-2 text-white/50">PLAN B</div>
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="decision"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center justify-center h-full"
              >
                <div className="w-full text-center p-6 border-2 border-ferrari-red bg-ferrari-red/10 animate-pulse">
                  <div className="text-sm tracking-widest text-white/70 mb-2">RADIO MESSAGE TO DRIVER</div>
                  <div className="text-4xl font-black text-white">"BOX, BOX, BOX."</div>
                  <div className="text-xl text-ferrari-red mt-2 tracking-widest">SWITCH TO PLAN B</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
