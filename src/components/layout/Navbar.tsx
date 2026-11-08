import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Users, Shield, Info } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const aboutSubLinks = [
    { name: "Overview & Mission", href: "/about", icon: Info, desc: "Our core vision, history, and community focus" },
    { name: "Board of Directors", href: "/about/board", icon: Users, desc: "Governance, leadership, and ethical stewardship" },
    { name: "Policies & Safeguarding", href: "/policies", icon: Shield, desc: "PSEAH, anti-fraud, child protection & standards" },
  ];

  const mainNavLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Stories & Insights", href: "/stories" },
  ];

  const isAboutActive = location.pathname.startsWith("/about") || location.pathname.startsWith("/policies");

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-stone-200/80 py-3" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Resilient Villages Zimbabwe Home">
            <Image src="/images/resilient-villages-logo.png" alt="Resilient Villages Zimbabwe Logo" className="h-16 md:h-20 shrink-0 object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm px-1 py-0.5",
                location.pathname === "/" ? "text-primary-700 font-semibold" : "text-stone-700"
              )}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm px-1 py-0.5 cursor-pointer",
                  isAboutActive ? "text-primary-700 font-semibold" : "text-stone-700"
                )}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About Us</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", aboutDropdownOpen && "rotate-180")} />
              </button>

              {aboutDropdownOpen && (
                <div
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-stone-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  {aboutSubLinks.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className={cn(
                          "flex items-start gap-3 px-4 py-3 hover:bg-stone-50 transition-colors group/item",
                          isActive && "bg-primary-50/50"
                        )}
                      >
                        <div className={cn(
                          "p-2 rounded-lg shrink-0 mt-0.5 transition-colors",
                          isActive ? "bg-primary-100 text-primary-700" : "bg-stone-100 text-stone-600 group-hover/item:bg-primary-100 group-hover/item:text-primary-700"
                        )}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={cn("text-sm font-semibold transition-colors", isActive ? "text-primary-800" : "text-stone-900 group-hover/item:text-primary-700")}>
                            {item.name}
                          </div>
                          <div className="text-xs text-stone-500 mt-0.5 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm px-1 py-0.5",
                  location.pathname === link.href ? "text-primary-700 font-semibold" : "text-stone-700"
                )}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-stone-700 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" 
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
        <nav aria-label="Mobile Navigation" className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl py-4 px-4 flex flex-col gap-2 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={cn(
              "px-4 py-2.5 text-base font-medium rounded-lg transition-colors",
              location.pathname === "/" ? "bg-primary-50 text-primary-800 font-semibold" : "text-stone-800 hover:bg-stone-50"
            )}
          >
            Home
          </Link>

          {/* Mobile About Accordion */}
          <div className="rounded-lg overflow-hidden border border-stone-100">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-2.5 text-base font-medium text-left transition-colors",
                isAboutActive ? "bg-primary-50/70 text-primary-800 font-semibold" : "text-stone-800 hover:bg-stone-50"
              )}
            >
              <span>About Us</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileAboutOpen && "rotate-180")} />
            </button>
            {mobileAboutOpen && (
              <div className="bg-stone-50/70 py-2 px-3 flex flex-col gap-1 border-t border-stone-100">
                {aboutSubLinks.map((sub) => {
                  const IconComp = sub.icon;
                  return (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                        location.pathname === sub.href ? "bg-primary-100 text-primary-800 font-medium" : "text-stone-700 hover:bg-stone-100"
                      )}
                    >
                      <IconComp className="w-4 h-4 text-primary-700" />
                      <span>{sub.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2.5 text-base font-medium rounded-lg transition-colors",
                location.pathname === link.href ? "bg-primary-50 text-primary-800 font-semibold" : "text-stone-800 hover:bg-stone-50"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="px-4 py-3 flex flex-col gap-3 border-t border-stone-100 mt-2 pt-4">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
