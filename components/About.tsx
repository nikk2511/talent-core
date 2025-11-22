import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  "Strategic Brand Positioning",
  "Data-Driven Marketing",
  "Cutting-Edge Development",
  "Award-Winning Design"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Team working" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-slate-900 border border-white/10 p-6 rounded-2xl z-20 shadow-2xl max-w-[200px]">
              <p className="text-4xl font-display font-bold text-brand-400 mb-1">10+</p>
              <p className="text-sm text-slate-400">Years of digital excellence and innovation.</p>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-400 font-medium tracking-wide uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Architects of the <br />
              <span className="text-white">Digital Future.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              TalentCore Next isn't just an agency; we are your strategic partner in the digital landscape. 
              We combine technical expertise with creative brilliance to deliver solutions that not only look good but drive real business results.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-500" />
                  <span className="text-slate-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#services" className="text-white border-b border-brand-500 pb-1 hover:text-brand-400 transition-colors inline-block">
              Explore our capabilities &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;