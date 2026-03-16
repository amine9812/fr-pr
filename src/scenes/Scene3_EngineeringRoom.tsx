import { motion } from 'framer-motion';
import { TelemetryPanel, MetricCard } from '../components/ui';
import { Activity } from 'lucide-react';

interface Props {
  isActive: boolean;
}

export default function Scene3_EngineeringRoom({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black p-12 flex flex-col items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-4">
          Garages & <span className="text-ferrari-red">Pit Wall</span>
        </h2>
        <p className="text-xl text-white/60 font-inter font-light max-w-2xl mx-auto">
          Les données seules ne suffisent pas. Les ingénieurs transforment la télémétrie en décisions, en analysant à la fois au circuit et à l'usine.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl h-[60vh]">
        
        {/* Left Panel */}
        <div className="col-span-1 md:col-span-3 flex flex-col space-y-6">
          <TelemetryPanel title="TYRE TEMP & WEAR" delay={0.2} className="flex-1">
            <div className="flex flex-col space-y-4 justify-center h-full">
               <MetricCard title="FRONT LEFT" value={98} unit="°C" color="white" delay={0.4} />
               <MetricCard title="FRONT RIGHT" value={95} unit="°C" color="white" delay={0.5} />
               <MetricCard title="REAR LEFT" value={105} unit="°C" color="red" delay={0.6} />
               <MetricCard title="REAR RIGHT" value={101} unit="°C" color="white" delay={0.7} />
            </div>
          </TelemetryPanel>
        </div>

        {/* Center Main Panel */}
        <div className="col-span-1 md:col-span-6 flex flex-col space-y-6">
           <TelemetryPanel title="CORE TELEMETRY ALERTS" delay={0.4} className="flex-1 flex flex-col items-center justify-center">
              <Activity className="w-16 h-16 text-ferrari-red mb-4 animate-pulse" />
              <div className="text-2xl text-white tracking-[0.2em] mb-8 font-black">SYSTEM STATUS: OPTIMAL</div>
              
              <div className="w-full px-8">
                {/* Fake shifting charts */}
                <div className="w-full h-32 border border-white/10 bg-white/5 relative flex items-end px-2 pb-2 space-x-1 overflow-hidden">
                   {Array.from({ length: 40 }).map((_, i) => (
                     <motion.div 
                       key={i}
                       initial={{ height: '10%' }}
                       animate={{ height: `${Math.max(10, Math.random() * 100)}%` }}
                       transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                       className="flex-1 bg-ferrari-red/50 w-full"
                     />
                   ))}
                </div>
                <div className="text-xs text-white/40 mt-2 font-inter text-center">LIVE THROTTLE/BRAKE TRACE</div>
              </div>
           </TelemetryPanel>
        </div>

        {/* Right Panel */}
        <div className="col-span-1 md:col-span-3 flex flex-col space-y-6">
          <TelemetryPanel title="HYBRID SYSTEM" delay={0.6} className="h-1/2">
             <div className="flex flex-col justify-center h-full items-center">
                 <MetricCard title="MGU-K DEPLOYMENT" value={85} unit="%" color="white" delay={0.8} />
                 <div className="w-full bg-white/10 h-2 mt-6 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-ferrari-red" 
                    />
                 </div>
             </div>
          </TelemetryPanel>
          <TelemetryPanel title="ENGINE MODES" delay={0.7} className="h-1/2">
              <div className="flex flex-col space-y-3 justify-center h-full text-center">
                 <div className="border border-ferrari-red bg-ferrari-red/20 text-ferrari-red p-2 font-black shadow-[0_0_15px_rgba(227,38,54,0.3)]">STRAT 2</div>
                 <div className="border border-white/20 text-white/50 p-2">STRAT 3</div>
                 <div className="border border-white/20 text-white/50 p-2">STRAT 4</div>
              </div>
          </TelemetryPanel>
        </div>

      </div>
    </div>
  );
}
