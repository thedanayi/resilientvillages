import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-700 text-white rounded flex items-center justify-center font-heading font-bold text-xl group-hover:bg-primary-800 transition-colors">
              RV
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-gray-900">
              Resilient<span className="text-primary-700">Villages</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === link.href ? "text-primary-700" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button className="gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold">
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
             <Link
               key={link.name}
               to={link.href}
               className={cn(
                 "block px-4 py-3 text-lg font-medium rounded-md",
                 location.pathname === link.href ? "bg-primary-50 text-primary-700" : "text-gray-700 hover:bg-gray-50"
               )}
             >
               {link.name}
             </Link>
          ))}
          <div className="px-4 py-3 flex flex-col gap-3 border-t mt-2 pt-5">
             <Button variant="outline" className="w-full justify-center" asChild>
                <Link to="/contact">Contact Us</Link>
             </Button>
             <Button className="w-full justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white">
                <Heart className="w-4 h-4" />
                Donate Now
             </Button>
          </div>
        </div>
      )}
    </header>
  );
}
