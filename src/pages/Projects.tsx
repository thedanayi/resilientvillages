import { Image } from "../components/ui/Image";
import { useEffect, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Project } from "../types";
import { getProjects } from "../data/projects";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useSEO({
    title: "Projects in Action",
    description: "Explore the specific, measurable interventions we are executing on the ground to build resilient villages.",
  });

  useEffect(() => {
    let isMounted = true;
    
    getProjects()
      .then((data) => {
        if (isMounted) setProjects(data);
      })
      .catch(console.error);
      
    return () => {
      isMounted = false;
    };
  }, []);

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
                 key={project.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-md transition-shadow"
               >
                 <div className="md:w-2/5 h-64 md:h-auto relative">
                    <Image src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                       <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-800 flex items-center shadow-sm">
                          <MapPin className="w-3 h-3 mr-1" /> {project.location}
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
                       
                       {project.images && project.images.length > 0 && (
                          <div className="mt-6 pt-6 border-t border-gray-100">
                             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Gallery</h4>
                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {project.images.map((img, idx) => (
                                   <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                                      <Image src={img} alt={`${project.title} Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                                   </div>
                                ))}
                             </div>
                          </div>
                       )}
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}
