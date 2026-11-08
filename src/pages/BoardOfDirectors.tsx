import { useState } from "react";
import { boardMembers, BoardMember } from "../data/board";
import { useSEO } from "../hooks/useSEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Image } from "../components/ui/Image";
import { Mail, Linkedin, X, Award, ShieldCheck, GraduationCap, ArrowRight, User } from "lucide-react";

export default function BoardOfDirectors() {
  useSEO({
    title: "Board of Directors",
    description: "Meet the Board of Directors and executive leadership of Resilient Villages Zimbabwe. Dedicated to ethical governance, transparent stewardship, and rural empowerment."
  });

  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  return (
    <main className="pt-20 pb-16 min-h-screen bg-stone-50/50">
      <PageHeader
        title="Board of Directors"
        description="Transparent leadership, ethical stewardship, and dedicated governance empowering rural Zimbabwean communities."
      />

      <section className="container mx-auto px-4 md:px-6 py-12">
        {/* Governance Commitment Banner */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-sm mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="p-3.5 bg-primary-100/80 rounded-xl text-primary-800 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-stone-900 mb-2">
                Our Governance Commitment
              </h2>
              <p className="text-stone-600 leading-relaxed text-base">
                Resilient Villages Zimbabwe is governed by an independent, highly qualified Board of Directors. The Board provides strategic oversight, ensures strict compliance with Zimbabwean legal standards (PVO guidelines), monitors financial integrity, and guarantees that every community initiative honors our core principles of accountability, child protection, and gender equity.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-stone-500 border-t border-stone-100 pt-4">
                <span>Registration: Registered PVO Organization</span>
                <span aria-hidden="true">·</span>
                <span>Annual External Financial Audits</span>
                <span aria-hidden="true">·</span>
                <span>Independent Board Governance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Board Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-400 group-hover:bg-stone-200/70 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center mb-2 text-stone-400">
                      <User className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-medium text-stone-500">Profile Photo Pending</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                  {member.role}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-stone-900 mb-1 group-hover:text-primary-800 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary-700 mb-3">
                    {member.title}
                  </p>

                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Top Qualification Teaser */}
                  {member.qualifications.length > 0 && (
                    <div className="flex items-start gap-2 text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg mb-4 border border-stone-100">
                      <GraduationCap className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                      <span className="truncate">{member.qualifications[0]}</span>
                    </div>
                  )}

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-primary-700 hover:text-primary-900 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>View Profile & Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 text-stone-500 hover:text-primary-700 hover:bg-stone-100 rounded-lg transition-colors"
                        title={`Email ${member.name}`}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-stone-500 hover:text-primary-700 hover:bg-stone-100 rounded-lg transition-colors"
                        title={`LinkedIn profile for ${member.name}`}
                        aria-label={`LinkedIn profile for ${member.name}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Modal Dialog */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 md:p-8 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close Biography Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              {selectedMember.image ? (
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover object-top shrink-0 border border-stone-200 shadow-sm"
                />
              ) : (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-stone-100 border border-stone-200 flex flex-col items-center justify-center text-stone-400 shrink-0">
                  <User className="w-10 h-10 mb-1 text-stone-400" />
                  <span className="text-[10px] font-medium text-stone-500 text-center px-1">Photo Pending</span>
                </div>
              )}
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-800 bg-primary-50 px-3 py-1 rounded-md mb-2">
                  {selectedMember.role}
                </span>
                <h3 className="font-heading text-2xl font-bold text-stone-900">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-medium text-stone-600 mt-0.5">
                  {selectedMember.title}
                </p>
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-primary-700 hover:underline mt-2 font-medium"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {selectedMember.email}
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base border-t border-stone-100 pt-6">
              <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider text-stone-400">
                Executive Biography
              </h4>
              <p>{selectedMember.fullBio}</p>
            </div>

            {/* Qualifications Section */}
            {selectedMember.qualifications.length > 0 && (
              <div className="mt-6 pt-6 border-t border-stone-100 space-y-3">
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary-700" />
                  Academic & Professional Qualifications
                </h4>
                <ul className="space-y-2 text-sm text-stone-700">
                  {selectedMember.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <Award className="w-4 h-4 text-primary-700" />
                <span>Expertise: {selectedMember.expertise.join(", ")}</span>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 bg-stone-900 text-white text-sm font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
