import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
             <a href="#" className="text-xl font-display font-bold tracking-tight flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-brand-500 to-blue-500 rounded-md"></div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Talent Core Association
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Elevating brands through digital innovation. We build the future of the web, one pixel at a time.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-500 hover:scale-110 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to get the latest news and updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500 w-full"
              />
              <button className="bg-brand-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-brand-500 transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 Talent Core Association. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;