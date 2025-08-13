import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "living", label: "Living Areas" },
    { id: "bedrooms", label: "Bedrooms" },
    { id: "kitchen", label: "Kitchen & Dining" },
    { id: "bathrooms", label: "Bathrooms" },
    { id: "amenities", label: "Amenities" },
    { id: "exterior", label: "Building & Views" },
  ];

  const gallery = [
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.17_k0nfgs.jpg",
      alt: "Luxury living room with modern furniture",
      category: "living",
      title: "Main Living Area",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793866/WhatsApp_Image_2025-07-29_at_05.48.19_lgkhv1.jpg",
      alt: "Luxury bedroom with king-size bed",
      category: "bedrooms",
      title: "Master Bedroom",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.17_2_gok4sx.jpg",
      alt: "Modern kitchen with premium appliances",
      category: "kitchen",
      title: "Gourmet Kitchen",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793862/WhatsApp_Image_2025-07-29_at_05.43.40_2_hinb9e.jpg",
      alt: "Spa-like bathroom with marble finishes",
      category: "bathrooms",
      title: "Master Bathroom",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.18_a4n0g2.jpg",
      alt: "Luxury bedroom with king-size bed",
      category: "bedrooms",
      title: "Master Bedroom 2",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.17_1_rrjfjk.jpg",
      alt: "Luxury dining area",
      category: "kitchen",
      title: "Dining Area",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.16_te7ipg.jpg",
      alt: "Modern living space",
      category: "living",
      title: "Living Space",
    },
    {
      src: "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793864/WhatsApp_Image_2025-07-29_at_05.46.11_uuhdfh.jpg",
      alt: "Luxury bedroom design",
      category: "bedrooms",
      title: "Guest Bedroom",
    },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? gallery
      : gallery.filter((image) => image.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753793864/WhatsApp_Image_2025-07-29_at_05.48.16_1_nopl01.jpg"
              alt="Modern luxury apartment interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-sm">
              Photo Gallery
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Take a visual tour of our luxury accommodations. From elegant
              interiors to stunning views, discover what makes our apartments
              extraordinary.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-background sticky top-20 z-40 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGallery.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-card hover:shadow-luxury transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Maximize2 className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">{image.title}</p>
                    </div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-black/60 text-white border-none">
                    {categories.find((cat) => cat.id === image.category)?.label}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 z-10 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 z-10 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image */}
              <div className="max-w-full max-h-full">
                <img
                  src={filteredGallery[currentImageIndex]?.src}
                  alt={filteredGallery[currentImageIndex]?.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="text-xl font-bold mb-2">
                  {filteredGallery[currentImageIndex]?.title}
                </h3>
                <p className="text-white/80">
                  {currentImageIndex + 1} of {filteredGallery.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-gradient-luxury">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              These photos only capture a glimpse of what awaits you. Book your
              stay today and experience the luxury firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => (window.location.href = "/#booking")}
              >
                Book Your Stay
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="shadow-card transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://wa.me/1234567890?text=Hi! I'd like to book a luxury apartment.",
                    "_blank"
                  )
                }
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
