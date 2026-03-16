import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  currentScene: number;
  isVisible: boolean;
  onClose: () => void;
}

const NOTES: Record<number, ReactNode> = {
  0: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 0 : TITRE (Intro)</p>
      <p>- "Bonjour à tous. Quand on regarde une course de Formule 1, on pense d'abord à la vitesse."</p>
      <p>- "Mais aujourd'hui, nous allons vous montrer que la F1 n'est plus seulement un sport mécanique."</p>
      <p>- "C'est un environnement piloté par les données et l'ingénierie."</p>
    </>
  ),
  1: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 1 : LA VOITURE</p>
      <p>- "La voiture de F1 moderne est un laboratoire roulant."</p>
      <p>- "Elle est littéralement couverte de capteurs."</p>
      <p>- "La performance ne commence pas quand le feu passe au vert, mais par l'information récoltée en temps réel."</p>
    </>
  ),
  2: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 2 : LES DONNÉES</p>
      <p>- "Chaque seconde, la voiture génère des milliers de points de données."</p>
      <p>- "Température des pneus, pression, dynamique de freinage..."</p>
      <p>- "La voiture est donc aussi une machine de mesure ultra-précise."</p>
    </>
  ),
  3: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 3 : INGÉNIERIE & TÉLÉMÉTRIE</p>
      <p>- "Mais les données seules ne suffisent pas."</p>
      <p>- "C'est dans les stands, sur le 'pit wall' et à l'usine que les ingénieurs analysent cette télémétrie."</p>
      <p>- "Ils surveillent la dégradation, l'équilibre et guident le pilote qui reste bien sûr central."</p>
    </>
  ),
  4: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 4 : DÉCISIONS EN TEMPS RÉEL</p>
      <p>- "L'intégration de la télémétrie nécessite des décisions immédiates."</p>
      <p>- "Faut-il modifier un réglage, attaquer ou préserver la mécanique ?"</p>
      <p>- "La donnée devient alors de l'action."</p>
    </>
  ),
  5: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 5 : STRATÉGIE & RACE PACE</p>
      <p>- "La donnée dicte la stratégie globale de la course."</p>
      <p>- "Quand s'arrêter (pit stop), la gestion des fenêtres de Safety Car, la technique de l'undercut..."</p>
      <p>- "Chaque dixième de seconde compte pour gagner ou perdre une position."</p>
    </>
  ),
  6: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 6 : FERRARI SPOTLIGHT</p>
      <p>- "Chez Scuderia Ferrari (et toutes les grandes équipes), l'arrêt aux stands est une chorégraphie d'une précision brutale."</p>
      <p>- "La coordination entre l'équipe technique, l'analyse des données de course, et la fenêtre optimale, c'est l'essence de la victoire."</p>
    </>
  ),
  7: (
    <>
      <p className="font-bold text-ferrari-red mb-2">SCÈNE 7 : CONCLUSION</p>
      <p>- "En conclusion, la donnée ne fait pas que décrire la course, elle la décide."</p>
      <p>- "Aujourd'hui, réussir en F1, c'est analyser aussi vite que l'on pilote."</p>
      <p>- "Merci de votre attention."</p>
    </>
  )
};

export default function PresenterNotes({ currentScene, isVisible, onClose }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-black/95 border-t-2 border-ferrari-red/50 shadow-[0_-10px_40px_rgba(227,38,54,0.15)] backdrop-blur-xl max-h-[40vh] overflow-y-auto"
        >
          <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2 text-white/60">
              <Mic className="w-5 h-5 text-ferrari-red" />
              <span className="font-rajdhani uppercase tracking-widest text-sm">Notes du présentateur (Vue privée)</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded transition-colors text-white/50 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-xl leading-relaxed text-white/90 space-y-3 font-inter">
            {NOTES[currentScene]}
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/40 flex justify-between">
            <span>Raccourcis: Flèches Gauche/Droite, Espace (Suivant), 'N' (Notes)</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
