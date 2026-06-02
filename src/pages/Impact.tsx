import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { FileDown, Map, Target, TrendingUp, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";

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
      
      {/* Existing Report Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Annual Report 2025</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                   Our latest annual report details the measurable outcomes of our WASH, Agriculture, and Education programs. Driven by strict KPI tracking, we ensure every donor dollar translates into lasting community resilience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <Button className="gap-2 shrink-0">
                      <FileDown className="w-5 h-5" /> Download Full Report (PDF)
                   </Button>
                   <Button variant="outline" className="gap-2 shrink-0">
                      View Financials
                   </Button>
                </div>
             </motion.div>
             
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div className="bg-primary-950 rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
                   <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-primary-800 rounded-full opacity-20" />
                   <h3 className="text-2xl font-heading font-bold mb-8">2025 Key Achievements</h3>
                   <div className="space-y-6">
                      {[
                        { label: "Increase in crop yield in target areas", val: "45%" },
                        { label: "Reduction in reported cholera cases", val: "82%" },
                        { label: "Children retained in basic education", val: "94%" },
                        { label: "Community gardens managed by women", val: "100%" }
                      ].map((stat, i) => (
                         <div key={i} className="flex justify-between items-center border-b border-primary-800 pb-4">
                            <span className="text-primary-100">{stat.label}</span>
                            <span className="text-2xl font-bold font-heading text-primary-300">{stat.val}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </motion.div>
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

            {/* Interactive Map Placeholder */}
            <div className="max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                  <div>
                     <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Geographic Reach</h3>
                     <p className="text-gray-600">Explore our active project locations across Zimbabwe.</p>
                  </div>
               </div>
               
               <div className="bg-white w-full h-[500px] rounded-3xl border border-gray-200 shadow-sm overflow-hidden relative flex items-center justify-center">
                  {/* Placeholder Map UI */}
                  <div className="absolute inset-0 bg-[#e5e7eb] opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDEwbDQwIDBTTTAgMjBsNDAgMFNNMCAzMGw0MCAwU00xMCAwbDAgNDBTSTIwIDBsMCA0MFNNMzAgMGwwIDQwIi8+PC9nPjwvc3ZnPg==')]" />
                  <div className="z-10 text-center">
                     <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                     <p className="text-gray-500 font-medium">Interactive Map Data Integration Pending</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <SupportCTA />
    </div>
  );
}
