import { HeartHandshake, LayoutGrid, MapPin, Star, Tag } from "lucide-react";

const FEATURES = [
  {
    icon: Tag,
    title: "Best Retail Prices",
    desc: "We offer the most competitive prices in Takrohi Market. No hidden costs — what you see is what you pay.",
    color: "bg-primary/10 text-primary",
    accentBg: "bg-primary",
  },
  {
    icon: Star,
    title: "Quality Assured Products",
    desc: "Every product is quality-checked before reaching our shelves. We stock only durable, reliable brands.",
    color: "bg-secondary/40 text-secondary-foreground",
    accentBg: "bg-secondary",
  },
  {
    icon: LayoutGrid,
    title: "Wide Product Variety",
    desc: "Over 500+ products across 8 categories. From tiny accessories to large furniture — all in one place.",
    color: "bg-accent/10 text-accent",
    accentBg: "bg-accent",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Customer Service",
    desc: "Abhay Yadav and team personally assist every customer. We understand your needs and guide you to the right product.",
    color: "bg-primary/10 text-primary",
    accentBg: "bg-primary",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    desc: "Located at Takrohi Market, Lucknow — easily accessible by auto, bus, and private vehicles.",
    color: "bg-secondary/40 text-secondary-foreground",
    accentBg: "bg-secondary",
  },
  {
    icon: Star,
    title: "Trusted Since Day One",
    desc: "Over 10,000 happy customers and 15+ years in business. Experience the trust of Lucknow's favourite plastic store.",
    color: "bg-accent/10 text-accent",
    accentBg: "bg-accent",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      data-ocid="why_us.section"
      className="py-16 md:py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Why Us?
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Why Choose Krishna Plastic?
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            We're more than just a store — we're your trusted partner for all
            plastic product needs in Lucknow.
          </p>
        </div>

        {/* Features grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why_us.features_list"
        >
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              data-ocid={`why_us.feature.item.${i + 1}`}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-lg hover:-translate-y-1 transition-smooth group"
            >
              <div
                className={`w-12 h-12 ${feat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}
              >
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
