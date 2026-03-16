import { motion } from 'framer-motion';
import { SensorHotspot } from '../components/ui';

interface Props {
  isActive: boolean;
}

export default function Scene2_DataSensors({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black overflow-hidden flex items-center justify-center">
      
      {/* Background wireframe/grid context */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tech-gray to-tech-black opacity-50 
        [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] opacity-20 pointer-events-none border border-white/5 bg-white/5 rounded-3xl" />

      {/* Title block */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-20 left-20 z-20"
      >
        <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-4 tracking-tight">
          UNE MACHINE <br/>DE <span className="text-ferrari-red">MESURE</span>
        </h2>
        <p className="text-xl text-white/50 font-inter font-light max-w-md">
          Chaque milliseconde, la voiture rapporte son intégrité, sa performance et son état environnemental au stand.
        </p>
      </motion.div>

      {/* Abstract F1 outline / technical diagram placeholder */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="relative w-[800px] h-[300px] border border-ferrari-red/30 bg-ferrari-red/5 rounded-[100px] flex items-center justify-center"
      >
        <span className="text-ferrari-red/40 tracking-[0.5em] text-sm font-rajdhani absolute top-4">F1_CHASSIS_WIRE.OBJ</span>
        
        {/* Sensor Hotspots aligned with a hypothetical car shape */}
        <SensorHotspot x={15} y={50} label="AERO FRONT WING (2.4 kPa)" delay={1.2} />
        <SensorHotspot x={30} y={20} label="FRONT LEFT FL (98°C)" delay={1.4} />
        <SensorHotspot x={30} y={80} label="FRONT RIGHT FR (95°C)" delay={1.5} />
        <SensorHotspot x={50} y={50} label="PU TEMPS (125°C)" delay={1.6} />
        <SensorHotspot x={70} y={20} label="REAR LEFT RL (102°C)" delay={1.8} />
        <SensorHotspot x={70} y={80} label="REAR RIGHT RR (101°C)" delay={1.9} />
        <SensorHotspot x={85} y={50} label="EXHAUST (800°C)" delay={2.0} />

        {/* Scanning laser line over the car */}
        <motion.div
           animate={{ x: ['-400px', '400px'] }}
           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
           className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-ferrari-red to-transparent opacity-60 shadow-[0_0_15px_#E32636]"
        />
      </motion.div>

    </div>
  );
}
