import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/ui/PageHeader";
import { policiesData } from "../data/policies";
import { ShieldAlert, Banknote, HeartHandshake, ShieldCheck, ArrowRight, FileText, PhoneCall } from "lucide-react";

export default function PoliciesIndex() {
  useSEO({
    title: "Policies & Safeguarding",
    description: "Explore Resilient Villages Zimbabwe's institutional governance, child protection (PVO 74/20), anti-fraud, and PSEAH safeguarding policies."
  });

  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-7 h-7 text-red-600" />,
    Banknote: <Banknote className="w-7 h-7 text-emerald-600" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7 text-amber-600" />,
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-primary-700" />,
  };

  const policiesList = Object.values(policiesData);

  return (
    <main className="pt-20 pb-16 min-h-screen bg-stone-50/50">
      <PageHeader
        title="Policies & Safeguarding"
        description="Our unwavering commitment to ethical governance, community protection, child welfare, and financial transparency."
      />

      <section className="container mx-auto px-4 md:px-6 py-12">
        {/* Commitment Banner */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-sm mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="p-3.5 bg-primary-100/80 rounded-xl text-primary-800 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-stone-900 mb-2">
                Safeguarding & Integrity Statement
              </h2>
              <p className="text-stone-600 leading-relaxed text-base">
                Resilient Villages Zimbabwe operates under a strict zero-tolerance policy against sexual exploitation, child abuse, financial corruption, and harassment. All field operations, community projects, and personnel conduct are governed by clear institutional policies designed to protect beneficiaries and preserve absolute public trust.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-stone-500 border-t border-stone-100 pt-4">
                <span>PVO 74/20 Compliant</span>
                <span aria-hidden="true">·</span>
                <span>UN Convention Rights of the Child Aligned</span>
                <span aria-hidden="true">·</span>
                <span>24/7 Confidential Reporting Pathway</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {policiesList.map((policy) => (
            <div
              key={policy.slug}
              className="bg-white rounded-2xl border border-stone-200/80 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-stone-100 group-hover:bg-primary-50 transition-colors">
                    {iconMap[policy.iconName] || <FileText className="w-7 h-7 text-primary-700" />}
                  </div>
                  <span className="text-xs font-mono font-medium text-stone-400">
                    {policy.code}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-stone-900 mb-3 group-hover:text-primary-800 transition-colors">
                  {policy.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {policy.summary}
                </p>
              </div>

              <div>
                <div className="text-xs text-stone-500 border-t border-stone-100 pt-4 mb-4 flex items-center justify-between">
                  <span>Effective: {policy.effectiveDate}</span>
                  <span>Reviewed: {policy.lastReviewed}</span>
                </div>

                <Link
                  to={`/policies/${policy.slug}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3 bg-stone-900 text-white rounded-xl font-semibold text-sm hover:bg-primary-800 transition-colors shadow-sm"
                >
                  <span>Read Full Policy & Guidelines</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Incident Reporting Hotline Box */}
        <div className="max-w-4xl mx-auto bg-stone-900 text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md mb-3">
                <PhoneCall className="w-3.5 h-3.5" />
                Confidential Incident Reporting Pathway
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">
                Need to report a safeguarding concern or incident?
              </h3>
              <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
                All reports of sexual exploitation, abuse, child safety concerns, or financial misconduct are treated with immediate priority, strict confidentiality, and full whistleblower protection.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="mailto:info@resilientvillages.org"
                className="px-5 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-bold rounded-xl text-center transition-colors shadow-sm"
              >
                Email Safeguarding Officer
              </a>
              <a
                href="tel:+263772900095"
                className="px-5 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-bold rounded-xl text-center transition-colors border border-stone-700"
              >
                Call Hotline: +263 772 900 095
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
