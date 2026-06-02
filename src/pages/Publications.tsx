import { Image } from "../components/ui/Image";
import { useEffect, useState, useMemo } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { FileDown, Search, Filter } from "lucide-react";
import { Publication } from "../types";
import { getPublications } from "../data/publications";
import { Button } from "../components/ui/Button";
import { useSEO } from "../hooks/useSEO";

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  useSEO({
    title: "Publications",
    description: "Access our annual reports, strategic plans, research papers, and newsletters.",
  });

  useEffect(() => {
    let isMounted = true;
    
    getPublications().then(data => {
      if (isMounted) {
        setPublications(data);
      }
    }).catch(error => {
      console.error("Failed to fetch publications:", error);
    });
    
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(publications.map(p => p.category)))];
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || pub.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [publications, searchTerm, activeCategory]);

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Publications & Documents" 
        description="Explore our research, strategic plans, and detailed reports that drive transparency and accountability."
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
             <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                   type="text" 
                   placeholder="Search publications..." 
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
             </div>
             
             <div className="flex sm:flex-row flex-wrap items-center gap-2 w-full lg:w-auto">
                <Filter className="w-5 h-5 text-gray-400 mr-2 hidden sm:block" />
                {categories.map(cat => (
                   <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                       activeCategory === cat 
                         ? "bg-primary-700 text-white shadow-sm" 
                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
                   >
                     {cat}
                   </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredPublications.map((pub, i) => (
                <motion.div 
                   key={pub.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1, duration: 0.4 }}
                   className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-all"
                >
                   {pub.img && (
                     <div className="h-48 overflow-hidden relative">
                       <Image src={pub.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-800">
                          {pub.year}
                       </div>
                     </div>
                   )}
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                         <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-3">
                            {pub.category}
                         </span>
                         <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight">
                            {pub.title}
                         </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                         {pub.description}
                      </p>
                      
                      <Button variant="outline" className="w-full gap-2 justify-center group-hover:bg-primary-50 group-hover:text-primary-800 transition-colors">
                         <FileDown className="w-4 h-4" /> Download ({pub.fileSize})
                      </Button>
                   </div>
                </motion.div>
             ))}
          </div>

          {filteredPublications.length === 0 && (
             <div className="text-center py-20">
                <p className="text-xl text-gray-500">No publications found matching your criteria.</p>
                <Button variant="ghost" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-4">
                   Clear filters
                </Button>
             </div>
          )}

        </div>
      </section>
    </div>
  );
}
