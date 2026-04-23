import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative bg-secondary overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-5 shadow-card">
              <MapPin className="w-3 h-3" />
              Takrohi Market, Lucknow
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Your One-Stop Shop for{" "}
              <span className="text-primary">Quality Plastic</span> Products
            </h1>

            <p className="text-foreground/70 text-lg font-body mb-3">
              Affordable • Durable • Everyday Essentials
            </p>
            <p className="text-foreground/60 text-base font-body mb-8 max-w-md">
              Serving families and businesses in Lucknow with a wide variety of
              household and utility plastic products at the best prices.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                className="btn-accent gap-2 text-base px-6 py-3 h-auto animate-bounce-light"
                onClick={() => {
                  window.location.href = "tel:9455828455";
                }}
                data-ocid="hero.call_now_button"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-6 py-3 h-auto transition-smooth"
                onClick={() => scrollToSection("products")}
                data-ocid="hero.view_products_button"
              >
                View Products
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-foreground/30 text-foreground hover:bg-foreground/5 font-semibold text-base px-6 py-3 h-auto transition-smooth"
                onClick={() => scrollToSection("contact")}
                data-ocid="hero.visit_store_button"
              >
                Visit Store
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { label: "15+", sub: "Years of Trust" },
                { label: "500+", sub: "Products" },
                { label: "10K+", sub: "Happy Customers" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl px-4 py-3 shadow-card text-center min-w-[80px]"
                >
                  <div className="font-display font-bold text-xl text-primary">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-primary/10 rounded-3xl rotate-2" />
              <div className="absolute -inset-3 bg-accent/10 rounded-3xl -rotate-1" />
              <img
                src="/assets/generated/hero-plastic-products.dim_1200x500.jpg"
                alt="Quality plastic household products at Krishna Plastic"
                className="relative w-full rounded-2xl shadow-card-xl object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              {/* Floating price badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-card-lg font-display font-bold text-sm animate-bounce-light">
                Best Prices Guaranteed!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
