import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary-950 overflow-hidden">
      {image && (
        <div className="absolute inset-0 w-full h-full">
           <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover opacity-20 select-none pointer-events-none"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent" />
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
