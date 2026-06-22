import { Image } from "../components/ui/Image";
import { useEffect, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Story } from "../types";
import { getStories } from "../data/stories";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";

export default function Stories() {
  // State hook to store the array of stories loaded from the data source
  const [stories, setStories] = useState<Story[]>([]);
  
  // Custom hook to set SEO meta tags reflecting the page intent
  useSEO({
    title: "Stories & Insights",
    description: "Read inspiring stories of community transformation and resilience from our beneficiaries in Zimbabwe.",
  });

  // Fetch the stories when the page is loaded (component mounts)
  useEffect(() => {
    let isMounted = true;
    
    getStories()
      .then((data) => {
        if (isMounted) setStories(data);
      })
      .catch(console.error);
      
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Stories & Insights" 
        description="Real stories of resilience, empowerment, and transformation from the communities we serve."
        image="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
             {stories.map((story, i) => (
                <motion.article 
                   key={story.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow group"
                >
                   <Link to={`/stories/${story.id}`} className="block relative h-72 overflow-hidden cursor-pointer">
                      <Image src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-800 flex items-center shadow-sm">
                         <MapPin className="w-3 h-3 mr-1" /> {story.location}
                      </div>
                   </Link>
                   
                   <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                         <Calendar className="w-4 h-4" />
                         <span>{new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      
                      <Link to={`/stories/${story.id}`}>
                         <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 hover:text-primary-700 group-hover:text-primary-700 transition-colors cursor-pointer">
                            {story.title}
                         </h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                         {story.summary}
                      </p>
                      
                      <blockquote className="border-l-2 border-accent-500 pl-4 my-6 text-gray-700 italic">
                         "{story.quote}"
                         <footer className="mt-2 text-sm font-semibold text-primary-700">— {story.beneficiary}</footer>
                      </blockquote>
                      
                      <Link to={`/stories/${story.id}`} className="mt-auto inline-flex items-center text-primary-700 font-bold group/link">
                         Read Full Story <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </motion.article>
             ))}
          </div>
        </div>
      </section>
      
      <SupportCTA 
         title="Help Us Write the Next Story"
         description="Your generous partnership and donations make these transformations possible. Join us in building more resilient villages."
      />
    </div>
  );
}
