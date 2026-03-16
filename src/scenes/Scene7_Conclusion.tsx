import { motion } from 'framer-motion';

interface Props {
  isActive: boolean;
}

export default function Scene7_Conclusion({ isActive }: Props) {
  if (!isActive) return null;

  return (
    <div className="w-full h-full relative font-rajdhani bg-tech-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Dynamic converging lines background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[150vw] h-[150vw] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_350deg,rgba(227,38,54,0.3)_360deg)] rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute w-[100vw] h-[100vw] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_350deg,rgba(255,255,255,0.1)_360deg)] rounded-full"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="z-10 text-center flex flex-col items-center"
      >
        <div className="h-px w-32 bg-ferrari-red mb-12 shadow-[0_0_10px_#E32636]" />

        <h2 className="text-4xl md:text-5xl font-inter font-light text-white/50 mb-4 px-4 leading-tight">
          EN FORMULE 1, LA VITESSE <br/> SEULE NE SUFFIT PLUS.
        </h2>
        
        <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter mb-12">
          GAGNER, <br/>
          C'EST AUSSI <br/>
          <span className="text-ferrari-red inline-block drop-shadow-[0_0_30px_rgba(227,38,54,0.8)]">
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ANALYZER.
            </motion.span>
          </span>
        </h1>

        <div className="h-px w-32 bg-ferrari-red mt-4 shadow-[0_0_10px_#E32636]" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 text-sm text-white/30 tracking-[0.5em] font-light"
        >
          MERCI DE VOTRE ATTENTION
        </motion.p>
      </motion.div>

    </div>
  );
}
