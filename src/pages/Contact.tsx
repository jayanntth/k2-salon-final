import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle, Navigation, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Visit Our Salons
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience luxury and professionalism at either of our two convenient locations in Bengaluru. 
            Both branches offer the full range of our premium beauty services.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Salon Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the location that's most convenient for you. Both branches maintain 
              the same high standards of service and luxury experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Muddinapalya Branch */}
            <Card className="shadow-luxury hover:shadow-gold transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl text-gold">Muddinapalya Branch</CardTitle>
                <p className="text-muted-foreground">Our flagship location</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      NO 11, 12, Muddinapalya Rd, Vinayaka Layout,<br />
                      Gidada Konnenahalli, Annapurneshwari Nagar,<br />
                      Bengaluru, Karnataka 560091
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:9606222321" className="text-gold hover:underline">
                      +91 96062 22321
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Timings</h4>
                    <p className="text-muted-foreground">9:00 AM - 9:30 PM (Every day)</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                    <a href="tel:9606222321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
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
                        <span>Directions</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Andrahalli Branch */}
            <Card className="shadow-luxury hover:shadow-gold transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-serif text-2xl text-gold">Andrahalli Branch</CardTitle>
                <p className="text-muted-foreground">Conveniently located</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      2nd floor, MD complex, Andrahalli Main Rd,<br />
                      Doodanna layout, Vidyamanya Nagar,<br />
                      Bengaluru, Karnataka 560021
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:9071812321" className="text-gold hover:underline">
                      +91 90718 12321
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gold/10 text-gold rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Timings</h4>
                    <p className="text-muted-foreground">9:00 AM - 10:00 PM (Every day)</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                    <a href="tel:9071812321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
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
                        <span>Directions</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-4">
                  <Instagram className="h-8 w-8" />
                </div>
                <CardTitle className="font-serif text-2xl">Follow Our Work</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Stay updated with our latest work, beauty tips, and special offers on Instagram.
                </p>
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                  <a 
                    href="https://www.instagram.com/k2_unisexsalon/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@k2_unisexsalon</span>
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  See our portfolio, customer transformations, and behind-the-scenes content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;