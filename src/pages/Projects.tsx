import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { MapPin, Users } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Munhande Nutrition Garden Project",
      location: "Munhande Village",
      beneficiaries: "120 Families",
      challenge: "Severe droughts led to chronic food insecurity and malnutrition among children.",
      intervention: "Established a solar-powered borehole and drip irrigation system for a 2-hectare community garden.",
      results: "Year-round vegetable production, improved household nutrition, and surplus sales paying school fees.",
      img: "https://images.unsplash.com/photo-1592424001807-fbd77732a39a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Water Harvesting Expansion",
      location: "Chaka District",
      beneficiaries: "3,500 People",
      challenge: "Women walked up to 8km daily to fetch unsafe surface water.",
      intervention: "Constructed 5 large-scale rainwater harvesting weirs and rehabilitated 3 community boreholes.",
      results: "Water access reduced to under 500m. 80% reduction in waterborne disease cases at local clinics.",
      img: "https://images.unsplash.com/photo-1541888046897-88981180cf2a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Projects in Action" 
        description="Explore the specific, measurable interventions we are executing on the ground."
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-12">
            {projects.map((project, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row"
               >
                 <div className="md:w-2/5 h-64 md:h-auto relative">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                       <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-800 flex items-center shadow-sm">
                          <MapPin className="w-3 h-3 mr-1" /> {project.location}
                       </span>
                       <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent-600 flex items-center shadow-sm">
                          <Users className="w-3 h-3 mr-1" /> {project.beneficiaries}
                       </span>
                    </div>
                 </div>
                 
                 <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">{project.title}</h2>
                    
                    <div className="space-y-4">
                       <div>
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                          <p className="text-gray-700">{project.challenge}</p>
                       </div>
                       <div>
                          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Intervention</h4>
                          <p className="text-gray-700">{project.intervention}</p>
                       </div>
                       <div>
                          <h4 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-1">Results</h4>
                          <p className="text-gray-900 font-medium">{project.results}</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
