import { motion } from 'framer-motion';
import { BackgroundVideo } from '../components/ui';

interface Props {
  isActive: boolean;
}

export default function Scene1_HeroCar({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black">
      <BackgroundVideo opacity={0.4} />

      {/* Placeholder image for a Ferrari F1 car / 3D model */}
      <motion.div 
        initial={{ opacity: 0, x: 100, scale: 1.1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[70vw] h-[60vh]"
      >
        <div className="w-full h-full bg-gradient-to-l from-ferrari-red/20 to-transparent flex items-center justify-center border-l border-white/10">
          <span className="text-white/30 tracking-[1em] text-sm">CAR OBERVATION DECK [INSERT 3D RENDER / VIDEO HERE]</span>
        </div>
      </motion.div>

      <div className="absolute left-20 top-1/3 max-w-xl z-20">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-1 bg-ferrari-red" />
            <span className="text-ferrari-red tracking-widest text-lg font-bold">SYSTÈME ACTIF</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            LE LABORATOIRE<br/>ROULANT
          </h2>
          
          <p className="text-xl text-white/70 font-inter font-light leading-relaxed border-l-2 border-white/20 pl-6">
            La voiture de Formule 1 moderne n'est pas qu'un bolide. C'est le capteur IoT le plus rapide du monde.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, bottom: -50 }}
        animate={{ opacity: 1, bottom: 40 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-20 flex space-x-12 z-20"
      >
         <div>
           <p className="text-white/40 text-xs tracking-widest mb-1">CAPTEURS</p>
           <p className="text-3xl font-bold">300+</p>
         </div>
         <div>
           <p className="text-white/40 text-xs tracking-widest mb-1">DONNÉES / TOUR</p>
           <p className="text-3xl font-bold">2 GB</p>
         </div>
         <div>
           <p className="text-white/40 text-xs tracking-widest mb-1">LATENCE TÉLÉMÉTRIE</p>
           <p className="text-3xl font-bold text-ferrari-red">&lt; 10 ms</p>
         </div>
      </motion.div>
    </div>
  );
}
