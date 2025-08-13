import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-16 h-16">
              <img
                src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753792454/FULAM-LOGO-WHITE-1-modified_izkiu1.png"
                alt="fulham-logo"
              />
            </div>
            <p className="text-background/80 leading-relaxed">
              Premium shortlet apartments in the heart of the city. Experience
              luxury, comfort, and convenience like never before.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-background/80 hover:text-primary-glow hover:bg-background/10"
                onClick={() =>
                  window.open("https://instagram.com/luxurystays", "_blank")
                }
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/80 hover:text-primary-glow hover:bg-background/10"
                onClick={() =>
                  window.open("https://wa.me/2348036984078", "_blank")
                }
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-0.5" />
                <div>
                  <p className="text-background/80">36A Bourdillon road,</p>
                  <p className="text-background/80">Ikoyi, Lagos, Nigeria.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-glow" />
                <a
                  href="tel:+2348036984078"
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  +234 80 3698 4078
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-glow" />
                <a
                  href="mailto:patrickcourtbourdillon@gmail.com"
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  patrickcourtbourdillon@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">
              Quick Links
            </h4>
            <div className="space-y-2">
              <button
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-background/80 hover:text-primary-glow transition-colors"
              >
                Book Now
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-background/80 hover:text-primary-glow transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-background/80 hover:text-primary-glow transition-colors"
              >
                Amenities
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-background/80 hover:text-primary-glow transition-colors"
              >
                Location
              </button>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">
              Availability
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-glow" />
                <div>
                  <p className="text-background font-medium">24/7 Support</p>
                  <p className="text-background/80 text-sm">
                    Always here to help
                  </p>
                </div>
              </div>
              <div className="bg-background/10 rounded-lg p-4">
                <p className="text-background font-medium mb-2">
                  Check Availability
                </p>
                <p className="text-background/80 text-sm mb-3">
                  Ready to book? Contact us for instant availability check.
                </p>
                <Button
                  variant="luxury"
                  size="sm"
                  className="w-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2348036984078?text=Hi! I'd like to check availability for your luxury apartment.",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Patrick's Court. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-background/60 hover:text-primary-glow transition-colors">
                Privacy Policy
              </button>
              <button className="text-background/60 hover:text-primary-glow transition-colors">
                Terms of Service
              </button>
              <button className="text-background/60 hover:text-primary-glow transition-colors">
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
