import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Users, Droplets, CheckCircle, Leaf, HandHeart } from "lucide-react";
import { Project } from "../types";
import { getProjects } from "../data/projects";
import { PageHeader } from "../components/ui/PageHeader";
import { Image } from "../components/ui/Image";
import { useSEO } from "../hooks/useSEO";
import { Lightbox } from "../components/ui/Lightbox";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  useEffect(() => {
    let isMounted = true;
    getProjects()
      .then((data) => {
        if (isMounted) {
          const found = data.find(p => p.id === id);
          setProject(found || null);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  useSEO({
    title: project ? `${project.title} | Projects` : "Project Details",
    description: project ? project.challenge : "Explore the details of our projects and their impact on communities.",
  });

  if (loading) {
    return (
      <div className="flex flex-col w-full h-[60vh] items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col w-full py-24 items-center justify-center text-center">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">We couldn't find the project you're looking for. It may have been moved or removed.</p>
        <Link to="/projects" className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 font-medium transition-colors">
          View All Projects
        </Link>
      </div>
    );
  }

  const allImages = project.images ? [project.img, ...project.images] : [project.img];

  return (
    <div className="flex flex-col w-full bg-white">
      <PageHeader 
        title={project.title} 
        description={project.donor ? `Supported by: ${project.donor}` : undefined}
        image={project.img}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <Link to="/projects" className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium mb-12 group transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-white p-3 rounded-xl text-primary-600 shrink-0 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-600">{project.location}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-white p-3 rounded-xl text-primary-600 shrink-0 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Beneficiaries</h3>
              <p className="text-gray-600">{project.beneficiaries}</p>
            </div>
          </div>
        </div>

        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-primary-100 text-primary-700 w-10 h-10 rounded-full flex items-center justify-center text-sm">01</span>
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-primary-100 text-primary-700 w-10 h-10 rounded-full flex items-center justify-center text-sm">02</span>
                The Intervention
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{project.intervention}</p>
              
              {project.objectives && (
                <div className="bg-primary-50 p-8 rounded-3xl mt-8 border border-primary-100">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Project Objectives</h3>
                  <ul className="space-y-4">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </div>

          <div className="lg:col-span-1">
             {/* Gallery Sidebar */}
             <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {allImages.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setLightboxData({ images: allImages, currentIndex: idx })}
                      className={`rounded-xl overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity cursor-pointer border-0 w-full p-0 block aspect-square ${idx === 0 ? 'col-span-2 aspect-[4/3]' : ''}`}
                    >
                      <Image src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Detailed Impacts */}
        {project.impacts && (
          <section className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Project Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.impacts.map((impact, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                      {i === 0 ? <Droplets className="w-6 h-6" /> : 
                       i === 1 ? <Leaf className="w-6 h-6" /> : 
                       i === 2 ? <MapPin className="w-6 h-6" /> : 
                       <HandHeart className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{impact.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {impact.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Lessons Learned & Sustainability */}
        {(project.lessonsLearned || project.sustainability) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 md:p-12 rounded-3xl mb-20">
            {project.lessonsLearned && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lessons Learnt</h3>
                <ul className="space-y-4">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-primary-100 text-primary-700 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">{idx + 1}</div>
                      <span className="text-gray-700">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.sustainability && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainability</h3>
                <ul className="space-y-4">
                  {project.sustainability.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>

      <Lightbox 
        isOpen={lightboxData !== null}
        images={lightboxData?.images || []}
        currentIndex={lightboxData?.currentIndex || 0}
        onClose={() => setLightboxData(null)}
        onNavigate={(idx) => setLightboxData(prev => prev ? { ...prev, currentIndex: idx } : null)}
      />
    </div>
  );
}
