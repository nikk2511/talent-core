import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "TalentCore transformed our digital presence. The attention to detail and strategic approach resulted in a 200% increase in leads.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DesignCo",
    content: "The team's creativity is unmatched. They didn't just build a website; they built a brand experience that our customers love.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director, Flow",
    content: "Professional, timely, and exceptionally skilled. Working with TalentCore was the best investment we made this year.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Client Stories</h2>
          <p className="text-slate-400">Don't just take our word for it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-950 p-8 rounded-2xl border border-white/5 relative hover:border-brand-500/30 transition-colors"
            >
              <Quote className="text-brand-600 w-10 h-10 mb-6 opacity-50" />
              <p className="text-slate-300 mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-500/20" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;