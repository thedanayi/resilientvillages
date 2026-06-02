import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { motion } from "motion/react";

interface SupportCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function SupportCTA({
  title = "Partner With Us to Create Lasting Impact",
  description = "Join our mission to empower rural communities through sustainable agriculture, clean water, and access to education. Your support transforms lives.",
  primaryButtonText = "Partner With Us",
  secondaryButtonText = "Make a Donation"
}: SupportCTAProps) {
  return (
    <section className="py-24 bg-accent-500 relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-50" />
       
       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="max-w-3xl mx-auto"
          >
             <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-950 mb-6">{title}</h2>
             <p className="text-xl text-primary-900 mb-10 leading-relaxed">
                {description}
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="bg-primary-900 hover:bg-primary-950 text-white text-lg px-8">
                   <Link to="/contact">
                      {primaryButtonText} <ArrowRight className="ml-2 w-5 h-5" />
                   </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-900 text-primary-950 hover:bg-primary-900 hover:text-white text-lg px-8">
                   <Link to="/contact">{secondaryButtonText}</Link>
                </Button>
             </div>
          </motion.div>
       </div>
    </section>
  );
}
