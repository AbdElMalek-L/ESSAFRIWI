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
      size: 1 + Math.random() * 2,
      delay: Math.random() * 5,
      speed: 0.5 + Math.random() * 1.5,
      rotation: Math.random() * 360,
    }));
    setDollars(initialDollars);

    // Animation loop
    const interval = setInterval(() => {
      setDollars((prevDollars) =>
        prevDollars.map((dollar) => {
          const pageHeight = document.documentElement.scrollHeight;
          if (dollar.y > pageHeight) {
            // Reset position when dollar reaches bottom of page
            return {
              ...dollar,
              y: -10,
              x: Math.random() * 100,
              rotation: Math.random() * 360,
            };
          }
          return {
            ...dollar,
            y: dollar.y + dollar.speed,
            x: dollar.x + Math.sin(dollar.y * 0.01) * 0.3, // Slight swaying motion
            rotation: dollar.rotation + 0.5, // Continuous rotation
          };
        })
      );
    }, 16); // ~60fps

    // Handle scroll events to update positions
    const handleScroll = () => {
      setDollars((prevDollars) =>
        prevDollars.map((dollar) => ({
          ...dollar,
          y: dollar.y + window.scrollY,
        }))
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ height: '100%' }}
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
            opacity: 0.4 + Math.random() * 0.3,
            transform: `rotate(${dollar.rotation}deg)`,
            textShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
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