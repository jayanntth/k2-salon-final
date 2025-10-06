import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Palette, Sparkles, Phone } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "hair-care",
      title: "Hair Care & Styling",
      icon: <Scissors className="h-6 w-6" />,
      services: [
        "Hair Cutting & Styling",
        "Hair Coloring & Highlights", 
        "Hair Straightening & Curling",
        "Hair Spa & Deep Conditioning",
        "Keratin Treatment",
        "Hair Rebonding",
        "Dandruff Treatment",
        "Hair Fall Treatment"
      ]
    },
    {
      id: "skin-care",
      title: "Skin Care & Facials",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        "Classic Facial",
        "Anti-Aging Facial",
        "Hydrating Facial",
        "Brightening Facial",
        "Acne Treatment Facial",
        "Fruit Facial",
        "Gold Facial",
        "Clean-up Services",
        "D-Tan Treatment",
        "Blackhead Removal"
      ]
    },
    {
      id: "nail-care",
      title: "Nail Care & Art",
      icon: <Palette className="h-6 w-6" />,
      services: [
        "Classic Manicure",
        "Spa Manicure",
        "Gel Manicure",
        "Classic Pedicure", 
        "Spa Pedicure",
        "Gel Pedicure",
        "Nail Extensions",
        "Nail Art & Design",
        "French Manicure",
        "Nail Polish Application"
      ]
    },
    {
      id: "makeup",
      title: "Makeup Services",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        "Bridal Makeup",
        "Pre-Wedding Makeup",
        "Party Makeup",
        "HD Makeup",
        "Engagement Makeup",
        "Reception Makeup",
        "Groom Makeup",
        "Family Function Makeup",
        "Makeup Trial",
        "Makeup Consultation"
      ]
    },
    {
      id: "body-care",
      title: "Body Care & Spa",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        "Full Body Massage",
        "Head & Shoulder Massage",
        "Body Polishing",
        "Body Scrub",
        "Body Wrap",
        "Aromatherapy",
        "Hot Stone Massage",
        "Deep Tissue Massage"
      ]
    },
    {
      id: "hair-removal",
      title: "Hair Removal",
      icon: <Scissors className="h-6 w-6" />,
      services: [
        "Eyebrow Threading",
        "Upper Lip Threading",
        "Full Face Threading",
        "Full Body Waxing",
        "Arms & Legs Waxing",
        "Bikini Waxing",
        "Underarm Waxing",
        "Facial Waxing"
      ]
    },
    {
      id: "mens-grooming",
      title: "Men's Grooming",
      icon: <Scissors className="h-6 w-6" />,
      services: [
        "Men's Haircut & Styling",
        "Beard Trimming & Styling",
        "Men's Facial",
        "Head Massage",
        "Hair Wash & Conditioning",
        "Mustache Grooming",
        "Men's Spa Services",
        "Scalp Treatment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our Comprehensive Beauty Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of professional beauty and wellness services. 
            From luxurious hair treatments to rejuvenating skincare, we offer everything you need to look and feel your best.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Professional Services for Every Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our organized service categories. For pricing and detailed information, 
              please call our salon directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {serviceCategories.map((category) => (
                <AccordionItem 
                  key={category.id} 
                  value={category.id}
                  className="border border-border rounded-lg overflow-hidden shadow-card"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gold/10 text-gold rounded-lg">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-left">{category.title}</h3>
                        <p className="text-muted-foreground text-sm text-left">
                          {category.services.length} services available
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.services.map((service, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 bg-muted/30 rounded-md"
                        >
                          <span className="text-foreground">{service}</span>
                          <span className="text-sm text-gold font-medium">Call for Enquiry</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gold/5 border border-gold/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-3">
                        Interested in these services? Contact us for pricing and booking:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href="tel:9606222321" className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Muddinapalya: 96062 22321</span>
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="tel:9071812321" className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Andrahalli: 90718 12321</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Ready to Book Your Appointment?
              </h3>
              <p className="text-muted-foreground mb-6">
                Call us directly or visit either of our salon locations for personalized consultation 
                and competitive pricing on all services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                  <a href="tel:9606222321">Call Muddinapalya Branch</a>
                </Button>
                <Button className="bg-gold text-gold-foreground hover:bg-gold/90" asChild>
                  <a href="tel:9071812321">Call Andrahalli Branch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;