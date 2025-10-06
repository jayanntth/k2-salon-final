import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import k2Logo from "@/assets/k2-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={k2Logo} alt="K2 Unisex Salon" className="h-10 w-auto" />
              <h3 className="font-serif text-xl font-bold">K2 Unisex Salon</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Elevate your beauty experience with our premium services. 
              Professional hair, skin, and beauty treatments for everyone.
            </p>
            <Button variant="outline" size="sm" asChild className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
              <a href="https://www.instagram.com/k2_unisexsalon/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>Follow Us</span>
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Our Services
              </Link>
              <Link to="/bridal" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Bridal Packages
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Locations & Contact
              </Link>
            </nav>
          </div>

          {/* Muddinapalya Location */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Muddinapalya Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  NO 11, 12, Muddinapalya Rd, Vinayaka Layout, 
                  Gidada Konnenahalli, Annapurneshwari Nagar, 
                  Bengaluru, 560091
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <a href="tel:9606222321" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  96062 22321
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gold" />
                <a href="https://wa.me/919606222321" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Andrahalli Location */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Andrahalli Branch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  2nd floor, MD complex, Andrahalli Main Rd, 
                  Vidyamanya Nagar, Bengaluru, 560021
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <a href="tel:9071812321" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  90718 12321
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gold" />
                <a href="https://wa.me/919071812321" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-primary-foreground/60">
            <Clock className="h-4 w-4" />
            <span>Open Daily: 9:00 AM - 9:00 PM</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/60">
            © 2024 K2 Unisex Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;