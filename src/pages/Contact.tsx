import { PageHeader } from "../components/ui/PageHeader";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useSEO } from "../hooks/useSEO";
import { useState } from "react";

export default function Contact() {
  useSEO({
    title: "Contact Us",
    description: "Partner with us, ask a question, or learn how you can support Resilient Villages Zimbabwe.",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const body = new FormData(form);
    body.append("access_key", "31430e91-ce82-459a-8399-587f97c3a4bb");

    try {
       const response = await fetch('https://api.web3forms.com/submit', {
           method: 'POST',
           body,
           headers: {
              'Accept': 'application/json'
           }
       });

       if (response.ok) {
           setSubmitStatus('success');
           form.reset();
       } else {
           setSubmitStatus('error');
       }
    } catch (err) {
       setSubmitStatus('error');
    } finally {
       setIsSubmitting(false);
    }
  };

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
                   
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                         <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                         <a href="https://wa.me/263773640814" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                            +263 773 640814
                         </a>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             {/* Contact Form */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                   <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Send a Message</h3>
                   
                   {submitStatus === 'success' && (
                     <div className="mb-6 p-4 rounded-xl flex items-start gap-3 text-primary-900 bg-primary-50 border border-primary-200">
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-primary-600" />
                        <div>
                           <h4 className="font-bold">Message Sent Successfully</h4>
                           <p className="text-sm opacity-90">Thank you for reaching out. Our team will get back to you shortly.</p>
                        </div>
                     </div>
                   )}

                   {submitStatus === 'error' && (
                     <div className="mb-6 p-4 rounded-xl flex items-start gap-3 bg-red-50 text-red-900 border border-red-200">
                        <MessageCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                        <div>
                           <h4 className="font-bold">Failed to Send Message</h4>
                           <p className="text-sm opacity-90">Please check your connection and try again, or email us directly.</p>
                        </div>
                     </div>
                   )}

                   <form className="space-y-6" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                            <input id="firstName" name="firstName" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Chipo" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Moyo" />
                         </div>
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                         <input id="email" name="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="chipo@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                         <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="How can we help you?" />
                      </div>
                      
                      <Button type="submit" disabled={isSubmitting} className="w-full gap-2 text-lg py-6 bg-primary-600 hover:bg-primary-700 text-white disabled:opacity-70 disabled:cursor-not-allowed">
                         {isSubmitting ? (
                            <span className="flex items-center gap-2">
                               <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0"></span> Sending...
                            </span>
                         ) : (
                            <><Send className="w-5 h-5 shrink-0" /> Send Message</>
                         )}
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
