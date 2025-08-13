import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Utensils, ShoppingBag, Plane } from "lucide-react";

const LocationSection = () => {
  // Real nearby attractions around Bourdillon & Ikoyi
  const nearbyAttractions = [
    {
      icon: Car,
      name: "Ikoyi Golf Club",
      distance: "5 min drive",
      description:
        "Exclusive 18‑hole course with tennis courts, swimming pool, gym, bars, library and spa facilities.",
    },
    {
      icon: Utensils,
      name: "Awolowo Road & Nightlife",
      distance: "10 min drive",
      description:
        "Main high street lined with upscale shops and boutiques, plus trendy cafés and bars for a vibrant nightlife.",
    },
    {
      icon: ShoppingBag,
      name: "Shopping Malls & Falomo Centre",
      distance: "5‑10 min drive",
      description:
        "Home to Ikoyi Shopping Mall, Falomo Shopping Centre, Pees Galleria, SPAR and Glover Lifestyle Mall—perfect for luxury shopping.",
    },
    {
      icon: Plane,
      name: "Culture & Parks",
      distance: "10 min drive",
      description:
        "Discover the National Museum (historic artefacts like the bullet‑riddled car of Gen. Murtala Mohammed and ancient crowns), art galleries such as Omenka, Ogirikan and Thought Pyramid, and green spaces like Osborne Recreational Park, The Garden Ikoyi, Falomo Garden and Dolphin Park.",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dn1jpokek/video/upload/v1754598753/13070858_1934_1080_30fps_nscnzh.mp4" // Replace with actual video URL
          type="video/mp4"
        />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Prime Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nestled on Bourdillon Road, our luxury residence puts you at the
            centre of Ikoyi’s finest—golf courses, high‑street shopping, upscale
            dining, culture and parks are all within a few minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map or address card */}
          <div className="relative">
            <Card className="overflow-hidden shadow-luxury border-0">
              <div className="aspect-[4/3] bg-gradient-luxury relative">
                {/* Map info */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-primary mx-auto" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        36A Bourdillon Road, Ikoyi
                      </h3>
                      <p className="text-muted-foreground">
                        Luxury residence at the heart of Ikoyi
                      </p>
                    </div>
                    <Button
                      variant="luxury"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=36A+Bourdillon+Road,+Ikoyi,+Lagos",
                          "_blank"
                        )
                      }
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>

                {/* Optional location markers for decoration */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary/60 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary/60 rounded-full"></div>
              </div>
            </Card>
          </div>

          {/* Details and attractions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nearby Attractions
              </h3>
              <p className="text-muted-foreground mb-6">
                Enjoy the convenience of having leisure clubs, shopping malls,
                dining hotspots and cultural landmarks right on your doorstep.
              </p>
            </div>

            <div className="grid gap-4">
              {nearbyAttractions.map((attraction, index) => {
                const IconComponent = attraction.icon;
                return (
                  <Card
                    key={index}
                    className="shadow-card border-0 bg-gradient-card"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">
                              {attraction.name}
                            </h4>
                            <span className="text-sm font-medium text-primary">
                              {attraction.distance}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {attraction.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick facts with travel times */}
            <Card className="shadow-card border-0 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="mr-2 h-5 w-5" />
                  Transportation Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Ikoyi Golf Club</span>
                  <span className="font-medium">5 min drive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Awolowo Road & Nightlife
                  </span>
                  <span className="font-medium">10 min drive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Shopping Malls</span>
                  <span className="font-medium">5–10 min drive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Museum & Parks</span>
                  <span className="font-medium">10 min drive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Murtala Muhammed Int’l Airport
                  </span>
                  <span className="font-medium">30 min drive</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
