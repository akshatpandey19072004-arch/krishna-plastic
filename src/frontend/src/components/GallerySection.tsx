const GALLERY_ITEMS = [
  {
    src: "/assets/generated/gallery-shop-interior.dim_600x400.jpg",
    alt: "Krishna Plastic Store Interior",
    label: "Our Store",
    size: "lg",
  },
  {
    src: "/assets/generated/category-containers.dim_400x300.jpg",
    alt: "Kitchen storage containers",
    label: "Kitchen Containers",
    size: "sm",
  },
  {
    src: "/assets/generated/category-buckets.dim_400x300.jpg",
    alt: "Colorful plastic buckets",
    label: "Buckets & Tubs",
    size: "sm",
  },
  {
    src: "/assets/generated/category-chairs.dim_400x300.jpg",
    alt: "Plastic chairs and stools",
    label: "Chairs & Furniture",
    size: "sm",
  },
  {
    src: "/assets/generated/category-bottles.dim_400x300.jpg",
    alt: "Water bottles and lunch boxes",
    label: "Bottles & Lunch Boxes",
    size: "sm",
  },
  {
    src: "/assets/generated/category-household.dim_400x300.jpg",
    alt: "Household plastic items",
    label: "Household Items",
    size: "sm",
  },
  {
    src: "/assets/generated/category-packaging.dim_400x300.jpg",
    alt: "Packaging materials",
    label: "Packaging Materials",
    size: "sm",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      className="py-16 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Our Products
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Product Gallery
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            A glimpse of our vibrant collection. Visit our store in Takrohi
            Market to see the full range in person.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-ocid="gallery.items_list"
        >
          {/* Large featured item */}
          <div
            data-ocid="gallery.item.1"
            className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-card-lg"
          >
            <img
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              style={{ minHeight: "250px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
              <span className="text-primary-foreground font-display font-bold text-base">
                {GALLERY_ITEMS[0].label}
              </span>
            </div>
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </div>
          </div>

          {/* Other items */}
          {GALLERY_ITEMS.slice(1).map((item, i) => (
            <div
              key={item.alt}
              data-ocid={`gallery.item.${i + 2}`}
              className="relative group overflow-hidden rounded-xl shadow-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover group-hover:scale-105 transition-smooth"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-3">
                <span className="text-primary-foreground font-display font-semibold text-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visit CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm font-body">
            📍 Visit us at{" "}
            <strong className="text-foreground">Takrohi Market, Lucknow</strong>{" "}
            to see our full collection
          </p>
        </div>
      </div>
    </section>
  );
}
