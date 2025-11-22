import React from 'react';
import { motion } from 'framer-motion';
import { Statistic } from '../types';

const stats: Statistic[] = [
  { id: 1, value: 250, suffix: '+', label: 'Clients Worldwide' },
  { id: 2, value: 500, suffix: '+', label: 'Projects Completed' },
  { id: 3, value: 15, suffix: 'M+', label: 'Revenue Generated' },
  { id: 4, value: 98, suffix: '%', label: 'Client Retention' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-brand-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;