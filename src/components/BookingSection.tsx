import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Users, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    bedrooms: "1", // ← NEW FIELD
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Booking request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          bedrooms: "1",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="booking"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dn1jpokek/image/upload/v1753958086/pexels-pixabay-271639_dmirj4.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Reserve Your Stay
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury accommodation tailored to your needs. Book
            directly for the best rates and personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="shadow-luxury border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Booking Request
              </CardTitle>
              <CardDescription>
                Fill out this form and we'll get back to you within 24 hours
                with availability and pricing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in Date</Label>
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out Date</Label>
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-input bg-background py-2 px-3 shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground"
                  >
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="8"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Special Requests (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    rows={4}
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <Button type="submit" variant="luxury" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact & Rates */}
          <div className="space-y-6">
            <Card className="shadow-card border-0 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Quick Contact</CardTitle>
                <CardDescription>
                  Need immediate assistance? Contact us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={() =>
                    window.open("https://wa.me/2348036984078", "_blank")
                  }
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp: +234 803 698 4078
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open("tel:+2348036984078", "_self")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call: +234 803 698 4078
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Pricing Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      1 Bedroom (per night)
                    </span>
                    <span className="font-semibold text-primary">₦200,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      2 Bedroom (per night)
                    </span>
                    <span className="font-semibold text-primary">₦300,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      3 Bedroom (per night)
                    </span>
                    <span className="font-semibold text-primary">₦400,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">
                      4 Bedroom (per night)
                    </span>
                    <span className="font-semibold text-primary">₦500,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Weekly and monthly rates may vary depending on availability
                    and season.
                  </p>
                </div>
                {/* <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">
                    Monthly Rate (30+ nights)
                  </span>
                  <span className="font-semibold text-primary">$199/night</span>
                </div> */}
                {/* <div className="text-sm text-muted-foreground mt-4">
                  * Final pricing depends on dates, duration, and number of
                  guests
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
