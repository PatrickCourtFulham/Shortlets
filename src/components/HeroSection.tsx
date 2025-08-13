import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-apartment.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2348036984078?text=Hi! I'm interested in booking your luxury apartment.",
      "_blank"
    );
  };

  const handleBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dn1jpokek/video/upload/v1754592626/VID-20250726-WA0009_vjh5fo.mp4"
            type="video/mp4"
          />
          <img
            src={heroImage}
            alt="Luxury Apartment Fallback"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent filter drop-shadow-lg">
            Experience
          </span>
          <span className="bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent block mt-2 filter drop-shadow-lg">
            Luxury Living
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Discover our premium shortlet apartments designed for the discerning
          traveler. Where comfort meets elegance in the heart of the city at the
          best price you can find anywhere for such premium services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={handleBooking}
            className="min-w-[200px]"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Now
          </Button>

          <Button
            variant="premium"
            size="lg"
            onClick={handleWhatsApp}
            className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Us
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-white/80">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary-glow rounded-full mr-2"></div>
            24/7 Concierge
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary-glow rounded-full mr-2"></div>
            Premium Location
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-primary-glow rounded-full mr-2"></div>
            Luxury Amenities
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
