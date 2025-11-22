import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Megaphone, Smartphone, Code2, BarChart3 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Branding & Identity',
    description: 'We craft memorable brand identities that resonate with your audience and stand the test of time.',
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'High-performance websites built with the latest technologies for speed, SEO, and scale.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that drive traffic, convert leads, and maximize ROI across channels.',
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centric interfaces designed to provide seamless and engaging digital experiences.',
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'IT Solutions',
    description: 'Robust IT infrastructure and support to ensure your business operations run smoothly.',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'Analytics & Strategy',
    description: 'Deep insights and strategic planning to guide your digital transformation journey.',
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to elevate your business in the modern age.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-950 border border-white/5 hover:border-brand-500/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;