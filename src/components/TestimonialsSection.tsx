import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "December 2024",
      text: "Absolutely stunning apartment! The attention to detail is incredible, from the marble bathrooms to the gourmet kitchen. The location couldn't be better - everything is within walking distance. Highly recommend for anyone seeking luxury accommodation.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "November 2024", 
      text: "Perfect for my business trip. The workspace was ideal for video calls, wifi was flawless, and the concierge service was exceptional. The apartment exceeded all expectations. Will definitely book again.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "October 2024",
      text: "Our anniversary trip was made perfect by this beautiful apartment. The rooftop pool, elegant interiors, and prime location made our stay unforgettable. The host was incredibly responsive and helpful.",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      location: "London, UK",
      rating: 5,
      date: "September 2024",
      text: "Exceptional luxury accommodation. The apartment is exactly as advertised - modern, clean, and beautifully furnished. The building amenities are top-notch. Perfect for extended business stays.",
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      location: "Seoul, Korea",
      rating: 5,
      date: "August 2024",
      text: "Amazing experience! The apartment is gorgeous with incredible city views. The kitchen is fully equipped and the bed is so comfortable. Customer service was outstanding throughout our stay.",
      avatar: "LP"
    },
    {
      name: "James Wilson",
      location: "Toronto, Canada",
      rating: 5,
      date: "July 2024",
      text: "This apartment is a gem! Luxury at its finest with impeccable cleanliness and modern amenities. The location is unbeatable - close to restaurants, shopping, and business district. Highly recommended!",
      avatar: "JW"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Guest Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our guests have to say about 
            their luxury experience with us.
          </p>
          
          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-card">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-primary">5.0</span>
            <span className="text-muted-foreground">• 127 Reviews</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-luxury border-0 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-500 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Guest Info */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.location} • {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-luxury">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Happy Guests
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Experience the same luxury and exceptional service that our guests rave about. 
              Book your stay today and create your own unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors shadow-luxury"
              >
                Book Your Stay
              </button>
              <button 
                onClick={() => window.open("https://wa.me/1234567890?text=Hi! I'd like to learn more about your luxury apartment.", "_blank")}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;