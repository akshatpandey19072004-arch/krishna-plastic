import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const BUSINESS_HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-16 md:py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Have questions or want to place a bulk order? Reach out to us
            directly — we're always happy to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact details */}
          <div className="flex flex-col gap-5">
            {/* Owner card */}
            <div
              data-ocid="contact.owner_card"
              className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-card-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center font-display font-bold text-2xl text-secondary-foreground shadow-card flex-shrink-0">
                  A
                </div>
                <div>
                  <div className="font-display font-bold text-lg leading-none">
                    Abhay Yadav
                  </div>
                  <div className="text-primary-foreground/70 text-sm mt-0.5">
                    Owner, Krishna Plastic
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-foreground/60">
                      Phone
                    </div>
                    <a
                      href="tel:9455828455"
                      className="text-primary-foreground font-semibold hover:text-secondary transition-smooth"
                      data-ocid="contact.phone_link"
                    >
                      +91 94558 28455
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-foreground/60">
                      Address
                    </div>
                    <div className="text-primary-foreground font-medium text-sm">
                      Takrohi Market, Lucknow,
                      <br />
                      Uttar Pradesh, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-primary-foreground/60">
                      Business Hours
                    </div>
                    {BUSINESS_HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="text-primary-foreground text-sm font-medium"
                      >
                        {h.day}: {h.time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href="tel:9455828455"
                  data-ocid="contact.call_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-xl py-3 font-semibold text-sm transition-smooth hover:opacity-90 shadow-card"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919455828455?text=Hello%20Krishna%20Plastic%2C%20I%20am%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-3 font-semibold text-sm transition-smooth hover:opacity-90 shadow-card"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Quick enquiry prompt */}
            <div
              className="bg-card border border-border rounded-xl p-5 shadow-card flex items-start gap-4"
              data-ocid="contact.quick_enquiry_card"
            >
              <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-sm mb-1">
                  Bulk / Wholesale Orders?
                </h4>
                <p className="text-muted-foreground text-xs font-body leading-relaxed mb-2">
                  We offer special pricing for bulk orders. Contact Abhay Yadav
                  directly for wholesale enquiries.
                </p>
                <a
                  href="tel:9455828455"
                  data-ocid="contact.bulk_order_link"
                  className="text-primary text-xs font-semibold hover:underline transition-smooth"
                >
                  Call for bulk pricing →
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map + directions */}
          <div className="flex flex-col gap-5">
            {/* Map embed placeholder */}
            <div
              className="bg-card rounded-2xl overflow-hidden shadow-card-lg border border-border"
              data-ocid="contact.map_container"
            >
              <div className="relative">
                <iframe
                  title="Krishna Plastic Location - Takrohi Market, Lucknow"
                  src="https://maps.google.com/maps?q=Takrohi+Market+Lucknow+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Krishna Plastic
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Takrohi Market, Lucknow, Uttar Pradesh 226020
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Takrohi+Market+Lucknow+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.directions_link"
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-2.5 font-semibold text-sm transition-smooth hover:opacity-90"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Why visit */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-5">
              <h4 className="font-display font-bold text-foreground text-sm mb-3">
                Why Visit Our Store?
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "See and touch products before buying",
                  "Get expert advice from store owner",
                  "Instant pickup — no delivery wait",
                  "Exchange & return friendly policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-body text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
