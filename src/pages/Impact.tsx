import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { FileDown } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Impact() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Impact" 
        description="Measurable transformation driven by data, accountability, and community ownership."
      />
      
      <section className="py-20 bg-white">
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
    </div>
  );
}
