import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/ui/PageHeader";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service",
    description: "Terms and conditions for using the Resilient Villages Zimbabwe website.",
    url: "https://resilientvillages.org/terms",
  });

  return (
    <main className="flex-1 bg-gray-50">
      <PageHeader 
        title="Terms of Service" 
        description="Rules and guidelines for using our website" 
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-green prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-600 mb-8 border-b pb-8">
              Welcome to Resilient Villages Zimbabwe. By accessing our website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Resilient Villages Zimbabwe's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-8">
              The materials on Resilient Villages Zimbabwe's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-8">
              In no event shall Resilient Villages Zimbabwe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Donations</h2>
            <p className="text-gray-600 mb-8">
              Any donations made through our website are considered voluntary contributions to support our community programs. All transactions are securely processed through our designated payment partners. We reserve the right to respectfully decline any donation at our discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Revisions and Errata</h2>
            <p className="text-gray-600 mb-8">
              The materials appearing on the website could include technical, typographical, or photographic errors. Resilient Villages Zimbabwe does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Links</h2>
            <p className="text-gray-600 mb-8">
              Resilient Villages Zimbabwe has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-8">
              Any claim relating to Resilient Villages Zimbabwe's website shall be governed by the laws of Zimbabwe without regard to its conflict of law provisions.
            </p>

            <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-100">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
