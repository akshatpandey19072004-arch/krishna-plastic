import { Award, CheckCircle2, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Trusted Quality",
    desc: "Every product in our store is handpicked for durability and reliability.",
  },
  {
    icon: Users,
    title: "Serving Lucknow",
    desc: "Proudly serving households and businesses in Lucknow for over 15 years.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your satisfaction is our priority — friendly, helpful service always.",
  },
  {
    icon: CheckCircle2,
    title: "Affordable Prices",
    desc: "Best retail prices on all plastic household and utility products.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-16 md:py-20 bg-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
              About Krishna Plastic
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
              Lucknow's Most Trusted Plastic Products Store
            </h2>
            <p className="text-muted-foreground text-base font-body leading-relaxed mb-4">
              Krishna Plastic is a well-established retail store located in the
              heart of Takrohi Market, Lucknow. Founded and run by{" "}
              <strong className="text-foreground">Abhay Yadav</strong>, we have
              been serving the community with high-quality plastic household
              products at affordable prices.
            </p>
            <p className="text-muted-foreground text-base font-body leading-relaxed mb-6">
              From everyday kitchen essentials like storage containers and water
              bottles, to larger items like plastic chairs, buckets, and
              packaging materials — we have everything you need under one roof.
              Our commitment is to offer durable, safe, and value-for-money
              products that make your daily life easier.
            </p>

            {/* Key highlights list */}
            <ul className="flex flex-col gap-2">
              {[
                "Wide variety of 500+ plastic products",
                "Household, kitchen, office & industrial use",
                "Same-day availability — no waiting",
                "Personal assistance from store owner",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-body text-foreground/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Cards */}
          <div
            className="grid grid-cols-2 gap-4"
            data-ocid="about.highlights_list"
          >
            {highlights.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`about.highlight.item.${i + 1}`}
                className="bg-background rounded-xl p-5 shadow-card border border-border hover:shadow-card-lg transition-smooth group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
