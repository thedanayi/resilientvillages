import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";

/**
 * Layout component serves as the main structural wrapper for the application.
 * It contains the Navbar at the top, the Footer at the bottom, and renders the current page content in between.
 */
export function Layout() {
  // useLocation gives us the current URL information, including the 'pathname' (e.g., "/about", "/projects")
  const { pathname } = useLocation();

  // useEffect runs side-effects. Here, whenever the 'pathname' changes (i.e. to a new page),
  // we automatically scroll the window back to the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // Flexbox structure ensuring the footer is pushed to the bottom of the screen if the content is short
    <div className="flex flex-col min-h-screen">
      {/* The Navigation Bar */}
      <Navbar />
      
      {/* The main content area. Outlet is where React Router will inject the current matched page component.
          pt-[80px] adds padding-top to account for the fixed Navbar. */}
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      
      {/* The Footer */}
      <Footer />
      
      {/* Scroll to top button always present in the layout */}
      <ScrollToTopButton />
    </div>
  );
}
