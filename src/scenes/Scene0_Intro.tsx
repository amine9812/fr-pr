import { motion } from 'framer-motion';

interface Props {
  isActive: boolean;
}

export default function Scene0_Intro({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-tech-black">
      {/* Background grid animate */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/33/F1_chequered_flag.svg')] bg-cover bg-center opacity-10 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-tech-black to-transparent z-0" />

      {/* Decorative center line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute w-px h-[60vh] bg-gradient-to-b from-transparent via-ferrari-red to-transparent opacity-50 z-0 origin-top"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="text-center z-10 flex flex-col items-center"
      >
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100px' }}
          transition={{ duration: 1, delay: 1 }}
          className="h-1 bg-ferrari-red mb-8"
        />

        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-rajdhani font-black text-white mb-2 tracking-tighter mix-blend-difference leading-none">
          LA FORMULE <span className="text-ferrari-red">1</span>
        </h1>
        
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: '0px' }}
          animate={{ opacity: 1, letterSpacing: '8px' }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-2xl md:text-3xl text-white font-inter font-light tracking-[8px] uppercase mt-4"
        >
          Vitesse, Ingénierie & Données
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 text-sm text-white/50 font-rajdhani tracking-widest border border-white/10 px-6 py-2 rounded-full"
        >
          PRESSEZ ESPACE POUR DÉMARRER
        </motion.p>
      </motion.div>
    </div>
  );
}
