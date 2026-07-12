/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import routing components from react-router-dom to handle navigation between pages in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Layout } from "./components/layout/Layout";
import { ScrollRestoration } from "./components/ui/ScrollRestoration";

// Static imports to prevent slow navigation from chunk loading
import Home from "./pages/Home";

// Lazy-loaded routes chunked out for performance
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Impact = lazy(() => import("./pages/Impact"));
const Contact = lazy(() => import("./pages/Contact"));
const Stories = lazy(() => import("./pages/Stories"));
const StoryDetail = lazy(() => import("./pages/StoryDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Internal fallback loading spinner for Suspense
const PageLoader = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="impact" element={<Impact />} />
            <Route path="stories" element={<Stories />} />
            
            <Route path="stories/:id" element={<StoryDetail />} />
            
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
