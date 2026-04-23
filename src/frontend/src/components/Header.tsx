import { Button } from "@/components/ui/button";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [...NAV_LINKS].map((l) => l.id);
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "bg-primary shadow-card-lg" : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 group"
            data-ocid="header.logo_link"
            aria-label="Krishna Plastic Home"
          >
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-card flex-shrink-0 group-hover:scale-105 transition-smooth">
              <ShoppingBag className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="leading-tight text-left">
              <div className="font-display font-bold text-primary-foreground text-base leading-none">
                Krishna
              </div>
              <div className="font-display font-bold text-primary-foreground text-base leading-none">
                Plastic
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNav(link.id)}
                data-ocid={`header.nav.${link.id}_link`}
                className={`px-3 py-2 rounded-md text-sm font-semibold font-body transition-smooth ${
                  activeSection === link.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm shadow-card transition-smooth hidden sm:flex"
              data-ocid="header.call_now_button"
              onClick={() => {
                window.location.href = "tel:9455828455";
              }}
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Call Now
            </Button>

            <button
              type="button"
              className="md:hidden p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              data-ocid="header.mobile_menu_toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-primary-foreground/20 py-3 animate-slide-up"
            data-ocid="header.mobile_menu"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  data-ocid={`header.mobile_nav.${link.id}_link`}
                  className={`px-4 py-3 rounded-md text-sm font-semibold font-body transition-smooth text-left w-full ${
                    activeSection === link.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  window.location.href = "tel:9455828455";
                }}
                className="flex items-center gap-2 mt-2 w-full px-4 py-3 bg-accent text-accent-foreground rounded-md font-semibold text-sm transition-smooth"
                data-ocid="header.mobile_call_button"
              >
                <Phone className="w-4 h-4" />
                Call Now – 9455828455
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
