import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    {
      id: "climate-agriculture",
      title: "Climate-Smart Agriculture",
      description: "Equipping rural farmers with sustainable techniques to adapt to climate change, ensuring food security and economic stability.",
      outcomes: ["Increased crop yields", "Soil preservation", "Drought resilience"],
      img: "https://images.unsplash.com/photo-1592686884488-81df68153406?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "wash",
      title: "Water & Sanitation (WASH)",
      description: "Providing access to clean water infrastructure and sanitation facilities to eliminate waterborne diseases in vulnerable communities.",
      outcomes: ["Reduced disease rates", "Accessible clean water", "Improved hygiene"],
      img: "https://images.unsplash.com/photo-1498020359781-ccaf40989f5c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "environmental-healing",
      title: "Leading Environmental Healing",
      description: "Community-driven initiatives to restore degraded landscapes, plant trees, and manage natural resources sustainably.",
      outcomes: ["Reforestation", "Erosion control", "Community management"],
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Our Programs" 
        description="Comprehensive strategies designed to uplift communities through health, education, and sustainable agriculture."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
             {programs.map((program, index) => (
                <div key={program.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                   <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-1/2"
                   >
                      <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px]">
                         <img src={program.img} alt={program.title} className="w-full h-full object-cover" />
                      </div>
                   </motion.div>
                   
                   <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-1/2 flex flex-col justify-center"
                   >
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">{program.title}</h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                         {program.description}
                      </p>
                      
                      <h3 className="font-heading font-bold text-gray-900 mb-4">Key Outcomes:</h3>
                      <ul className="space-y-3 mb-8">
                         {program.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                               <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                               {outcome}
                            </li>
                         ))}
                      </ul>
                      
                      <Link to={`/projects?program=${program.id}`} className="inline-flex items-center text-primary-700 font-bold group">
                         View Related Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                   </motion.div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
