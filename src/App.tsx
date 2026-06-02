/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import routing components from react-router-dom to handle navigation between pages in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Layout } from "./components/layout/Layout";

// Lazy load all the individual page components to reduce initial bundle size
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Projects = lazy(() => import("./pages/Projects"));
const Impact = lazy(() => import("./pages/Impact"));
const Contact = lazy(() => import("./pages/Contact"));
const Stories = lazy(() => import("./pages/Stories"));
const StoryDetail = lazy(() => import("./pages/StoryDetail"));
const Publications = lazy(() => import("./pages/Publications"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

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
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          
          <Route path="about" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />
          <Route path="programs" element={
            <Suspense fallback={<PageLoader />}>
              <Programs />
            </Suspense>
          } />
          <Route path="projects" element={
            <Suspense fallback={<PageLoader />}>
              <Projects />
            </Suspense>
          } />
          <Route path="impact" element={
            <Suspense fallback={<PageLoader />}>
              <Impact />
            </Suspense>
          } />
          <Route path="stories" element={
            <Suspense fallback={<PageLoader />}>
              <Stories />
            </Suspense>
          } />
          
          <Route path="stories/:id" element={
            <Suspense fallback={<PageLoader />}>
              <StoryDetail />
            </Suspense>
          } />
          
          <Route path="publications" element={
            <Suspense fallback={<PageLoader />}>
              <Publications />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />
          <Route path="privacy" element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="terms" element={
            <Suspense fallback={<PageLoader />}>
              <TermsOfService />
            </Suspense>
          } />
          
          <Route path="*" element={<div className="container py-32 text-center font-heading text-2xl text-primary-900">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
