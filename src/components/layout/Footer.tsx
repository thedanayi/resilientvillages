import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10 border-t border-primary-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6 group" aria-label="Resilient Villages Zimbabwe Home">
              <Image src="/images/logo.jpeg" alt="Resilient Villages Zimbabwe Logo" className="w-12 h-12 md:w-14 md:h-14 shrink-0 object-contain rounded bg-white p-0.5" />
              <span className="font-heading font-bold text-xl lg:text-2xl tracking-tighter text-white flex flex-wrap gap-1 items-baseline">
                <span>Resilient</span>
                <span>Villages</span>
                <span className="text-primary-400">Zimbabwe</span>
              </span>
            </Link>
            <p className="text-primary-100 text-sm leading-relaxed mb-6">
              Sustainable empowerment of communities. Working together to build high-impact programs and long-term socio-economic solutions.
            </p>
            <div className="flex gap-4">
               <a href="https://www.facebook.com/resilientvillages" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
               </a>
               <a href="https://x.com/ResilientVilla2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 transition-colors cursor-pointer">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
               </a>
               <a href="https://www.youtube.com/@resilientvillages" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 transition-colors cursor-pointer">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
               </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Programs', href: '/programs' },
                { name: 'Projects in Action', href: '/projects' },
                { name: 'Impact & Data', href: '/impact' },
                { name: 'Success Stories', href: '/stories' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-primary-200 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-lg mb-6">Our Focus Areas</h3>
            <ul className="space-y-4">
              {[
                'Climate-Smart Agriculture', 
                'Water & Sanitation (WASH)', 
                'Environment Conservation', 
                'Basic Education',
                'Women & Youth Empowerment'
              ].map((item) => (
                <li key={item} className="text-primary-200 text-sm flex items-start gap-2">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
             <h3 className="font-heading font-semibold text-lg mb-6">Contact & Newsletter</h3>
             <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3 text-primary-200 text-sm">
                   <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                   <span>Stand 28 Chaka Business Centre<br/>Mvuma, Zimbabwe</span>
                </li>
                <li className="flex items-center gap-3 text-primary-200 text-sm">
                   <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                   <span>+263 773 640814</span>
                </li>
                <li className="flex items-center gap-3 text-primary-200 text-sm">
                   <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                   <a href="mailto:info@resilientvillages.org" className="hover:text-white transition-colors">info@resilientvillages.org</a>
                </li>
             </ul>
             
             <div className="bg-primary-900 rounded-lg p-4 border border-primary-800">
               <h4 className="text-sm font-semibold mb-2 text-white">Subscribe to our Updates</h4>
               <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                 <input type="email" placeholder="Email Address" className="w-full px-3 py-2 text-sm rounded bg-primary-950 text-white border border-primary-700 focus:outline-none focus:border-primary-500" />
                 <Button size="sm" type="submit" className="bg-accent-600 hover:bg-accent-700 text-white shrink-0">Subscribe</Button>
               </form>
             </div>
             
             <div className="mt-6 flex flex-col gap-3">
               <Button asChild className="w-full bg-primary-800 hover:bg-primary-700 text-white border border-primary-700">
                  <Link to="/contact">Partner With Us</Link>
               </Button>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-900 flex flex-col md:flex-row items-center justify-between gap-4 text-primary-300 text-sm">
           <div className="flex flex-col gap-1 items-center md:items-start">
             <p>&copy; {currentYear} Resilient Villages Zimbabwe. All rights reserved.</p>
             <p>
               <a href="https://www.blackbelt.design" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                 Website by Blackbelt Design Studio
               </a>
             </p>
           </div>
           <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}

// Ensure ChevronRight is imported above if used. It's missing in my manual typing, I will add it.
