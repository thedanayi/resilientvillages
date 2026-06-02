import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, Share2 } from "lucide-react";
import { Story } from "../types";
import { getStories } from "../data/stories";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";

/**
 * StoryDetail component dynamically displays the full content of an individual success story.
 * It reads the 'id' from the URL parameters to fetch the matching story details.
 */
export default function StoryDetail() {
  // Extract the 'id' parameter from the URL using React Router's useParams hook
  const { id } = useParams<{ id: string }>();
  
  // State to hold the fetched story data
  const [story, setStory] = useState<Story | null>(null);
  
  // State to manage the loading indicator while fetching data
  const [loading, setLoading] = useState(true);

  // useEffect runs when the component mounts or when the 'id' parameter changes
  useEffect(() => {
    // Fetch all stories and find the one that matches the current 'id'
    getStories().then((stories) => {
      const foundStory = stories.find((s) => s.id === id);
      setStory(foundStory || null);
      setLoading(false); // Turn off loading state once data is resolved
    });
  }, [id]);

  useSEO({
    title: story ? story.title : "Story Not Found",
    description: story ? story.summary : "",
    image: story ? story.img : undefined,
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold font-heading mb-4">Story Not Found</h1>
        <p className="text-gray-600 mb-8">The story you are looking for does not exist or has been removed.</p>
        <Link to="/stories" className="text-primary-700 font-medium hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all stories
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
           <img 
              src={story.img} 
              alt={story.title} 
              className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-medium text-primary-200">
               <div className="flex items-center gap-2 bg-primary-900/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-primary-800">
                  <MapPin className="w-4 h-4" /> {story.location}
               </div>
               <div className="flex items-center gap-2 bg-primary-900/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-primary-800">
                  <Calendar className="w-4 h-4" /> 
                  {new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
               </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {story.title}
            </h1>
            
            <p className="text-xl text-primary-100 italic">
               "{story.quote}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
               
               <Link to="/stories" className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium mb-10 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to all stories
               </Link>

               {/* Meta info block */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                     <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Beneficiary</h3>
                     <p className="text-lg font-bold text-gray-900">{story.beneficiary}</p>
                  </div>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-primary-700 transition-colors px-4 py-2 rounded-lg hover:bg-white border border-transparent hover:border-gray-200 shadow-sm">
                     <Share2 className="w-4 h-4" /> Share Story
                  </button>
               </div>

               {/* The Story */}
               <article className="prose prose-lg md:prose-xl prose-gray max-w-none text-gray-700">
                  <p className="lead text-2xl text-gray-900 font-medium mb-10 leading-relaxed">
                     {story.summary}
                  </p>

                  <h3 className="text-2xl font-heading font-bold text-gray-900 mt-12 mb-4">The Challenge</h3>
                  <p className="mb-8 leading-relaxed">
                     {story.challenge}
                  </p>

                  <h3 className="text-2xl font-heading font-bold text-gray-900 mt-12 mb-4">The Intervention</h3>
                  <p className="mb-8 leading-relaxed">
                     {story.solution}
                  </p>

                  {/* Display video if available, otherwise show the article image */}
                  {story.videoUrl ? (
                     <div className="my-12 relative w-full pb-[56.25%] overflow-hidden rounded-2xl shadow-md">
                        {/* 16:9 Aspect Ratio Container for YouTube video */}
                        <iframe 
                           className="absolute top-0 left-0 w-full h-full"
                           src={story.videoUrl} 
                           title={story.title}
                           frameBorder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen
                        ></iframe>
                     </div>
                  ) : (
                     <div className="my-12">
                        {/* Fallback to showing the article image if no video URL is provided */}
                        <img src={story.img} alt={story.title} className="w-full rounded-2xl shadow-sm" />
                     </div>
                  )}

                  <h3 className="text-2xl font-heading font-bold text-gray-900 mt-12 mb-4">The Impact</h3>
                  <p className="mb-8 leading-relaxed font-medium text-primary-900">
                     {story.outcome}
                  </p>
               </article>

            </div>
         </div>
      </section>

      <SupportCTA 
         title="Help Create More Stories Like This"
         description="Your support allows us to transform communities and empower individuals."
      />
    </div>
  );
}
