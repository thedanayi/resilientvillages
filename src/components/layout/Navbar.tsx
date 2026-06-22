import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Stories & Insights", href: "/stories" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Resilient Villages Zimbabwe Home">
            <Image src="/images/resilient-villages-logo.png" alt="Resilient Villages Zimbabwe Logo" className="h-20 md:h-28 shrink-0 object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm px-1 py-0.5",
                  location.pathname === link.href ? "text-primary-700" : "text-gray-600"
                )}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav aria-label="Mobile Navigation" className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
             <Link
               key={link.name}
               to={link.href}
               className={cn(
                 "block px-4 py-3 text-lg font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                 location.pathname === link.href ? "bg-primary-50 text-primary-700" : "text-gray-700 hover:bg-gray-50"
               )}
               aria-current={location.pathname === link.href ? "page" : undefined}
             >
               {link.name}
             </Link>
          ))}
          <div className="px-4 py-3 flex flex-col gap-3 border-t mt-2 pt-5">
             <Button variant="outline" className="w-full justify-center" asChild>
                <Link to="/contact">Contact Us</Link>
             </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
