import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Contact Us" 
        description="Partner with us, ask a question, or learn how you can support Resilient Villages Zimbabwe."
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
             
             {/* Contact Info */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 shrink-0">
                         <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                         <p className="text-gray-600">Stand 28 Chaka Business Centre<br/>Mvuma, Zimbabwe</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 shrink-0">
                         <Phone className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                         <p className="text-gray-600">+263 773 640814</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 shrink-0">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900 mb-1">Email Address</h3>
                         <p className="text-gray-600">info@resilientvillages.org</p>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             {/* Contact Form */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                   <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send a Message</h3>
                   <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Jane" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" />
                         </div>
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                         <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="jane@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                         <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="How can we help you?" />
                      </div>
                      
                      <Button type="submit" className="w-full gap-2 text-lg py-6">
                         <Send className="w-5 h-5" /> Send Message
                      </Button>
                   </form>
                </div>
             </motion.div>
             
          </div>
        </div>
      </section>
    </div>
  );
}
