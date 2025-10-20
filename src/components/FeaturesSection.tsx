import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import VideoBackground from "./VideoBackground";
import FeaturesGrid from "./FeaturesGrid";




const FeaturesSection = () => (  

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2349033206525?text=Hi! I'm interested in booking an apartment.",
      "_blank"
    );
  };

 return(
  <section className="relative py-20 px-6 overflow-hidden bg-background">
    <div className="relative z-10 max-w-6xl mx-auto">
      <FeaturesGrid />

     
      {/* Call to Action */}
      <div className="text-center bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-primary/30 shadow-glow">
        <h3 className="text-3xl font-bold text-white mb-4 animate-glow-pulse">
          Ready to Experience Luxury?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
          Book your stay today and discover what makes our apartments
          extraordinary. Our dedicated concierge team is available 24/7 to
          ensure your comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+2349033206525">
            <Button
            variant="default"
            size="lg"
            className="min-w-[180px] bg-primary hover:bg-primary-glow text-black font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          </a>
          <Button
            variant="default"
            size="lg"
            className="min-w-[180px] bg-primary hover:bg-primary-glow text-black font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleWhatsApp}
            className="min-w-[180px] border-primary text-primary hover:bg-primary hover:text-black"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  </section>)
);

export default FeaturesSection;
