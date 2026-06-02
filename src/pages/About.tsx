import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { Users, Target, Shield, History } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="About Us" 
        description="We are driven by the belief that every person in a village has the right to a dignified life."
        image="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Mission</h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 Resilient Villages Zimbabwe (RVZ) is a registered non-profit organization focused on building resilient villages. We target high-impact sustainable programs and long-term socio-economic solutions to problems affecting villagers.
               </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                 We prioritize vulnerable groups including women, girls, children, the physically challenged, and youth, ensuring that our interventions lead to durable and long-lasting benefits.
               </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
               <div className="bg-primary-50 p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                     <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600 text-sm">Thriving, self-sustaining communities free from poverty.</p>
               </div>
               <div className="bg-primary-50 p-6 rounded-2xl text-center mt-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Values</h3>
                  <p className="text-gray-600 text-sm">Integrity, inclusivity, and community-first development.</p>
               </div>
               <div className="bg-primary-50 p-6 rounded-2xl text-center -mt-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">Governance</h3>
                  <p className="text-gray-600 text-sm">Transparent operations and accountable leadership.</p>
               </div>
               <div className="bg-primary-50 p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                     <History className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 mb-2">History</h3>
                  <p className="text-gray-600 text-sm">Established to combat deep-rooted socio-economic challenges.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
             <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Leadership & Governance</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-12">
               RVZ is guided by a Board of Directors committed to transparency, accountability, and the long-term success of our beneficiary communities. Our executive team brings decades of experience in development, agriculture, and public health.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                     <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                        <img src={`https://i.pravatar.cc/300?img=${i + 10}`} alt="Team member" className="w-full h-full object-cover" />
                     </div>
                     <h4 className="font-heading font-bold text-gray-900">Board Member</h4>
                     <p className="text-primary-600 text-sm">RVZ Governance</p>
                  </div>
                ))}
             </div>
         </div>
      </section>
    </div>
  );
}
