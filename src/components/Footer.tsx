import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black tracking-tighter text-on-surface font-display flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary text-base font-bold">K</div>
              Kindred
            </Link>
            <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-xs">
              A decentralized intelligence platform where communities solve local and global problems together.
            </p>
            <div className="flex gap-4">
               {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary-container hover:bg-primary-container/5 transition-all">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-on-surface mb-6">Explore</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-on-surface-variant">
              <Link to="/feed" className="hover:text-primary-container transition-colors">Marketplace</Link>
              <Link to="/experts" className="hover:text-primary-container transition-colors">Find Experts</Link>
              <Link to="/impact" className="hover:text-primary-container transition-colors">Real-world Impact</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Success Stories</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-on-surface mb-6">Company</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-on-surface-variant">
              <Link to="#" className="hover:text-primary-container transition-colors">About Us</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Careers</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Documentation</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Community Blog</Link>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-on-surface mb-6">Stay Updated</h4>
             <p className="text-sm text-on-surface-variant mb-4 font-medium">Join our newsletter to get weekly updates on local challenges.</p>
             <div className="flex gap-2">
                <input type="text" placeholder="Email address" className="flex-1 bg-surface-container text-sm p-3 rounded-xl focus:outline-none border border-transparent focus:border-primary-container/30 transition-all font-medium" />
                <button className="bg-primary-container text-on-primary px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary-container/10">Join</button>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
           <div>© 2024 Kindred Intelligence. All rights reserved.</div>
           <div className="flex gap-8">
              <Link to="#" className="hover:text-primary-container transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-primary-container transition-colors">Cookies</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
