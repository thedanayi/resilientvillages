import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

/**
 * A floating button that appears when the user scrolls down, allowing them to easily scroll back to the top of the page.
 */
export function ScrollToTopButton() {
  // State to track if the button should be visible (true when user scrolled down)
  const [isVisible, setIsVisible] = useState(false);

  // Effect to listen for scroll events and update visibility state
  useEffect(() => {
    const toggleVisibility = () => {
      // If window is scrolled down 300px or more, show the button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen to scroll events on the window
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to smoothly scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // AnimatePresence allows us to animate components as they mount and unmount
    <AnimatePresence>
      {isVisible && (
        <motion.button
          // Animation definitions for entry, exit, and hover states
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // Positioning and styling
          className="fixed bottom-6 right-6 p-3 bg-primary-700 text-white rounded-full shadow-lg hover:bg-primary-800 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 font-medium flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Arrow icon from lucide-react */}
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
