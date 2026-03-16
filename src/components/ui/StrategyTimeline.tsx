import { motion } from 'framer-motion';

export default function StrategyTimeline() {
  const events: Array<{ lap: number, label: string, type: 'info' | 'warning' | 'critical' }> = [
    { lap: 12, label: 'PIT WINDOW OPEN', type: 'info' },
    { lap: 15, label: 'TIRE DEG > 40%', type: 'warning' },
    { lap: 18, label: 'UNDERCUT OPPORTUNITY', type: 'critical' },
    { lap: 22, label: 'RIVAL PIT STOP', type: 'info' },
  ];

  const colors = {
    info: 'bg-white/20 border-white/40 text-white',
    warning: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500',
    critical: 'bg-ferrari-red/20 border-ferrari-red/50 text-ferrari-red'
  };

  return (
    <div className="w-full relative py-8">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2" />
      
      <div className="relative z-10 flex justify-between items-center w-full">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4 + 1 }}
            className="flex flex-col items-center relative group"
          >
            <div className={`w-3 h-3 rounded-full border ${colors[event.type].split(' ')[1]} bg-black z-10`} />
            
            <div className={`absolute top-6 border p-2 text-xs font-rajdhani whitespace-nowrap backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity ${colors[event.type]}`}>
              <div className="text-[0.6rem] opacity-70 mb-1">LAP {event.lap}</div>
              <div>{event.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
