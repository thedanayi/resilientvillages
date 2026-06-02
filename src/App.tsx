/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import routing components from react-router-dom to handle navigation between pages in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import our main Layout component, which contains the Navbar and Footer
import { Layout } from "./components/layout/Layout";

// Import all the individual page components
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Publications from "./pages/Publications";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/**
 * The main component of our application.
 * It sets up the routing configuration for the entire app.
 */
export default function App() {
  return (
    // BrowserRouter enables client-side routing, keeping the URL in sync with the current page
    <BrowserRouter>
      {/* Routes is a container for all the individual Route components */}
      <Routes>
        {/* We use Layout as a wrapper route. This means the Navbar and Footer will wrap all the child routes below. */}
        <Route path="/" element={<Layout />}>
          {/* 'index' means this route matches the exact parent path ("/") */}
          <Route index element={<Home />} />
          
          {/* Child routes for each section of the site */}
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="impact" element={<Impact />} />
          <Route path="stories" element={<Stories />} />
          
          {/* Dynamic route using parameterized URL (:id) for individual stories */}
          <Route path="stories/:id" element={<StoryDetail />} />
          
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          
          {/* Fallback route using wildcard (*) to catch any unmatched URLs (404 Page Not Found) */}
          <Route path="*" element={<div className="container py-32 text-center font-heading text-2xl text-primary-900">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
