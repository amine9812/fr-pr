import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentScene: number;
  totalScenes: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function NavigationOverlay({ currentScene, totalScenes, onNext, onPrev }: Props) {
  return (
    <div className="absolute bottom-6 left-0 right-0 z-40 flex items-center justify-between px-12 pointer-events-none">
      
      {/* Left controls */}
      <div className="flex items-center space-x-4 pointer-events-auto">
        <button 
          onClick={onPrev}
          disabled={currentScene === 0}
          className="p-3 bg-black/50 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center space-x-3 pointer-events-auto">
        {Array.from({ length: totalScenes }).map((_, i) => (
          <div 
            key={i}
            className={`transition-all duration-300 rounded-full ${
              i === currentScene 
                ? 'w-8 h-1.5 bg-ferrari-red shadow-[0_0_10px_rgba(227,38,54,0.8)]' 
                : i < currentScene
                ? 'w-2.5 h-1.5 bg-white/40'
                : 'w-1.5 h-1.5 bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center space-x-4 pointer-events-auto">
        <button 
          onClick={onNext}
          disabled={currentScene === totalScenes - 1}
          className="p-3 bg-black/50 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed backdrop-blur-md"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
