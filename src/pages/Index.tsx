import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  Crown, 
  Phone, 
  MessageCircle, 
  Navigation,
  MapPin,
  Instagram,
  Clock
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import salon1 from "@/assets/gallery/salon-1.jpeg";
import salon2 from "@/assets/gallery/salon-2.jpeg";
import salon3 from "@/assets/gallery/salon-3.jpeg";
import salon4 from "@/assets/gallery/salon-4.jpeg";
import salon5 from "@/assets/gallery/salon-5.jpeg";
import salon6 from "@/assets/gallery/salon-6.jpeg";
import salon7 from "@/assets/gallery/salon-7.jpeg";
import salon8 from "@/assets/gallery/salon-8.jpeg";
import k2HeroLogo from "@/assets/k2-hero-logo.jpg";
import branch1Image1 from "@/assets/gallery/branch1-1.jpeg";
import branch1Image2 from "@/assets/gallery/branch1-2.jpeg";
import branch1Image3 from "@/assets/gallery/branch1-3.jpeg";
import branch1Image4 from "@/assets/gallery/branch1-4.jpeg";
import branch1Image5 from "@/assets/gallery/branch1-5.jpeg";
import branch1Image6 from "@/assets/gallery/branch1-6.jpeg";
import branch1Image7 from "@/assets/gallery/branch1-7.jpeg";

const Index = () => {
  const [logoOpacity, setLogoOpacity] = useState(0.7);
  const logoRef = useRef<HTMLImageElement>(null);
  const servicesHeadingRef = useRef<HTMLHeadingElement>(null);
  
  const branch2Gallery = [salon1, salon2, salon3, salon4, salon5, salon6, salon7, salon8];
  const branch1Gallery = [branch1Image1, branch1Image2, branch1Image3, branch1Image4, branch1Image5, branch1Image6, branch1Image7];

  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current && servicesHeadingRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect();
        const headingRect = servicesHeadingRef.current.getBoundingClientRect();
        
        // Fade out logo when its bottom is 100px above the services heading
        if (logoRect.bottom >= headingRect.top - 100) {
          setLogoOpacity(0);
        } else {
          setLogoOpacity(0.7);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signatureServices = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Bridal Makeup",
      description: "Perfect bridal looks for your special day with premium products and expert artistry."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Advanced Hair Spa",
      description: "Rejuvenating hair treatments using the finest products for healthy, lustrous hair."
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Expert Waxing",
      description: "Professional hair removal services with precision and care for smooth skin."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Nail Art",
      description: "Artistic nail designs and professional manicure services for beautiful hands."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Rejuvenating Facials",
      description: "Customized facial treatments for glowing, healthy skin using premium products."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        {/* K2 Hero Logo as fixed img element */}
        <img 
          ref={logoRef}
          src={k2HeroLogo}
          alt="K2 Unisex Salon Logo"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] pointer-events-none transition-opacity duration-50 ease-linear"
          style={{ 
            opacity: logoOpacity * 0.7, // 70% of the calculated opacity
            zIndex: 5
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Elevate Your Beauty Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Welcome to K2 Unisex Salon, where artistry meets elegance. 
            Discover our premium hair, skin, and beauty services designed for everyone.
          </p>
          <Button 
            size="lg" 
            className="bg-gold text-gold-foreground hover:bg-gold/90 text-lg px-8 py-6 shadow-gold"
            asChild
          >
            <Link to="/contact">Call for Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Signature Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 ref={servicesHeadingRef} className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Signature Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience luxury and professionalism with our comprehensive beauty services, 
              tailored to enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
            {signatureServices.map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-6 group-hover:bg-gold group-hover:text-gold-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Our Salons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Visit Our Salons
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience luxury at either of our two premium locations in Bengaluru. 
              Both branches offer the complete range of our professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Muddinapalya Branch */}
            <Card className="shadow-luxury hover:shadow-gold transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-gold mb-2">K2 Salon (Muddinapalya)</h3>
                  <p className="text-muted-foreground">Our flagship location</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      NO 11, 12, Muddinapalya Rd, Vinayaka Layout, Gidada Konnenahalli, 
                      Annapurneshwari Nagar, Bengaluru, 560091
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold" />
                    <a href="tel:9606222321" className="text-muted-foreground hover:text-gold transition-colors">
                      96062 22321
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <p className="text-sm text-muted-foreground">9:00 AM - 9:30 PM (Every day)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                    <a href="tel:9606222321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="hidden sm:inline">Call</span>
                      <span className="sm:hidden">Call Now</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/919606222321" className="flex items-center justify-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://www.google.com/maps/dir//NO+11,+12,+Muddinapalya+Rd,+Vinayaka+Layout,+D-Group+Layout,+Gidada+Konnenahalli,+Annapurneshwari+Nagar,+Bengaluru,+Karnataka+560091/@12.970487,77.4120613,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d71e47f64ad:0x568ed417b025e5bd!2m2!1d77.4944632!2d12.9705?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Navigation className="h-4 w-4" />
                      <span className="hidden sm:inline">Directions</span>
                      <span className="sm:hidden">Map</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Andrahalli Branch */}
            <Card className="shadow-luxury hover:shadow-gold transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-bold text-gold mb-2">K2 Salon (Andrahalli)</h3>
                  <p className="text-muted-foreground">Conveniently located</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      2nd floor, MD complex, Andrahalli Main Rd, Vidyamanya Nagar, 
                      Bengaluru, 560021
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold" />
                    <a href="tel:9071812321" className="text-muted-foreground hover:text-gold transition-colors">
                      90718 12321
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <p className="text-sm text-muted-foreground">9:00 AM - 10:00 PM (Every day)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                    <a href="tel:9071812321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="hidden sm:inline">Call</span>
                      <span className="sm:hidden">Call Now</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/919071812321" className="flex items-center justify-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a 
                      href="https://www.google.com/maps/dir//2ad+floore,+MD+complex,+Andrahalli+Main+Rd,+Doodanna+layout,+Vidyamanya+Nagar,+Bengaluru,+Karnataka+560021/@13.0026951,77.4059181,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3d2852d1ecdf:0xb68b2114486cff56!2m2!1d77.48832!2d13.0027081?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Navigation className="h-4 w-4" />
                      <span className="hidden sm:inline">Directions</span>
                      <span className="sm:hidden">Map</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Branch 1 Gallery */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                K2 Salon Muddinapalya
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Discover the luxury and professionalism at our flagship Muddinapalya location.
              </p>
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                <a 
                  href="https://www.instagram.com/k2_unisexsalon/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@k2_unisexsalon</span>
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {branch1Gallery.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg shadow-card hover:shadow-luxury transition-shadow duration-300 group"
                >
                  <img 
                    src={image} 
                    alt={`K2 Salon Muddinapalya Interior ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Branch 2 Gallery */}
          <div>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                K2 Salon Andrahalli
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Experience the same luxury and excellence at our Andrahalli location.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {branch2Gallery.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg shadow-card hover:shadow-luxury transition-shadow duration-300 group"
                >
                  <img 
                    src={image} 
                    alt={`K2 Salon Andrahalli Interior ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;