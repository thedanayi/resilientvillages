/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import Publications from "./pages/Publications";

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
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="container py-32 text-center font-heading text-2xl text-primary-900">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
