import { motion } from 'motion/react';
import { Search, Filter, ArrowUpRight, MessageCircle, Heart, Tag, TrendingUp, Clock, Plus, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_PROBLEMS = [
  {
    id: 'large-1',
    title: 'Repairing a 1940s analog timepiece',
    description: 'The internal balance wheel is slightly skewed. Looking for someone with micro-mechanical experience or a local clocksmith who knows vintage Omega movements.',
    author: 'Julian Thorne',
    authorRole: 'Collector',
    tags: ['Tech', 'Life Hacks'],
    status: 'In Progress',
    reactions: 42,
    solutions: 8,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=2072&auto=format&fit=crop',
    featured: true
  },
  {
    id: '1',
    title: 'Solar panel cleaning robot',
    description: 'Designing a modular robot to clean dust from panels without water. Need mechanical feedback on the brush system.',
    author: 'Liam Green',
    authorRole: 'Engineer',
    status: 'Unsolved',
    tags: ['Garden', 'Tech'],
    reactions: 124,
    solutions: 12,
    image: 'https://images.unsplash.com/photo-1559302995-f09fb9067b5a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Community book exchange box',
    description: 'Building a weather-proof library for local park. Need advice on wood sealant that is safe for environment.',
    author: 'Dr. Anna Chen',
    authorRole: 'Architect',
    status: 'Solved',
    tags: ['Garden', 'DIY'],
    reactions: 342,
    solutions: 45,
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Feed() {
  return (
    <div className="bg-background min-h-screen py-12 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar / Filters */}
        <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-8">
          <div className="glass p-8 rounded-[32px] border border-outline-variant/30 flex flex-col gap-6 soft-shadow">
             <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Categories</h3>
                <div className="flex flex-col gap-1">
                   {['Home', 'Tech', 'Life Hacks', 'Garden'].map((cat, i) => (
                      <button key={cat} className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'bg-primary-container/10 text-primary-container' : 'text-on-surface-variant hover:bg-surface-container'}`}>
                         {cat}
                         <span className="text-[10px] bg-surface-container-high px-2 py-0.5 rounded-md text-on-surface-variant">12</span>
                      </button>
                   ))}
                </div>
             </div>
             
             <div className="pt-6 border-t border-outline-variant/10">
                <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Status</h3>
                <div className="flex flex-col gap-1">
                   {['Unsolved', 'In Progress', 'Solved'].map((status) => (
                      <label key={status} className="flex items-center gap-3 p-3 cursor-pointer group">
                         <div className="w-5 h-5 rounded-md border-2 border-outline-variant group-hover:border-primary-container transition-all flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-sm bg-primary-container scale-0 group-hover:scale-100 transition-transform"></div>
                         </div>
                         <span className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">{status}</span>
                      </label>
                   ))}
                </div>
             </div>
          </div>
        </aside>

        {/* Main Feed */}
        <div className="flex-1 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="flex-1 flex items-center gap-4 bg-white px-6 py-1 rounded-2xl soft-shadow border border-outline-variant/30 w-full">
                <Search className="text-on-surface-variant" size={20} />
                <input 
                  type="text" 
                  placeholder="Search problems, keywords, or contributors..." 
                  className="flex-1 bg-transparent py-4 focus:outline-none text-sm font-bold text-on-surface"
                />
             </div>
             <button className="flex items-center gap-2 px-6 py-4 bg-surface-container rounded-2xl text-sm font-bold border border-outline-variant/30 text-on-surface-variant shrink-0 w-full md:w-auto justify-center">
                Sort by: Trending <ChevronDown size={18} />
             </button>
          </div>

          {/* Featured Large Card */}
          {MOCK_PROBLEMS.filter(p => p.featured).map(problem => (
            <motion.div 
               key={problem.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[40px] overflow-hidden soft-shadow border border-outline-variant/20 flex flex-col md:flex-row group"
            >
               <div className="w-full md:w-[380px] h-80 md:h-auto shrink-0 relative overflow-hidden">
                  <img src={problem.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute top-6 left-6 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-md text-primary-container px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {problem.status}
                     </span>
                  </div>
               </div>
               <div className="p-8 md:p-12 flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                     <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                           {problem.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/10">
                                {tag}
                             </span>
                           ))}
                        </div>
                        <ArrowUpRight className="text-outline group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                     </div>
                     <h2 className="text-3xl font-black font-display text-on-surface leading-tight tracking-tighter">
                        {problem.title}
                     </h2>
                     <p className="text-on-surface-variant leading-relaxed font-medium">
                        {problem.description}
                     </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <div>
                           <div className="text-sm font-bold text-on-surface">{problem.author}</div>
                           <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{problem.authorRole}</div>
                        </div>
                     </div>
                     <div className="flex gap-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Heart size={16} className="text-tertiary-container" fill="currentColor" /> {problem.reactions}</span>
                        <span className="flex items-center gap-2 text-primary-container"><MessageCircle size={16} fill="currentColor" /> {problem.solutions} SOLUTIONS</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_PROBLEMS.filter(p => !p.featured).map((problem) => (
              <motion.div 
                key={problem.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[32px] overflow-hidden soft-shadow border border-outline-variant/20 flex flex-col group cursor-pointer"
              >
                <Link to={`/problem/${problem.id}`} className="block flex-1 flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <img src={problem.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl glass border border-white/20 ${problem.status === 'Solved' ? 'text-secondary-container' : 'text-primary-container'}`}>
                        {problem.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col gap-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold font-display leading-tight tracking-tight flex-1">{problem.title}</h3>
                      <ArrowUpRight className="text-outline group-hover:text-primary-container transition-colors" />
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-medium line-clamp-2">
                      {problem.description}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 ring-2 ring-surface-container"></div>
                        <span className="text-xs font-bold text-on-surface-variant">{problem.author}</span>
                      </div>
                      <div className="flex gap-4 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Heart size={14} className="text-tertiary-container" fill="currentColor" /> {problem.reactions}</span>
                        <span className="flex items-center gap-1.5 text-primary-container"><MessageCircle size={14} fill="currentColor" /> {problem.solutions}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <Link 
        to="/post"
        className="fixed bottom-10 right-10 w-20 h-20 rounded-[28px] bg-primary-container text-on-primary flex items-center justify-center soft-shadow btn-gradient hover:scale-110 transition-transform active:scale-95 shadow-2xl shadow-primary-container/40 z-50 group overflow-hidden"
      >
         <Plus size={32} strokeWidth={3} className="relative z-10 transition-transform group-hover:rotate-90" />
         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
    </div>
  );
}
