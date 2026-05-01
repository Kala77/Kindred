import { motion } from 'motion/react';
import { Sparkles, Image as ImageIcon, Camera, Globe, ChevronRight, ChevronLeft, Shield, Users, EyeOff, TreePine, GraduationCap, Heart, Truck, Users2, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'env', label: 'Environment', icon: TreePine },
  { id: 'edu', label: 'Education', icon: GraduationCap },
  { id: 'well', label: 'Well-being', icon: Heart },
  { id: 'tran', label: 'Transport', icon: Truck },
  { id: 'soc', label: 'Social', icon: Users2 },
  { id: 'oth', label: 'Other', icon: MoreHorizontal },
];

export default function PostProblem() {
  const [selectedCategory, setSelectedCategory] = useState('env');

  return (
    <div className="bg-background min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Information Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="space-y-6">
             <div className="w-16 h-16 rounded-[24px] bg-primary-container/10 flex items-center justify-center text-primary-container shadow-sm border border-primary-container/20">
                <Sparkles size={32} />
             </div>
             <div className="space-y-3">
                <h1 className="text-4xl font-extrabold font-display leading-tight tracking-tight text-on-surface">Community Intelligence</h1>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                   Turn your challenge into a collective solution. describe your problem 
                   and let the neighborhood experts help you solve it.
                </p>
             </div>
          </div>

          <div className="space-y-8">
             <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white soft-shadow flex items-center justify-center text-on-surface-variant group-hover:text-primary-container transition-colors border border-outline-variant/30">
                   <EyeOff size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-on-surface">Stay Anonymous</h3>
                   <p className="text-sm text-on-surface-variant font-medium">You can choose to hide your identity from the public feed.</p>
                </div>
             </div>
             <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white soft-shadow flex items-center justify-center text-on-surface-variant group-hover:text-primary-container transition-colors border border-outline-variant/30">
                   <Shield size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-on-surface">Verified Support</h3>
                   <p className="text-sm text-on-surface-variant font-medium">Our verified experts will review and provide feedback on your post.</p>
                </div>
             </div>
          </div>
        </aside>

        {/* Form Area */}
        <div className="lg:col-span-8 bg-white rounded-[48px] soft-shadow border border-outline-variant/20 overflow-hidden">
           {/* Progress Bar */}
           <div className="flex justify-between p-8 md:px-12 border-b border-outline-variant/10">
              <div className="flex gap-2">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === 1 ? 'bg-primary-container w-6' : 'bg-surface-container-highest'}`}></div>
                 ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Step 1 of 4</div>
           </div>

           <div className="p-8 md:p-12 space-y-10">
              {/* Title Section */}
              <div className="space-y-4">
                 <h2 className="text-xl font-bold font-display">Catchy Title</h2>
                 <input 
                  type="text" 
                  placeholder="e.g. Broken playground equipment in Central Park" 
                  className="w-full bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface" 
                 />
              </div>

              {/* Summary Section */}
              <div className="space-y-4">
                 <h2 className="text-xl font-bold font-display">Summarize your problem</h2>
                 <input 
                  type="text" 
                  placeholder="One sentence that captures the essence..." 
                  className="w-full bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface" 
                 />
              </div>

              {/* Category Selection */}
              <div className="space-y-4">
                 <h2 className="text-xl font-bold font-display">Category</h2>
                 <div className="flex flex-wrap gap-4">
                    {CATEGORIES.map(cat => (
                       <button 
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex flex-col items-center gap-3 p-4 rounded-3xl transition-all border ${
                          selectedCategory === cat.id ? 'bg-primary-container text-on-primary border-primary-container soft-shadow scale-105' : 'bg-surface-container-low text-on-surface-variant border-transparent hover:bg-surface-container'
                        }`}
                       >
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-white'}`}>
                             <cat.icon size={24} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest">{cat.label}</span>
                       </button>
                    ))}
                 </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                 <h2 className="text-xl font-bold font-display">Detailed Description</h2>
                 <textarea 
                  rows={5} 
                  placeholder="Provide context, what you've tried, and what help you specifically need..." 
                  className="w-full bg-surface-container-low p-5 rounded-3xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface resize-none"
                 ></textarea>
              </div>

              {/* Media Upload */}
              <div className="space-y-4">
                 <h2 className="text-xl font-bold font-display">Add Visuals</h2>
                 <div className="border-2 border-dashed border-outline-variant/40 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 text-on-surface-variant hover:border-primary-container/50 cursor-pointer hover:bg-primary-container/5 transition-all text-center">
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary-container"><ImageIcon size={32} /></div>
                    <div className="space-y-1">
                       <div className="text-lg font-bold text-on-surface">Upload Images or Videos</div>
                       <div className="text-xs font-medium opacity-60">Help others visualize the problem better.</div>
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-primary-container border-b-2 border-primary-container/20 pb-1">Browse Files</div>
                 </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10">
                 <button className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">
                    Save Draft
                 </button>
                 <button className="btn-gradient text-on-primary px-10 py-4 rounded-2xl font-bold font-display text-base flex items-center gap-2 active:scale-95 transition-all shadow-xl shadow-primary-container/30">
                    Next Step <ChevronRight size={20} strokeWidth={2.5} />
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <footer className="max-w-7xl mx-auto mt-20 text-center text-on-surface-variant/40 font-display font-medium text-sm tracking-wide italic">
         "The best way to predict the future is to create it together."
      </footer>
    </div>
  );
}
