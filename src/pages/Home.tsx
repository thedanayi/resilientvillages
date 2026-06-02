import { motion } from "motion/react";
import { ArrowRight, Leaf, Droplets, BookOpen, HeartHandshake, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
           <img 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b4b8?q=80&w=2940&auto=format&fit=crop" 
              alt="Community working together" 
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                 <span className="inline-block py-1 px-3 rounded-full bg-primary-800/80 border border-primary-700 text-primary-200 text-sm font-medium mb-6">
                    Empowering Communities in Zimbabwe
                 </span>
                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                    Building Resilience, <br className="hidden md:block"/> Transforming Lives.
                 </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-100 max-w-2xl mb-10 leading-relaxed"
              >
                 We deliver high-impact programs and long-term socio-economic solutions. Every person has the right to food, health, education, and safe water to live a dignified life.
              </motion.p>
              
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="flex flex-col sm:flex-row gap-4"
              >
                 <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white border-0 text-lg group">
                    Support Our Mission
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Button>
                 <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white text-lg">
                    Discover Our Impact
                 </Button>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-gray-100">
               {[
                 { label: "Beneficiaries Reached", value: "25,000+", icon: HeartHandshake },
                 { label: "Communities Supported", value: "48", icon: Leaf },
                 { label: "Projects Completed", value: "112", icon: Droplets },
                 { label: "Active Partners", value: "15", icon: BookOpen },
               ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center p-4"
                  >
                     <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                        <stat.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-2">{stat.value}</h3>
                     <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Empowering through Action</h2>
                  <p className="text-lg text-gray-600">
                     Our interventions prioritize vulnerable groups through high-impact, durable programs spanning agriculture, education, and health.
                  </p>
               </div>
               <Button variant="outline" asChild className="shrink-0 group">
                  <Link to="/programs" className="gap-2">
                     View All Programs <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                    title: "Climate-Smart Agriculture",
                    desc: "Equipping communities with modern farming techniques to combat climate change, ensuring food security and nutrition.",
                    icon: Leaf,
                    img: "https://images.unsplash.com/photo-1592686884488-81df68153406?q=80&w=800&auto=format&fit=crop"
                 },
                 {
                    title: "Water & Sanitation (WASH)",
                    desc: "Providing access to clean, safe drinking water and hygiene facilities, significantly reducing waterborne diseases.",
                    icon: Droplets,
                    img: "https://images.unsplash.com/photo-1498020359781-ccaf40989f5c?q=80&w=800&auto=format&fit=crop"
                 },
                 {
                    title: "Basic Education",
                    desc: "Supporting vulnerable children and youth with access to quality education, laying the foundation for a brighter future.",
                    icon: BookOpen,
                    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                 }
               ].map((program, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                     className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full"
                  >
                     <div className="relative h-56 overflow-hidden">
                        <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm">
                           <program.icon className="w-5 h-5" />
                        </div>
                     </div>
                     <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{program.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">{program.desc}</p>
                        <Link to="/programs" className="text-primary-700 font-medium inline-flex items-center gap-1 group/link mt-auto">
                           Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-24 bg-primary-900 text-white overflow-hidden relative">
         <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-primary-800 rounded-full blur-[120px] opacity-50" />
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Healing the Environment, Restoring Hope.</h2>
                  <p className="text-primary-100 text-lg leading-relaxed mb-6">
                     Resilient Villages Zimbabwe was founded to address the structural socio-economic vulnerabilities of rural communities. We recognize that true sustainability comes from within the community itself.
                  </p>
                  <p className="text-primary-100 text-lg leading-relaxed mb-10">
                     Our signature interventions, from the Munhande Nutrition Garden to major water harvesting projects, put power back into the hands of women, youth, and the physically challenged.
                  </p>
                  
                  <blockquote className="border-l-4 border-accent-500 pl-6 my-8">
                     <p className="text-xl md:text-2xl font-serif italic text-primary-50 mb-4">
                        "Before the nutrition garden, our harvests were unpredictable. Now, we not only feed our families year-round but sell the surplus to pay for school fees."
                     </p>
                     <footer className="text-primary-200">
                        — Chipo Makoni, <cite className="text-primary-300">Munhande Project Beneficiary</cite>
                     </footer>
                  </blockquote>
                  
                  <Button className="bg-white text-primary-900 hover:bg-gray-100 group">
                     Read Our Success Stories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
               >
                  <img src="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=1000&auto=format&fit=crop" alt="Local farmer" className="w-full h-full object-cover" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent-500 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-50" />
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-950 mb-6">Join Us in Building Resilient Villages</h2>
            <p className="text-xl text-primary-900 mb-10 max-w-2xl mx-auto">
               Your partnership can help us expand our nutrition gardens, build new wells, and provide education to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button size="lg" className="bg-primary-900 hover:bg-primary-950 text-white text-lg px-8">
                  Become a Partner
               </Button>
               <Button size="lg" variant="outline" className="border-primary-900 text-primary-950 hover:bg-primary-900 hover:text-white text-lg px-8">
                  Make a Donation
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
