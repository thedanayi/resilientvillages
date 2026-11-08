import { Image } from "../components/ui/Image";
import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { Users, Target, Shield, History, ArrowRight, ShieldCheck } from "lucide-react";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";
import { LiteYouTube } from "../components/ui/LiteYouTube";
import { Link } from "react-router-dom";

/**
 * About page component rendering information about the organization, history, and mission.
 */
export default function About() {
  // Set up SEO titles and descriptions for this page
  useSEO({
    title: "About Us",
    description: "Learn about Resilient Villages Zimbabwe, our mission, our values, and the leadership driving sustainable development.",
  });

  return (
    <div className="flex flex-col w-full">
      {/* Reusable page header component */}
      <PageHeader 
        title="About Us" 
        description="We are driven by the belief that every person in a village has the right to a dignified life."
        image="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
              {/* motion.div is used to animate elements fading and sliding in as they scroll into view */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-bold mb-6">
                    <Target className="w-4 h-4" /> Our Mission
                 </div>
                 <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Building Resilient Communities</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   Resilient Villages Zimbabwe (RVZ) is a registered non-profit organization dedicated to establishing high-impact, sustainable programs. We focus on long-term socio-economic solutions to problems affecting vulnerable communities.
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   We believe that true community resilience is created by equipping local populations with water security, climate-smart agriculture knowledge, educational support, and economic empowerment.
                 </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                   src="/images/leading environmental healing.jpg" 
                   alt="Community member engaged in rural project" 
                   className="w-full h-[450px] object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <p className="text-white text-lg font-medium italic">
                      "Empowering rural communities through sustainable development and long-term socio-economic solutions."
                    </p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Video / Impact Spotlight Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-950 px-3 py-1 rounded-md mb-4 inline-block">
                Our Work In Action
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Voices of Resilient Villages
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Watch how community-led water harvesting and agricultural initiatives are transforming lives in rural Zimbabwe.
              </p>
           </div>
           
           <div className="max-w-4xl mx-auto">
              <LiteYouTube videoId="x-y2wZgB5sI" title="Resilient Villages Zimbabwe Community Impact" />
           </div>
        </div>
      </section>

      {/* Organizational Values */}
      <section className="py-24 bg-stone-50/70 border-y border-stone-200/60">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-4">
                Our Core Pillars
              </h2>
              <p className="text-stone-600 text-lg">
                The principles that guide every field intervention and partnership.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Community Ownership",
                  desc: "We build programs alongside traditional leaders and local committees, ensuring long-term sustainability after project completion."
                },
                {
                  icon: Shield,
                  title: "Integrity & Accountability",
                  desc: "We enforce strict safeguarding policies (PVO 74/20 compliant) and zero-tolerance measures against fraud and exploitation."
                },
                {
                  icon: History,
                  title: "Lasting Resilience",
                  desc: "Focusing on root causes rather than temporary relief through climate-smart agriculture and water security infrastructure."
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
                     <div className="p-3.5 bg-primary-50 rounded-xl text-primary-700 w-fit">
                        <IconComponent className="w-6 h-6" />
                     </div>
                     <h3 className="font-heading text-xl font-bold text-stone-900">
                        {item.title}
                     </h3>
                     <p className="text-stone-600 text-sm leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
                );
              })}
           </div>
        </div>
      </section>

      {/* Governance & Leadership CTA Section */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
             <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-xl text-center md:text-left">
                   <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-950 px-3.5 py-1 rounded-md">
                      <ShieldCheck className="w-4 h-4" />
                      Governance & Leadership
                   </div>
                   <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                     Meet Our Board of Directors
                   </h2>
                   <p className="text-stone-300 text-base leading-relaxed">
                     Resilient Villages Zimbabwe is guided by an independent Board of Directors committed to ethical stewardship, PVO legal compliance, and community empowerment.
                   </p>
                </div>

                <div className="shrink-0">
                   <Link
                     to="/about/board"
                     className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white text-base font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                   >
                     <span>View Board of Directors</span>
                     <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
             </div>
         </div>
      </section>

      <SupportCTA />
    </div>
  );
}
