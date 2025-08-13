// src/components/HeroAd.js (or wherever your HeroAd component is)
import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";

const changingTexts = [
  "Experience The Difference",
  "Luxury Redefined",
  "Your Perfect Stay",
  "Comfort & Elegance",
];

const HeroAd = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Trigger fade out

      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % changingTexts.length
        );
        setVisible(true); // Trigger fade in
      }, 500); // Wait for fade-out before switching text
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const subtitle =
    currentTextIndex % 2 === 0
      ? "Where luxury meets innovation. Every moment crafted for perfection."
      : "Premium amenities. Unmatched comfort. Unforgettable experiences.";

  return (
    <div className="relative text-center mb-20 min-h-[20vh] lg:min-h-[20vh] flex flex-col justify-center">
      {/* VideoBackground with its video and overlay (z-index: 0, 1, 2) */}
      <VideoBackground />

      {/* Main content wrapper - give it a higher z-index to ensure it's on top */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full w-full">
        {" "}
        {/* z-index: 30 for content */}
        {/* Animated Heading */}
        <div className="relative h-24 flex items-center justify-center overflow-hidden">
          <h2
            className={`text-4xl md:text-6xl font-bold text-white transition-all duration-700 ease-in-out transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-2xl">
              {changingTexts[currentTextIndex]}
            </span>
          </h2>
        </div>
        {/* Subtitle */}
        <div className="mt-4">
          <p
            className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-in-out transform ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAd;
