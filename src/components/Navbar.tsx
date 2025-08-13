import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage
          ? "bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm"
          : "bg-background/95 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-16">
              <img
                src="https://res.cloudinary.com/dn1jpokek/image/upload/v1753792454/FULAM-LOGO-WHITE-1-modified_izkiu1.png"
                alt="fulham-logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isHomePage
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isHomePage
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isHomePage
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isHomePage
                  ? "text-white/90 hover:text-white drop-shadow-md"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Contact
            </Link>
            <Button
              variant={isHomePage ? "hero" : "default"}
              className="shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHomePage
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-accent"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden pb-6 ${
              isHomePage
                ? "bg-black/80 backdrop-blur-md rounded-lg mx-4 mb-4"
                : "bg-background/95 backdrop-blur-md border-t border-border/50"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <Link
                to="/"
                className={`font-medium py-2 transition-colors ${
                  isHomePage
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium py-2 transition-colors ${
                  isHomePage
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className={`font-medium py-2 transition-colors ${
                  isHomePage
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`font-medium py-2 transition-colors ${
                  isHomePage
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant={isHomePage ? "hero" : "default"}
                className="mt-2 shadow-luxury"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
