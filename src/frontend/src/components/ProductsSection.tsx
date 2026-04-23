import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    title: "Household Plastic Items",
    desc: "Trays, bowls, plates, mugs, and daily use plastic accessories for home",
    image: "/assets/generated/category-household.dim_400x300.jpg",
    badgeColor: "bg-primary text-primary-foreground",
    count: "80+ items",
  },
  {
    title: "Kitchen Containers & Storage",
    desc: "Air-tight containers, spice jars, storage boxes in all sizes",
    image: "/assets/generated/category-containers.dim_400x300.jpg",
    badgeColor: "bg-secondary text-secondary-foreground",
    count: "120+ items",
  },
  {
    title: "Buckets, Mugs & Tubs",
    desc: "Durable plastic buckets, mugs, tubs and bathroom essentials",
    image: "/assets/generated/category-buckets.dim_400x300.jpg",
    badgeColor: "bg-accent text-accent-foreground",
    count: "60+ items",
  },
  {
    title: "Water Bottles & Lunch Boxes",
    desc: "School-safe, BPA-free water bottles and insulated lunch boxes",
    image: "/assets/generated/category-bottles.dim_400x300.jpg",
    badgeColor: "bg-primary text-primary-foreground",
    count: "70+ items",
  },
  {
    title: "Plastic Chairs & Stools",
    desc: "Sturdy plastic chairs and stools for home, office and events",
    image: "/assets/generated/category-chairs.dim_400x300.jpg",
    badgeColor: "bg-secondary text-secondary-foreground",
    count: "25+ items",
  },
  {
    title: "Packaging Materials",
    desc: "Bubble wrap, stretch film, plastic bags, packing tape and more",
    image: "/assets/generated/category-packaging.dim_400x300.jpg",
    badgeColor: "bg-accent text-accent-foreground",
    count: "40+ items",
  },
  {
    title: "Home Utility Products",
    desc: "Plastic hangers, organizers, bins, baskets, and utility accessories",
    image: "/assets/generated/category-household.dim_400x300.jpg",
    badgeColor: "bg-primary text-primary-foreground",
    count: "90+ items",
  },
  {
    title: "Daily Use Accessories",
    desc: "Combs, soap cases, hooks, clips and everyday plastic accessories",
    image: "/assets/generated/category-containers.dim_400x300.jpg",
    badgeColor: "bg-secondary text-secondary-foreground",
    count: "150+ items",
  },
];

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      data-ocid="products.section"
      className="py-16 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-secondary/30 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Our Product Range
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Browse our extensive range of quality plastic products. From kitchen
            essentials to industrial packaging — we have it all.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="products.categories_list"
        >
          {CATEGORIES.map((cat, i) => (
            <button
              type="button"
              key={cat.title}
              data-ocid={`products.category.item.${i + 1}`}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-smooth border border-border cursor-pointer text-left w-full"
              onClick={scrollToContact}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${cat.badgeColor}`}
                />
                <Badge
                  className={`absolute top-3 right-3 text-xs font-semibold ${cat.badgeColor} border-0 shadow-card`}
                >
                  {cat.count}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground text-sm mb-1 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-xs font-body leading-relaxed mb-3">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth">
                  View All
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm font-body mb-3">
            Can't find what you're looking for? Call us and we'll help you!
          </p>
          <button
            type="button"
            onClick={() => {
              window.location.href = "tel:9455828455";
            }}
            data-ocid="products.enquire_button"
            className="btn-accent inline-flex items-center gap-2"
          >
            Call for Enquiry: 9455828455
          </button>
        </div>
      </div>
    </section>
  );
}
