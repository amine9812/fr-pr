import { motion } from 'framer-motion';
import Scene0_Intro from '../../scenes/Scene0_Intro';
import Scene1_HeroCar from '../../scenes/Scene1_HeroCar';
import Scene2_DataSensors from '../../scenes/Scene2_DataSensors';
import Scene3_EngineeringRoom from '../../scenes/Scene3_EngineeringRoom';
import Scene4_DecisionMaking from '../../scenes/Scene4_DecisionMaking';
import Scene5_Strategy from '../../scenes/Scene5_Strategy';
import Scene6_FerrariSpotlight from '../../scenes/Scene6_FerrariSpotlight';
import Scene7_Conclusion from '../../scenes/Scene7_Conclusion';

interface Props {
  currentScene: number;
  isActive: boolean;
}

export default function SceneManager({ currentScene, isActive }: Props) {
  // Map index to scene component
  const scenes = [
    Scene0_Intro,
    Scene1_HeroCar,
    Scene2_DataSensors,
    Scene3_EngineeringRoom,
    Scene4_DecisionMaking,
    Scene5_Strategy,
    Scene6_FerrariSpotlight,
    Scene7_Conclusion
  ];

  const ActiveScene = scenes[currentScene] || scenes[0];

  return (
    <motion.div
      key={`scene-${currentScene}`}
      initial={{ opacity: 0, scale: 0.98, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 1.02, x: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 z-10 w-full h-full"
    >
      <ActiveScene isActive={isActive} />
    </motion.div>
  );
}
