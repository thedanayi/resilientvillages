/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import routing components from react-router-dom to handle navigation between pages in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { Layout } from "./components/layout/Layout";

// Static imports to prevent slow navigation from chunk loading
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

// Internal fallback loading spinner for Suspense
const PageLoader = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="impact" element={<Impact />} />
          <Route path="stories" element={<Stories />} />
          
          <Route path="stories/:id" element={<StoryDetail />} />
          
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          
          <Route path="*" element={<div className="container py-32 text-center font-heading text-2xl text-primary-900">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
