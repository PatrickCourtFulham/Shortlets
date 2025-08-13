import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!"); // ✅ replaced alert
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message: " + result.message); // ✅ replaced alert
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2348036984078?text=Hi! I have an inquiry about your luxury apartments.",
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 803 698 4078", "+234 81 3999 6783"],
      action: "tel:+234 803 698 4078",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["patrickcourtbourdillon@gmail.com"],
      action: "mailto:patrickcourtbourdillon@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["36A Bourdillon road", "Ikoyi, Lagos, Nigeria."],
      action: "https://maps.app.goo.gl/AbvS6ZVn57jxhBNL9",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sun: 24/7", "Emergency: Available Always"],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753969945/pexels-vojtech-okenka-127162-392018_nfqir9.jpg"
              alt="Modern communication setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-sm">
              Get In Touch
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              We're here to help you with any questions about our luxury
              accommodations. Reach out to us and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-card hover:shadow-luxury transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {info.action && idx === 0 ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors"
                              target={
                                info.action.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gradient-luxury">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="border-border/50 shadow-luxury">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your inquiry..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="flex-1 shadow-luxury">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <Button
                        type="button"
                        variant="premium"
                        onClick={handleWhatsApp}
                        className="flex-1"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-border/50 shadow-luxury">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full min-h-[600px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.582066680119!2d3.4404912766085123!3d6.447668393543678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e6444c0b61%3A0x85c6fc21c993d661!2s36a%20Bourdillon%20Rd%2C%20Ikoyi%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1753969726395!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                      <div className="text-center p-8 text-white">
                        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">
                          Find Us Here
                        </h3>
                        <p className="text-white/80 mb-6 max-w-sm mx-auto">
                          Located in the heart of the premium district, easily
                          accessible by all major transportation methods.
                        </p>
                        <Button
                          variant="outline"
                          className="shadow-card"
                          onClick={() =>
                            window.open(
                              "https://maps.app.goo.gl/AbvS6ZVn57jxhBNL9",
                              "_blank"
                            )
                          }
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "We offer flexible cancellation up to 48 hours before your stay for a full refund. Late cancellations may incur charges.",
                },
                {
                  question: "Do you provide airport transfers?",
                  answer:
                    "Yes, we offer premium airport transfer services upon request. Contact us for pricing and scheduling.",
                },
                {
                  question: "Are pets allowed?",
                  answer:
                    "We welcome well-behaved pets in select accommodations. Additional fees may apply. Please inform us in advance.",
                },
                {
                  question: "What amenities are included?",
                  answer:
                    "All our apartments include high-speed WiFi, premium bedding, full kitchen, concierge service, and access to building amenities.",
                },
                {
                  question: "What is the minimum stay requirement?",
                  answer:
                    "Our minimum stay is 7 nights for most properties, with some requiring 30 nights for monthly rates.",
                },
                {
                  question: "Is there a security deposit?",
                  answer:
                    "Yes, we require a refundable security deposit that varies by property. This is typically $500-1000.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50 bg-card rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
