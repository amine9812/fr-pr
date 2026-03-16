import { motion } from 'framer-motion';
import { BackgroundVideo } from '../components/ui';

interface Props {
  isActive: boolean;
}

export default function Scene6_FerrariSpotlight({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-ferrari-dark/80 flex items-center justify-center">
      <BackgroundVideo opacity={0.6} fallbackColor="bg-ferrari-dark" />
      
      {/* Intense dark vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black_80%)] z-0" />

      {/* Placeholder Text for missing video */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 mix-blend-overlay opacity-20">
         <span className="text-[20rem] font-black text-ferrari-red">SCUDERIA</span>
      </div>

      <div className="z-10 text-center flex flex-col items-center">
        
        <motion.div
           initial={{ scale: 1.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="w-32 h-32 border-4 border-ferrari-red flex items-center justify-center mb-8 rotate-45"
        >
           <motion.div 
             animate={{ rotate: -45 }}
             transition={{ duration: 0 }}
             className="text-white text-5xl font-black"
           >
             PIT
           </motion.div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-[5.5rem] font-black text-white leading-none tracking-tighter shadow-black drop-shadow-2xl"
        >
          UNE CHORÉGRAPHIE <br/><span className="text-ferrari-red">MÉCANIQUE</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-8 text-2xl text-white/80 font-inter font-light max-w-2xl text-center leading-relaxed"
        >
          2.0 secondes. 20 personnes. <br/>
          La stratégie s'exécute dans un arrêt parfait. <br/>
          La donnée devient triomphe ou désastre.
        </motion.p>
        
        {/* Cinematic horizontal letterboxes */}
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "4rem" }} 
          transition={{ duration: 2 }} 
          className="absolute top-0 left-0 right-0 bg-black z-50" 
        />
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "4rem" }} 
          transition={{ duration: 2 }} 
          className="absolute bottom-0 left-0 right-0 bg-black z-50" 
        />
      </div>
    </div>
  );
}
