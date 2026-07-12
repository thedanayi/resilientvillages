import { Image } from "../components/ui/Image";
import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { Users, Target, Shield, History } from "lucide-react";
import { SupportCTA } from "../components/ui/SupportCTA";
import { useSEO } from "../hooks/useSEO";
import { LiteYouTube } from "../components/ui/LiteYouTube";


/**
 * About page component rendering information about the organization, history, and team.
 */
export default function About() {
  // Set up SEO titles and descriptions for this page
  useSEO({
    title: "About Us",
    description: "Learn about Resilient Villages Zimbabwe, our mission, our values, and the team driving sustainable development.",
  });

  return (
    <div className="flex flex-col w-full">
      {/* Reusable page header component */}
      <PageHeader 
        title="About Us" 
        description="We are driven by the belief that every person in a village has the right to a dignified life."
        image="https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
              {/* motion.div is used to animate elements fading and sliding in as they scroll into view */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-bold mb-6">
                    <Target className="w-4 h-4" /> Our Mission
                 </div>
                 <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Building Resilient Communities</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   Resilient Villages Zimbabwe (RVZ) is a registered non-profit organization dedicated to establishing high-impact, sustainable programs. We focus on long-term socio-economic solutions to problems affecting vulnerable communities.
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   We prioritize women, girls, children, the physically challenged, and youth, ensuring that our interventions lead to durable and long-lasting benefits that break the cycle of poverty.
                 </p>
              </motion.div>
              {/* Right column: Video container. Animated to fade and slide in from the right */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }} // Start slightly to the right (x: 20px) and invisible (opacity: 0)
                 whileInView={{ opacity: 1, x: 0 }} // Animate to final position (x: 0, opacity: 1)
                 viewport={{ once: true }} // Only trigger this animation once when scrolled into view
                 className="relative h-96 rounded-3xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center"
              >
                 <LiteYouTube videoId="xEGHjwrPaks" title="Resilient Villages Video - The Plight of Rural Women" />
              </motion.div>
           </div>
           
           {/* Values Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="bg-primary-50 p-8 rounded-3xl text-center shadow-sm"
               >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary-700 shadow-sm">
                     <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-600">Sustainable empowerment of communities to build resilient villages.</p>
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                  className="bg-primary-50 p-8 rounded-3xl text-center shadow-sm"
               >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary-700 shadow-sm">
                     <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Values</h3>
                  <p className="text-gray-600">Integrity, inclusivity, community-first development, and measurable impact.</p>
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="bg-primary-50 p-8 rounded-3xl text-center shadow-sm"
               >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary-700 shadow-sm">
                     <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-600">Transparent operations and accountable leadership at every level of the organization.</p>
               </motion.div>
           </div>
        </div>
      </section>

      {/* History Timeline Minimal */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Journey</h2>
               <p className="text-lg text-gray-600">Established to combat deep-rooted socio-economic challenges.</p>
            </div>
            
            <div className="space-y-12">
               {[
                 { year: "2018", title: "Foundation", desc: "RVZ was officially registered to respond directly to the worsening water crisis in the Chirumhanzu District." },
                 { year: "2020", title: "Agricultural Pivot", desc: "Launched climate-smart agriculture and livelihoods programs to combat severe droughts and food insecurity." },
                 { year: "2023", title: "Expanded Reach", desc: "Scaled operations to cover 48 communities, establishing the Munhande Nutrition Garden as a flagship model." }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="sm:w-32 flex-shrink-0 pt-1">
                       <span className="text-2xl font-heading font-bold text-primary-600">{item.year}</span>
                    </div>
                    <div className="flex-grow bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                       <p className="text-gray-600">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6 text-center">
             <div className="max-w-4xl mx-auto mb-16">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Our Leadership & Governance</h2>
               <p className="text-gray-600 text-lg leading-relaxed">
                 RVZ is guided by a Board of Directors committed to transparency, accountability, and the long-term success of our beneficiary communities. Our executive team brings decades of experience in development, agriculture, and public health.
               </p>
             </div>
             <div className="flex flex-wrap justify-center gap-12">
                {[
                  { 
                    name: "Sr Stellar Gaihai Khumalo", 
                    role: "Board Chairperson", 
                    img: "/images/Stella Gaihai Khumalo - Chairperson.jpg",
                    bio: [
                      "Masters of Science Degree in Nursing science (mental health/Psychiatric Nursing speciality)",
                      "Bachelor of Science Honours Degree in psychology",
                      "Diploma in Mental Health nursing",
                      "Diploma in general nursing"
                    ]
                  },
                  { 
                    name: "Blazio Manobo", 
                    role: "Vice Chairperson", 
                    img: "/images/Manobo.png",
                    bio: [
                      "PhD Dev Studies 2019-2021 (Candidate)",
                      "Master of Social Sciences (M&E)",
                      "Master of Arts Development Studies",
                      "Master of Business Administration (MBA)",
                      "Bachelor of Social Science (Hons) M & E"
                    ]
                  },
                  { 
                    name: "Miss Mutero Modester", 
                    role: "Secretary", 
                    img: "/images/Modester Mutero - Secretary.jpg",
                    bio: [
                      "Master of Commerce in Strategic Management And Corporate Governance (MSU)",
                      "Bachelor of Laws Honours Degree (UZ)"
                    ]
                  },
                  { 
                    name: "Mrs Mushayi Maria Tambudzai", 
                    role: "Vice Secretary", 
                    img: "/images/Tambudzai Maria Mushayi - Vice Secretary.jpeg",
                    bio: [
                      "Bachelor of Science Degree in Counseling",
                      "Certificate in Education"
                    ]
                  },
                  { 
                    name: "Mr Mutumhe Rabson", 
                    role: "Treasurer", 
                    img: "/images/Rabson Mutumhe - Treasurer.jpg",
                    bio: [
                      "Qualified Chartered Accountant",
                      "Masters in Business Administration (MBA)",
                      "Chartered Institute of Management Accountants (CIMA)",
                      "Institute of Chartered Secretaries & Administrators in Zimbabwe"
                    ]
                  },
                  { 
                    name: "Professor Johnson Masaka", 
                    role: "Member", 
                    img: "/images/prof masaka.jpg",
                    bio: [
                      "BSc Agron Hon. , MSc Soil Science:, Kuban Agrarian University, Federal Republic of Russia (1983- 1989)",
                      "Doctor of Philosophy (DPhil), Department of Soil Science and Agricultural Engineering, Faculty of Agriculture, University of Zimbabwe (2014)"
                    ]
                  }
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center max-w-[320px] text-center bg-gray-50 p-6 rounded-3xl shadow-sm border border-gray-100">
                     <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 overflow-hidden shadow-md flex items-center justify-center text-gray-400">
                        {member.img ? (
                          <Image src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                        ) : (
                          <Users className="w-12 h-12" />
                        )}
                     </div>
                     <h4 className="text-xl font-heading font-bold text-gray-900 mb-1">{member.name}</h4>
                     <p className="text-primary-600 font-bold mb-4">{member.role}</p>
                     <ul className="text-sm text-gray-600 space-y-2 text-left">
                       {member.bio.map((line, idx) => (
                         <li key={idx} className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                           <span>{line}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                ))}
             </div>
         </div>
      </section>

      <SupportCTA />
    </div>
  );
}
