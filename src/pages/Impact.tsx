import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { Map, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";
import { LiteYouTube } from "../components/ui/LiteYouTube";

export default function Impact() {
  useSEO({
    title: "Our Impact",
    description: "Measurable transformation driven by data, accountability, and community ownership.",
  });

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Impact" 
        description="Measurable transformation driven by data, accountability, and community ownership."
      />
      
      {/* Impact Metrics Section */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { stat: "5,600+", label: "Trees Saved", desc: "By replacing traditional brushwood fencing with diamond mesh wire." },
                 { stat: "4 hrs", label: "Daily Time Saved", desc: "Women's unpaid workload reduced, reclaiming time for family and education." },
                 { stat: "400+", label: "Households", desc: "Gained access to clean, reliable solar-powered drinking water." },
                 { stat: "1,000+", label: "Beneficiaries", desc: "Achieved improved food security through climate-smart gardens." }
               ].map((metric, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-md transition-shadow"
                  >
                     <div className="text-4xl md:text-5xl font-heading font-black text-primary-600 mb-4">{metric.stat}</div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
                     <p className="text-gray-600 text-sm">{metric.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* New Framework & Map Placeholder */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Impact Framework</h2>
               <p className="text-lg text-gray-600">
                  We don't just measure inputs; we measure lasting community transformation across four key pillars.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
               {[
                 { title: "Health & WASH", icon: Target, desc: "Reducing preventable diseases through safe water access." },
                 { title: "Food Security", icon: TrendingUp, desc: "Building year-round nutrition via climate-smart farming." },
                 { title: "Economic Stability", icon: CheckCircle2, desc: "Empowering women with surplus crop sales and microfinance." },
                 { title: "Education Access", icon: Map, desc: "Ensuring children stay in school by removing financial barriers." }
               ].map((pillar, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm"
                  >
                     <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <pillar.icon className="w-6 h-6" />
                     </div>
                     <h3 className="font-heading font-bold text-gray-900 mb-2">{pillar.title}</h3>
                     <p className="text-sm text-gray-600">{pillar.desc}</p>
                  </motion.div>
               ))}
            </div>

            {/* Video Section */}
            <div className="max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                  <div>
                     <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">See Our Impact in Action</h3>
                     <p className="text-gray-600">Watch the measurable difference we are continuing to make across communities in Zimbabwe.</p>
                  </div>
               </div>
               
               <div className="bg-gray-100 w-full aspect-video rounded-3xl border border-gray-200 shadow-xl overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full z-20 flex bg-black/5 items-center justify-center">
                     <LiteYouTube videoId="xEGHjwrPaks" title="Resilient Villages Video - The Plight of Rural Women" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      <SupportCTA />
    </div>
  );
}
