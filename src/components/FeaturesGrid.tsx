import { Card } from "@/components/ui/card";
import {
  Wifi,
  Car,
  Dumbbell,
  Waves,
  Coffee,
  Shield,
  Utensils,
  Wind,
  Tv,
  Bed,
  Bath,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Fiber-optic internet perfect for remote work and streaming",
  },
  {
    icon: Car,
    title: "Parking Included",
    description: "Secure underground parking space for your convenience",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "24/7 access to state-of-the-art fitness facilities",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Rooftop infinity pool with stunning city views",
  },
  {
    icon: Coffee,
    title: "Gourmet Kitchen",
    description: "Fully equipped kitchen with premium appliances",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security and concierge service",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "On-site restaurant with world-class cuisine",
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "Individual climate control in every room",
  },
  {
    icon: Tv,
    title: "Entertainment",
    description: "Smart TVs with premium streaming services",
  },
  {
    icon: Bed,
    title: "Luxury Bedding",
    description: "Premium linens and memory foam mattresses",
  },
  {
    icon: Bath,
    title: "Spa Bathroom",
    description: "Marble bathrooms with rain showers and soaking tubs",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Minutes from shopping, dining, and business districts",
  },
];

const FeaturesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {features.map((feature, index) => (
      <Card
        key={index}
        className="p-6 bg-black/30 backdrop-blur-md border-primary/20 shadow-luxury hover:shadow-glow transition-all duration-500 hover:scale-105 hover:bg-black/40"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg">
            <feature.icon className="h-6 w-6 text-primary animate-glow-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export default FeaturesGrid;
