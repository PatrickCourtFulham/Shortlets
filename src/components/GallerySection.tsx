import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [activeRoom, setActiveRoom] = useState("living");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cloudinaryImages = {
    living: [
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.16_te7ipg.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793864/WhatsApp_Image_2025-07-29_at_05.47.13_vlluof.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793863/WhatsApp_Image_2025-07-29_at_05.44.53_hvkyws.jpg",
    ],
    bedroom: [
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793864/WhatsApp_Image_2025-07-29_at_05.46.11_uuhdfh.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793866/WhatsApp_Image_2025-07-29_at_05.48.19_lgkhv1.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793862/WhatsApp_Image_2025-07-29_at_05.43.40_1_xbsphr.jpg",
    ],
    kitchen: [
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.17_2_gok4sx.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793863/WhatsApp_Image_2025-07-29_at_05.43.40_trfnz5.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793864/WhatsApp_Image_2025-07-29_at_05.44.54_f8vtpu.jpg",
    ],
    bathroom: [
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793865/WhatsApp_Image_2025-07-29_at_05.48.18_1_vnqadn.jpg",
      "https://res.cloudinary.com/dn1jpokek/image/upload/v1753793862/WhatsApp_Image_2025-07-29_at_05.43.40_2_hinb9e.jpg",
      "https://res.cloudinary.com/your-cloud-name/image/upload/v1/bathroom-3.jpg",
    ],
  };

  const rooms = {
    living: {
      title: "Living Room",
      description:
        "Spacious living area with floor-to-ceiling windows and modern furnishings",
      images: cloudinaryImages.living,
    },
    bedroom: {
      title: "Master Bedroom",
      description: "Luxurious bedroom with king-size bed and premium linens",
      images: cloudinaryImages.bedroom,
    },
    kitchen: {
      title: "Gourmet Kitchen",
      description:
        "Fully equipped kitchen with high-end appliances and marble countertops",
      images: cloudinaryImages.kitchen,
    },
    bathroom: {
      title: "Spa Bathroom",
      description: "Elegant bathroom with marble finishes and luxury fixtures",
      images: cloudinaryImages.bathroom,
    },
  };

  const currentRoom = rooms[activeRoom as keyof typeof rooms];

  useEffect(() => {
    setSelectedImage(currentRoom.images[0]);
  }, [activeRoom]);

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Apartment Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour through our beautifully designed spaces. Every
            room tells a story of luxury and comfort.
          </p>
        </div>

        {/* Room Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(rooms).map(([key, room]) => (
            <Button
              key={key}
              variant={activeRoom === key ? "luxury" : "outline"}
              onClick={() => setActiveRoom(key)}
              className="min-w-[120px]"
            >
              {room.title}
            </Button>
          ))}
        </div>

        {/* Main Gallery */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Featured Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-luxury border-0">
              <div className="relative aspect-[4/3] group">
                <img
                  src={selectedImage || currentRoom.images[0]}
                  alt={currentRoom.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            </Card>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4">
              {currentRoom.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square w-20 cursor-pointer rounded-lg overflow-hidden shadow-card border-2 ${
                    selectedImage === image
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${currentRoom.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Room Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {currentRoom.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentRoom.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Room Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeRoom === "living" && (
                  <>
                    <FeatureItem text="Floor-to-ceiling windows" />
                    <FeatureItem text="Smart TV with streaming" />
                    <FeatureItem text="Premium sound system" />
                    <FeatureItem text="City skyline views" />
                  </>
                )}
                {activeRoom === "bedroom" && (
                  <>
                    <FeatureItem text="King-size premium bed" />
                    <FeatureItem text="Blackout curtains" />
                    <FeatureItem text="Walk-in closet" />
                    <FeatureItem text="Climate control" />
                  </>
                )}
                {activeRoom === "kitchen" && (
                  <>
                    <FeatureItem text="Marble countertops" />
                    <FeatureItem text="Premium appliances" />
                    <FeatureItem text="Wine refrigerator" />
                    <FeatureItem text="Italian espresso machine" />
                  </>
                )}
                {activeRoom === "bathroom" && (
                  <>
                    <FeatureItem text="Marble finishes" />
                    <FeatureItem text="Rain shower system" />
                    <FeatureItem text="Soaking bathtub" />
                    <FeatureItem text="Heated floors" />
                  </>
                )}
              </div>
            </div>

            <Button
              variant="luxury"
              size="lg"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book This Space
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center text-muted-foreground">
    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
    {text}
  </div>
);

export default GallerySection;
