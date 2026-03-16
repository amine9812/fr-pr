export interface SceneProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface NavigationState {
  currentScene: number;
  totalScenes: number;
  showNotes: boolean;
}
