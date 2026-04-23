import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      id="footer"
      data-ocid="footer"
      className="bg-foreground text-primary-foreground"
    >
      {/* Top CTA bar */}
      <div className="bg-accent py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-lg text-accent-foreground">
              Ready to Shop?
            </p>
            <p className="text-accent-foreground/80 text-sm">
              Call us now or visit our store in Takrohi Market
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:9455828455"
              data-ocid="footer.call_button"
              className="flex items-center gap-2 bg-accent-foreground text-accent px-5 py-2.5 rounded-lg font-semibold text-sm transition-smooth hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919455828455"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_button"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-smooth hover:opacity-90"
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-secondary-foreground text-lg">
                K
              </span>
            </div>
            <div>
              <div className="font-display font-bold text-primary-foreground text-lg leading-none">
                Krishna Plastic
              </div>
              <div className="text-primary-foreground/60 text-xs">
                Quality Since Day One
              </div>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            Lucknow's trusted retail store for quality plastic household
            products. Serving families and businesses with affordable, durable
            everyday essentials.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              data-ocid="footer.facebook_link"
              className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <SiFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              data-ocid="footer.instagram_link"
              className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:bg-pink-500 hover:text-white transition-smooth"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919455828455"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              data-ocid="footer.whatsapp_social_link"
              className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/70 hover:bg-green-500 hover:text-white transition-smooth"
            >
              <SiWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display font-bold text-primary-foreground text-base mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  data-ocid={`footer.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-smooth hover:translate-x-1 inline-block"
                >
                  → {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-display font-bold text-primary-foreground text-base mb-4">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/90 text-sm font-medium">
                  Abhay Yadav
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Takrohi Market, Lucknow,
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Uttar Pradesh, India
                </p>
              </div>
            </li>
            <li>
              <a
                href="tel:9455828455"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-smooth group"
                data-ocid="footer.phone_link"
              >
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm group-hover:text-secondary transition-smooth">
                  +91 94558 28455
                </span>
              </a>
            </li>
            <li>
              <a
                href="mailto:krishnaplastic@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-smooth group"
                data-ocid="footer.email_link"
              >
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm group-hover:text-secondary transition-smooth">
                  krishnaplastic@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>© {currentYear} Krishna Plastic, Lucknow. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
