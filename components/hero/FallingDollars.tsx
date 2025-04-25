import { useEffect, useState, useRef } from 'react';

interface Dollar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  speed: number;
  rotation: number;
}

const FallingDollars = () => {
  const [dollars, setDollars] = useState<Dollar[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create initial dollars
    const initialDollars: Dollar[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 100,
      size: 0.8 + Math.random() * 1.5, // Slightly smaller dollars
      delay: Math.random() * 5,
      speed: 0.5 + Math.random() * 1.5,
      rotation: Math.random() * 360,
    }));
    setDollars(initialDollars);

    // Animation loop
    const interval = setInterval(() => {
      setDollars((prevDollars) =>
        prevDollars.map((dollar) => {
          // Use viewport height for calculations
          const viewportHeight = window.innerHeight;
          // Limit the animation area to the hero section (roughly)
          const heroHeight = viewportHeight * 0.8;
          
          if (dollar.y > heroHeight) {
            // Reset position when dollar reaches bottom of hero section
            return {
              ...dollar,
              y: -10 - Math.random() * 20,
              x: Math.random() * 100,
              rotation: Math.random() * 360,
            };
          }
          // Calculate new x position with boundaries
          const newX = dollar.x + Math.sin(dollar.y * 0.01) * 0.3;
          // Constrain x position between 0 and 100
          const boundedX = Math.max(0, Math.min(100, newX));
          
          return {
            ...dollar,
            y: dollar.y + dollar.speed,
            x: boundedX, // Use bounded x value
            rotation: dollar.rotation + 0.5, // Continuous rotation
          };
        })
      );
    }, 16); // ~60fps

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ height: '100%', width: '100%' }}
    >
      {dollars.map((dollar) => (
        <div
          key={dollar.id}
          className="absolute text-yellow-500 font-bold"
          style={{
            left: `${dollar.x}%`,
            top: `${dollar.y}px`,
            fontSize: `${dollar.size}rem`,
            animationDelay: `${dollar.delay}s`,
            opacity: 0.7 + Math.random() * 0.3,
            transform: `rotate(${dollar.rotation}deg)`,
            textShadow: '0 0 10px rgba(212, 175, 55, 0.7)',
            transition: 'transform 0.1s ease-out',
            willChange: 'transform',
          }}
        >
          $
        </div>
      ))}
    </div>
  );
};

export default FallingDollars;