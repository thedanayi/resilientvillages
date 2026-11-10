import { useParams, Link, Navigate } from "react-router-dom";
import { policiesData } from "../data/policies";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/ui/PageHeader";
import {
  ShieldAlert,
  Banknote,
  HeartHandshake,
  ShieldCheck,
  Download,
  Mail,
  PhoneCall,
  ArrowLeft,
  ChevronRight,
  Lock,
  FileCheck2
} from "lucide-react";

export default function PolicyDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Default to 'pseah' if slug is missing, or navigate to policies index if invalid
  const policy = slug ? policiesData[slug] : null;

  if (!policy) {
    return <Navigate to="/policies" replace />;
  }

  useSEO({
    title: policy.title,
    description: policy.summary
  });

  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-red-600" />,
    Banknote: <Banknote className="w-5 h-5 text-emerald-600" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-amber-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-primary-700" />,
  };

  const allPolicies = Object.values(policiesData);

  const handleDownloadPdf = () => {
    if (policy.downloadUrl && policy.downloadUrl.endsWith('.pdf')) {
      const link = document.createElement('a');
      link.href = policy.downloadUrl;
      link.download = `${policy.slug}-policy.pdf`;
      link.target = "_blank";
      link.click();
    } else {
      alert(`Downloading full PDF document for ${policy.title} (${policy.code})...`);
    }
  };

  return (
    <main className="pt-20 pb-16 min-h-screen bg-stone-50/50">
      <PageHeader
        title={policy.title}
        description={`Official Institutional Document Code: ${policy.code}`}
      />

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-8 max-w-6xl mx-auto">
          <Link to="/" className="hover:text-primary-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/policies" className="hover:text-primary-700 transition-colors">Policies & Safeguarding</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 font-semibold">{policy.shortTitle}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Desktop Sticky Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm sticky top-28 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 px-2">
                All Governance Policies
              </h3>
              
              <nav className="space-y-1" aria-label="Policy Sidebar Navigation">
                {allPolicies.map((p) => {
                  const isActive = p.slug === policy.slug;
                  return (
                    <Link
                      key={p.slug}
                      to={`/policies/${p.slug}`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-800 font-semibold border border-primary-200/60"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="shrink-0">{iconMap[p.iconName]}</span>
                      <span className="truncate">{p.shortTitle}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-stone-100">
                <button
                  onClick={handleDownloadPdf}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Document</span>
                </button>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/60 text-xs text-amber-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Confidential Reporting</span>
                </div>
                <p className="text-amber-800 leading-snug">
                  Reports are handled with strict privacy & whistleblower protection.
                </p>
                <a
                  href={`mailto:${policy.reportingEmail}`}
                  className="block font-semibold text-primary-800 hover:underline pt-1 text-xs"
                >
                  {policy.reportingEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* Main Policy Content Area */}
          <article className="lg:col-span-3 space-y-8">
            {/* Metadata Header Box */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                  <span className="bg-stone-100 text-stone-800 font-bold px-2.5 py-1 rounded-md">
                    {policy.code}
                  </span>
                  <span>Effective: {policy.effectiveDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>Reviewed: {policy.lastReviewed}</span>
                </div>

                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-700 hover:text-primary-900 bg-primary-50 px-3.5 py-1.5 rounded-lg border border-primary-200/60 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </button>
              </div>

              <h1 className="font-heading text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                {policy.title}
              </h1>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/60 text-stone-700 text-sm md:text-base leading-relaxed italic">
                "{policy.preamble}"
              </div>
            </div>

            {/* Policy Detailed Sections */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-sm space-y-8">
              {policy.sections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-4 border-b border-stone-100 last:border-b-0 pb-8 last:pb-0">
                  <h2 className="font-heading text-xl font-bold text-stone-900">
                    {section.title}
                  </h2>

                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-stone-700 leading-relaxed text-base">
                      {paragraph}
                    </p>
                  ))}

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3 pt-2 pl-2">
                      {section.bulletPoints.map((bullet, bIdx) => {
                        const [boldLabel, ...rest] = bullet.split(":");
                        return (
                          <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-stone-700 leading-relaxed">
                            <span className="w-2 h-2 rounded-full bg-primary-600 mt-2 shrink-0" />
                            <div>
                              {rest.length > 0 ? (
                                <>
                                  <strong className="font-semibold text-stone-900">{boldLabel}:</strong>
                                  {rest.join(":")}
                                </>
                              ) : (
                                bullet
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Confidential Incident Reporting Box */}
            <div className="bg-stone-900 text-white rounded-2xl p-6 md:p-8 shadow-md border border-stone-800">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <FileCheck2 className="w-4 h-4" />
                    Official Reporting Pathway
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Submit a Confidential Incident or Concern Report
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed max-w-lg">
                    All reports are investigated independently by the Board Legal & Safeguarding Oversight Committee with absolute confidentiality and non-retaliation protections.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
                  <a
                    href={`mailto:${policy.reportingEmail}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{policy.reportingEmail}</span>
                  </a>
                  <a
                    href={`tel:${policy.reportingPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold transition-colors border border-stone-700"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Hotline: {policy.reportingPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-4">
              <Link
                to="/policies"
                className="inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Policies & Safeguarding Hub
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
