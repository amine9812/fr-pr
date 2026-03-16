import { motion } from 'framer-motion';
import { TrackMap, StrategyTimeline, MetricCard } from '../components/ui';

interface Props {
  isActive: boolean;
}

export default function Scene5_Strategy({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black flex flex-col p-12">
      <div className="absolute inset-0 bg-gradient-to-tr from-ferrari-dark/10 to-tech-black pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-8"
      >
        <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-widest uppercase mb-4">
          LA DONNÉE GUIDE <span className="text-ferrari-red">LA STRATÉGIE</span>
        </h2>
      </motion.div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Left Column: Timing & Map */}
        <div className="flex flex-col space-y-6">
          <div className="bg-black/50 border border-white/10 p-4 h-64 overflow-hidden relative">
             <div className="absolute top-0 left-0 bg-ferrari-red px-2 py-1 text-xs text-white uppercase tracking-widest">LIVE GAP TO LEADER</div>
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col space-y-2 mt-8"
              >
                {/* Timing Board Simulation */}
                <div className="flex justify-between items-center text-xl font-bold bg-white/5 px-4 py-2 border-l-4 border-white/50 transition-colors">
                  <span className="w-8 text-white/50">1</span>
                  <span className="flex-1 ml-4 text-white">VER</span>
                  <span className="text-white/50">Interval</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold bg-ferrari-red/20 border border-ferrari-red/50 px-4 py-2 border-l-4 border-ferrari-red">
                  <span className="w-8 text-white/50">2</span>
                  <span className="flex-1 ml-4 text-white">LEC</span>
                  <span className="text-ferrari-red">+1.412s</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold bg-white/5 px-4 py-2 border-l-4 border-white/50">
                  <span className="w-8 text-white/50">3</span>
                  <span className="flex-1 ml-4 text-white">STR</span>
                  <span className="text-white/50">+3.804s</span>
                </div>
             </motion.div>
          </div>
          
          <div className="flex-1 relative">
             <TrackMap />
          </div>
        </div>

        {/* Right Column: Timeline & Overcut logic */}
        <div className="flex flex-col space-y-8 mt-12 lg:mt-0">
          
          <div className="border border-white/10 bg-black/50 p-6 flex flex-col space-y-6">
            <h3 className="text-xl tracking-widest text-ferrari-red border-b border-white/10 pb-2">RACE STRATEGY (2 STOPS)</h3>
            <StrategyTimeline />
          </div>

          <div className="flex space-x-6">
            <div className="flex-1">
              <MetricCard title="PIT LOSS TIMING" value={21} unit="sec" color="gray" delay={0.6} />
            </div>
            <div className="flex-1">
              <MetricCard title="TARGET LAP PACE" value={1} unit="m24s" color="red" delay={0.8} />
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
             className="bg-tech-gray border-l-4 border-ferrari-red p-6"
          >
             <p className="text-white/80 font-inter font-light leading-relaxed">
               "L'undercut : s'arrêter avant l'adversaire pour profiter de pneus neufs et combler l'écart. Tout se joue au dixième de seconde dans le système."
             </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
