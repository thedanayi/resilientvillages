import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/ui/PageHeader";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    description: "Privacy policy for Resilient Villages Zimbabwe regarding data collection and usage.",
    url: "https://resilientvillages.org/privacy",
  });

  return (
    <main className="flex-1 bg-gray-50">
      <PageHeader 
        title="Privacy Policy" 
        description="How we collect, use, and protect your data" 
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-green prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-600 mb-8 border-b pb-8">
              Resilient Villages Zimbabwe ("RVZ", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Register on the website.</li>
              <li>Sign up for our newsletter.</li>
              <li>Make a donation.</li>
              <li>Contact us through our forms.</li>
            </ul>
            <p className="text-gray-600 mb-8">
              This information may include your name, email address, phone number, and any other details you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Providing, operating, and maintaining our website.</li>
              <li>Improving, personalizing, and expanding our website's content.</li>
              <li>Communicating with you, providing updates, and answering inquiries.</li>
              <li>Processing donations securely.</li>
              <li>Sending you newsletters (only if you have opted in).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
            <p className="text-gray-600 mb-8">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 mb-8">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted affiliates and partners for the purposes outlined above.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-600 mb-8">
              Our website may contain links to third-party websites and applications of interest, including partner organizations and payment gateways. Once you have used these links to leave our site, any information you provide to these third parties is not covered by this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic text-gray-600 bg-gray-50 p-6 rounded-lg mb-8">
              <strong>Resilient Villages Zimbabwe</strong><br />
              Stand 28 Chaka Business Centre<br />
              Mvuma, Zimbabwe<br />
              Email: <a href="mailto:info@resilientvillages.org" className="text-green-600 hover:underline">info@resilientvillages.org</a><br />
              Phone: +263 773 640814
            </address>

            <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-100">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
