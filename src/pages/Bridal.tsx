import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart, Sparkles, Users, Phone, MessageCircle } from "lucide-react";

const Bridal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-gold mr-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold">
              The K2 Bridal Studio
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Your most special day deserves nothing less than perfection. 
            Let our expert team create the perfect bridal look that reflects your unique beauty and style.
          </p>
        </div>
      </section>

      {/* Bridal Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Complete Bridal Beauty Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From pre-wedding preparations to your special day, we ensure you look absolutely radiant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For the Bride */}
            <Card className="shadow-card hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-6">
                  <Crown className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">For the Bride</h3>
                <ul className="space-y-3 text-muted-foreground text-left">
                  <li>• Pre-wedding skincare consultation</li>
                  <li>• Bridal makeup trial sessions</li>
                  <li>• Wedding day makeup & hair styling</li>
                  <li>• Reception look transformation</li>
                  <li>• Pre-wedding beauty treatments</li>
                  <li>• Hair spa & conditioning packages</li>
                  <li>• Nail art & manicure services</li>
                  <li>• Saree draping assistance</li>
                </ul>
                <Button className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90 w-full">
                  Book Bridal Consultation
                </Button>
              </CardContent>
            </Card>

            {/* For the Groom */}
            <Card className="shadow-card hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-6">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">For the Groom</h3>
                <ul className="space-y-3 text-muted-foreground text-left">
                  <li>• Groom makeup & styling</li>
                  <li>• Pre-wedding grooming sessions</li>
                  <li>• Professional haircut & styling</li>
                  <li>• Beard trimming & shaping</li>
                  <li>• Facial treatments for men</li>
                  <li>• Wedding day grooming package</li>
                  <li>• Reception look styling</li>
                  <li>• Complete grooming consultation</li>
                </ul>
                <Button className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90 w-full">
                  Book Groom Package
                </Button>
              </CardContent>
            </Card>

            {/* For the Family */}
            <Card className="shadow-card hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">For the Family</h3>
                <ul className="space-y-3 text-muted-foreground text-left">
                  <li>• Mother of bride/groom makeup</li>
                  <li>• Siblings & relatives styling</li>
                  <li>• Group booking discounts</li>
                  <li>• Coordinated color themes</li>
                  <li>• Pre-function beauty services</li>
                  <li>• Hair styling for all ages</li>
                  <li>• Saree draping services</li>
                  <li>• Family photography makeup</li>
                </ul>
                <Button className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90 w-full">
                  Group Booking Enquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose K2 for Your Wedding */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Brides Choose K2
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand that your wedding day is one of the most important days of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Artists</h3>
              <p className="text-muted-foreground text-sm">
                Skilled makeup artists with years of bridal experience
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
              <p className="text-muted-foreground text-sm">
                High-quality, long-lasting makeup products for your special day
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-4">
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
              <p className="text-muted-foreground text-sm">
                Customized looks that complement your style and outfit
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 text-gold rounded-full mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Complete Packages</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive bridal packages for the entire wedding party
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-gold text-gold-foreground rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Bridal Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book a consultation with our bridal experts to discuss your vision, 
              schedule trial sessions, and create the perfect wedding day look.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Muddinapalya Branch */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Muddinapalya Branch</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="tel:9606222321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call: 96062 22321</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="https://wa.me/919606222321" className="flex items-center justify-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Andrahalli Branch */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Andrahalli Branch</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="tel:9071812321" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call: 90718 12321</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/20"
                    asChild
                  >
                    <a href="https://wa.me/919071812321" className="flex items-center justify-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bridal;