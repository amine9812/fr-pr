import { useRef, useEffect } from 'react';

interface Props {
  src?: string;
  fallbackColor?: string;
  opacity?: number;
}

export default function BackgroundVideo({ 
  src, 
  fallbackColor = 'bg-tech-black',
  opacity = 0.5 
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down slightly for presentation mood
    }
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${fallbackColor}`}>
      {src ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full mix-blend-screen"
          style={{ opacity }}
        >
          <source src={src} type="video/mp4" />
          {/* Fallback pattern if video fails */}
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-ferrari-dark/20 mix-blend-multiply" 
          style={{ opacity }}
        >
          {/* Comment for the user: 
            Replace this placeholder with a real video.
            Example: <BackgroundVideo src="/assets/ferrari-f1-loop.mp4" opacity={0.6} />
          */}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-tech-black via-transparent to-tech-black/50" />
    </div>
  );
}
