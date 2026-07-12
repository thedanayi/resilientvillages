import { Image } from "../components/ui/Image";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Droplets, BookOpen, ChevronRight, Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { SupportCTA } from "../components/ui/SupportCTA";
import { LiteYouTube } from "../components/ui/LiteYouTube";

/**
 * The Home component represents the main landing page of the application.
 */
export default function Home() {
  // Custom hook to set the page title and meta description for Search Engine Optimization (SEO)
  useSEO({
    title: "Building Resilient Communities",
    description: "Resilient Villages Zimbabwe delivers high-impact programs and long-term socio-economic solutions to vulnerable communities.",
  });

  return (
    <div className="flex flex-col w-full">
      {/* 
        Hero Section: 
        The top banner of the website, containing a background image, a gradient overlay, and a clear call-to-action (CTA).
      */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-primary-950 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 w-full h-full">
           <Image 
              src="/images/grandma.jpg" 
              alt="Community working together" 
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
              loading="eager"
           />
           {/* A gradient overlay makes text easier to read against the background image */}
           <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <div className="max-w-3xl">
              {/* motion.div animates elements as they render. Initial state -> animate state */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                 <span className="inline-block py-1 px-3 rounded-full bg-primary-800/80 border border-primary-700 text-primary-200 text-sm font-medium mb-6">
                    Empowering Communities in Zimbabwe
                 </span>
                 <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                    Building Resilience, <br className="hidden md:block"/> Transforming Lives.
                 </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-100 max-w-2xl mb-10 leading-relaxed"
              >
                 Sustainable empowerment of communities to build resilient villages.
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

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
         <div className="w-full">
            <p className="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase mb-6 pt-10 px-4">
               Trusted by communities and supported by global partners
            </p>
            <div className="flex flex-col md:flex-row w-full opacity-90 hover:opacity-100 transition-opacity duration-500">
               <div className="flex-1 w-full p-4 md:p-8 flex items-center justify-center">
                  <img 
                     src="/images/partner1.jpg" 
                     alt="Partner 1" 
                     className="w-full h-40 md:h-56 object-contain"
                  />
               </div>
               <div className="flex-1 w-full p-4 md:p-8 flex items-center justify-center">
                  <img 
                     src="/images/partner2.png" 
                     alt="Partner 2" 
                     className="w-full h-40 md:h-56 object-contain"
                  />
               </div>
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
                    title: "Climate-Smart Agriculture and Livelihoods",
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
                        <Image src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm" aria-hidden="true">
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
                        Read Our Stories & Insights <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </Button>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[400px] md:h-[600px] rounded-3xl shadow-2xl overflow-hidden flex items-center bg-black/50"
               >
                  <LiteYouTube videoId="2AKqVo2AT8A" title="Healing the Environment Video" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row max-w-6xl mx-auto">
               <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image src="/images/the plight of rural women.jpeg" alt="The Plight of Rural Women" className="w-full h-full object-cover" />
               </div>
               <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary-700 font-medium mb-4">
                     <span className="h-px w-8 bg-primary-700"></span> Featured Insight
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                     The Plight of Rural Women: Why Empowerment is the Key to Development
                  </h2>
                  <p className="text-gray-600 md:text-lg mb-8 leading-relaxed">
                     Women and children form the backbone of rural economies, yet they face disproportionate challenges. Discover why empowering them transforms entire communities.
                  </p>
                  <Button className="w-fit group bg-primary-700 hover:bg-primary-800 text-white" asChild>
                     <Link to="/stories/empowering-rural-women">
                        Read Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <SupportCTA />
    </div>
  );
}
