import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Droplets, BookOpen, HeartHandshake, ChevronRight, Globe2, TreePine, Sprout } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { SupportCTA } from "../components/ui/SupportCTA";
import { Partner } from "../types";
import { getPartners } from "../data/partners";

export default function Home() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useSEO({
    title: "Building Resilient Communities",
    description: "Resilient Villages Zimbabwe delivers high-impact programs and long-term socio-economic solutions to vulnerable communities.",
  });

  useEffect(() => {
    getPartners().then(setPartners);
  }, []);

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
                 <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white border-0 text-lg group" asChild>
                    <Link to="/contact">
                       Support Our Mission
                       <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </Button>
                 <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white text-lg" asChild>
                    <Link to="/impact">Discover Our Impact</Link>
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
      <section className="py-24 bg-gray-50 border-y border-gray-100">
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
                    img: "/images/Climate Smart Agriculture.jpg"
                 },
                 {
                    title: "Water & Sanitation (WASH)",
                    desc: "Providing access to clean, safe drinking water and hygiene facilities, significantly reducing waterborne diseases.",
                    icon: Droplets,
                    img: "/images/water and sanitation1.jpeg"
                 },
                 {
                    title: "Basic Education",
                    desc: "Supporting vulnerable children and youth with access to quality education, laying the foundation for a brighter future.",
                    icon: BookOpen,
                    img: "/images/basic education.jpeg"
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
                  
                  <Button className="bg-white text-primary-900 hover:bg-gray-100 group" asChild>
                     <Link to="/stories">
                        Read Our Success Stories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </Button>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-black"
               >
                  <iframe 
                     className="w-full h-full absolute top-0 left-0"
                     src="https://www.youtube.com/embed/2AKqVo2AT8A?rel=0" 
                     title="YouTube video player" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                  ></iframe>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Partners</h2>
               <p className="text-gray-600">Together, we build lasting change. We are proud to collaborate with organizations committed to rural development.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               {partners.length > 0 ? partners.map((partner) => {
                  let Icon = Globe2;
                  if (partner.id === 'partner-2') Icon = Droplets;
                  if (partner.id === 'partner-3') Icon = TreePine;
                  if (partner.id === 'partner-4') Icon = Sprout;

                  return (
                     <div 
                        key={partner.id} 
                        className="flex items-center gap-3 text-gray-400 hover:text-primary-800 transition-colors duration-300 cursor-pointer"
                     >
                        <Icon className="w-8 h-8 md:w-10 md:h-10" />
                        <span className="font-heading font-bold text-xl md:text-2xl tracking-tight">
                           {partner.name}
                        </span>
                     </div>
                  );
               }) : (
                 <p className="text-gray-400">Loading partners...</p>
               )}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <SupportCTA />
    </div>
  );
}
