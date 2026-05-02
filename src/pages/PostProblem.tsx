import { motion } from 'motion/react';
import { Sparkles, Image as ImageIcon, Camera, Globe, ChevronRight, ChevronLeft, Shield, Users, EyeOff, TreePine, GraduationCap, Heart, Truck, Users2, MoreHorizontal, MapPin, AlertCircle } from 'lucide-react';
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
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('env');
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    location: '',
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

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
                   Step-by-step guidance to ensure your problem gets the visibility and expert feedback it deserves.
                </p>
             </div>
          </div>

          <div className="space-y-8">
             <div className="flex gap-4 group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${step >= 1 ? 'bg-primary-container text-on-primary border-primary-container' : 'bg-white text-on-surface-variant border-outline-variant/30'}`}>
                   <span className="font-bold">01</span>
                </div>
                <div>
                   <h3 className={`font-bold transition-all ${step === 1 ? 'text-primary-container' : 'text-on-surface'}`}>Define Problem</h3>
                   <p className="text-xs text-on-surface-variant font-medium">Core details and categorization.</p>
                </div>
             </div>
             <div className="flex gap-4 group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${step >= 2 ? 'bg-primary-container text-on-primary border-primary-container' : 'bg-white text-on-surface-variant border-outline-variant/30'}`}>
                   <span className="font-bold">02</span>
                </div>
                <div>
                   <h3 className={`font-bold transition-all ${step === 2 ? 'text-primary-container' : 'text-on-surface'}`}>Visualization</h3>
                   <p className="text-xs text-on-surface-variant font-medium">Photos, videos, and mapping.</p>
                </div>
             </div>
             <div className="flex gap-4 group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${step >= 3 ? 'bg-primary-container text-on-primary border-primary-container' : 'bg-white text-on-surface-variant border-outline-variant/30'}`}>
                   <span className="font-bold">03</span>
                </div>
                <div>
                   <h3 className={`font-bold transition-all ${step === 3 ? 'text-primary-container' : 'text-on-surface'}`}>Privacy & Logic</h3>
                   <p className="text-xs text-on-surface-variant font-medium">Anonymity and urgency levels.</p>
                </div>
             </div>
          </div>
        </aside>

        {/* Form Area */}
        <div className="lg:col-span-8 bg-white rounded-[48px] soft-shadow border border-outline-variant/20 overflow-hidden min-h-[700px] flex flex-col">
           {/* Progress Bar */}
           <div className="flex justify-between p-8 md:px-12 border-b border-outline-variant/10">
              <div className="flex gap-2">
                 {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === step ? 'bg-primary-container w-10' : i < step ? 'bg-primary-container' : 'bg-surface-container-highest'}`}></div>
                 ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Step {step} of 4</div>
           </div>

           <div className="p-8 md:p-12 flex-1 relative overflow-hidden">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-10"
              >
                 {step === 1 && (
                   <div className="space-y-8">
                     <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display">Give it a Title</h2>
                        <input 
                         type="text" 
                         value={formData.title}
                         onChange={(e) => setFormData({...formData, title: e.target.value})}
                         placeholder="e.g. Inaccessible sidewalk on Broadway" 
                         className="w-full bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface" 
                        />
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display">Category</h2>
                        <div className="flex flex-wrap gap-3">
                           {CATEGORIES.map(cat => (
                              <button 
                               key={cat.id}
                               onClick={() => setSelectedCategory(cat.id)}
                               className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all border ${
                                 selectedCategory === cat.id ? 'bg-primary-container text-on-primary border-primary-container soft-shadow' : 'bg-surface-container-low text-on-surface-variant border-transparent hover:bg-surface-container'
                               }`}
                              >
                                 <cat.icon size={20} />
                                 <span className="text-xs font-black uppercase tracking-widest">{cat.label}</span>
                              </button>
                           ))}
                        </div>
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display">Summary</h2>
                        <input 
                         type="text" 
                         value={formData.summary}
                         onChange={(e) => setFormData({...formData, summary: e.target.value})}
                         placeholder="A short punchy sentence about the core issue..." 
                         className="w-full bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface" 
                        />
                     </div>
                   </div>
                 )}

                 {step === 2 && (
                   <div className="space-y-8">
                     <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display">Visual Context</h2>
                        <div className="border-2 border-dashed border-outline-variant/40 rounded-[32px] p-16 flex flex-col items-center justify-center gap-4 text-on-surface-variant hover:border-primary-container/50 cursor-pointer hover:bg-primary-container/5 transition-all text-center">
                           <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-primary-container shadow-inner border border-white"><ImageIcon size={40} /></div>
                           <div className="space-y-1">
                              <div className="text-xl font-bold text-on-surface">Drag & Drop Evidence</div>
                              <div className="text-sm font-medium opacity-60">Photos or short videos help experts verify the claim.</div>
                           </div>
                           <div className="btn-gradient text-on-primary px-8 py-3 rounded-xl font-bold font-display text-xs shadow-lg mt-4">Browse Local Files</div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-xl font-bold font-display">Location</h2>
                        <div className="relative">
                           <MapPin className="absolute left-5 top-5 text-on-surface-variant" size={20} />
                           <input 
                              type="text" 
                              value={formData.location}
                              onChange={(e) => setFormData({...formData, location: e.target.value})}
                              placeholder="Where is this occurring?" 
                              className="w-full bg-surface-container-low p-5 pl-14 rounded-2xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface" 
                           />
                        </div>
                     </div>
                   </div>
                 )}

                 {step === 3 && (
                   <div className="space-y-8">
                     <h2 className="text-xl font-bold font-display">Privacy & Priority</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-[32px] bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4">
                           <div className="flex justify-between items-center">
                              <h3 className="font-bold text-on-surface">Urgency Level</h3>
                              <AlertCircle size={20} className="text-tertiary-container" />
                           </div>
                           <div className="flex p-1 bg-white rounded-xl border border-outline-variant/20">
                              {['Low', 'Medium', 'High'].map(u => (
                                <button key={u} className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${u === 'Medium' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
                                   {u}
                                </button>
                              ))}
                           </div>
                        </div>
                        <div className="p-6 rounded-[32px] bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4">
                           <div className="flex justify-between items-center">
                              <h3 className="font-bold text-on-surface">Posting As</h3>
                              <Users size={20} className="text-primary-container" />
                           </div>
                           <div className="flex p-1 bg-white rounded-xl border border-outline-variant/20">
                              <button className="flex-1 py-3 text-xs font-black uppercase tracking-widest bg-primary-container text-on-primary rounded-lg">Real Identity</button>
                              <button className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant border border-transparent">Anonymous</button>
                           </div>
                        </div>
                     </div>
                     <div className="p-8 bg-tertiary-container/5 rounded-3xl border border-tertiary-container/10 flex gap-6 items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-tertiary-container soft-shadow"><Shield size={28} /></div>
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold text-on-surface">Community Integrity Check</h4>
                           <p className="text-xs text-on-surface-variant font-medium">Your post will be reviewed by 3 verified community leaders before appearing on the public feed.</p>
                        </div>
                     </div>
                   </div>
                 )}
              </motion.div>
           </div>

           {/* Footer Buttons */}
           <div className="p-8 md:p-12 border-t border-outline-variant/10 flex justify-between items-center bg-surface-container-lowest">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 text-sm font-bold transition-all ${step === 1 ? 'opacity-0' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                 <ChevronLeft size={20} /> Previous
              </button>
              <div className="flex gap-4">
                 <button className="text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors px-6">
                    Save Draft
                 </button>
                 <button 
                   onClick={nextStep}
                   className="btn-gradient text-on-primary px-10 py-5 rounded-2xl font-bold font-display text-base flex items-center gap-2 active:scale-95 transition-all shadow-xl shadow-primary-container/30"
                 >
                    {step === 3 ? 'Review Post' : step === 4 ? 'Submit Problem' : 'Continue'} <ChevronRight size={20} strokeWidth={2.5} />
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <footer className="max-w-7xl mx-auto mt-20 text-center text-on-surface-variant/40 font-display font-medium text-sm tracking-wide italic leading-relaxed">
         "The best way to predict the future is to create it together, through collective action and community intelligence."
      </footer>
    </div>
  );
}
