import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookingSection from "@/components/BookingSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import Footer from "@/components/Footer";
import HeroAd from "@/components/HeroAd";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <HeroAd />
      <FeaturesSection />
      <LocationSection />
      <BookingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
