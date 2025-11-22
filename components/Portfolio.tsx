import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "Neon Horizon", category: "Branding", image: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "Apex Finance", category: "Web Development", image: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "EcoLife App", category: "UI/UX Design", image: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "Future Tech", category: "Marketing", image: "https://picsum.photos/800/600?random=4" },
  { id: 5, title: "Zenith Architecture", category: "Web Design", image: "https://picsum.photos/800/600?random=5" },
  { id: 6, title: "Global Logistics", category: "IT Solutions", image: "https://picsum.photos/800/600?random=6" },
];

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-lg">
              A curated gallery of our most impactful projects, showcasing innovation and creativity.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-brand-400 transition-colors mt-6 md:mt-0">
            View All Projects <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-all duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight className="text-slate-950" />
                   </div>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <p className="text-brand-300 text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full">
            View All Projects <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;