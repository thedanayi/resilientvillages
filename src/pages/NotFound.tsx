import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export default function NotFound() {
  useSEO("Page Not Found | Serene", "The page you are looking for does not exist.");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6">
      <div className="text-center">
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-3 bg-primary-800 text-white rounded-full font-bold hover:bg-primary-900 transition-colors shadow-sm hover:shadow-md"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
