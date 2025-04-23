import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square rounded-full shadow-xl mb-12 transition-transform duration-300 ease-in-out hover:scale-105 animate-float origin-center">
      {/* Inner container for clipping */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <Image
          src="/hero.jpg"
          alt="Mokhtari49 Promotion"
          layout="fill"
          objectFit="contain"
          priority
          className="brightness-95 rounded-full"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
      {/* Golden Border */}
      <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30"></div>
    </div>
  );
};

export default Hero;