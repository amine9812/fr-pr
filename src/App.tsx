import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SceneManager from './components/core/SceneManager';
import NavigationOverlay from './components/core/NavigationOverlay';
import PresenterNotes from './components/core/PresenterNotes';

const TOTAL_SCENES = 8; // 0 to 7

function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentScene((prev) => Math.min(prev + 1, TOTAL_SCENES - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentScene((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space or Right Arrow for Next
      if (e.code === 'Space' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
      // Left Arrow for Prev
      else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
      // 'N' to toggle notes
      else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-tech-black text-white">
      {/* Background elements can go here or inside each scene */}
      <div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
      <div className="absolute inset-0 scanlines z-50 mix-blend-overlay"></div>

      <AnimatePresence mode="wait">
        <SceneManager 
          key={currentScene} 
          currentScene={currentScene} 
          isActive={true} 
        />
      </AnimatePresence>

      <NavigationOverlay 
        currentScene={currentScene} 
        totalScenes={TOTAL_SCENES}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <PresenterNotes 
        currentScene={currentScene} 
        isVisible={showNotes} 
        onClose={() => setShowNotes(false)} 
      />
    </main>
  );
}

export default App;
