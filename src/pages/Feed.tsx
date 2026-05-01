import { motion } from 'motion/react';
import { Search, Filter, ArrowUpRight, MessageCircle, Heart, Tag, TrendingUp, Clock, Plus, ChevronDown, CheckCircle2, Bookmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MOCK_PROBLEMS = [
  {
    id: 'large-1',
    title: 'Repairing a 1940s analog timepiece',
    description: 'The internal balance wheel is slightly skewed. Looking for someone with micro-mechanical experience or a local clocksmith who knows vintage Omega movements.',
    author: 'Julian Thorne',
    authorRole: 'Collector',
    tags: ['Micro-Mechanics', 'Preservation'],
    status: 'In Progress',
    reactions: 42,
    solutions: 8,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=2072&auto=format&fit=crop',
    featured: true,
    urgency: 'Medium',
    location: 'Mission District'
  },
  {
    id: '1',
    title: 'Solar panel cleaning robot',
    description: 'Designing a modular robot to clean dust from panels without water. Need mechanical feedback on the brush system.',
    author: 'Liam Green',
    authorRole: 'Engineer',
    status: 'Unsolved',
    tags: ['Robotics', 'Energy'],
    reactions: 124,
    solutions: 12,
    image: 'https://images.unsplash.com/photo-1559302995-f09fb9067b5a?q=80&w=2070&auto=format&fit=crop',
    location: 'Palo Alto'
  },
  {
    id: '2',
    title: 'Community book exchange box',
    description: 'Building a weather-proof library for local park. Need advice on wood sealant that is safe for environment.',
    author: 'Dr. Anna Chen',
    authorRole: 'Architect',
    status: 'Solved',
    tags: ['Community', 'DIY'],
    reactions: 342,
    solutions: 45,
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=1974&auto=format&fit=crop',
    location: 'Oakland'
  },
];

export default function Feed() {
  return (
    <div className="bg-surface-container-lowest min-h-screen py-12 px-6 relative dot-pattern">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar / Filters */}
        <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-8 sticky top-24 h-fit">
          <div className="glass p-8 rounded-[32px] border border-outline-variant/30 flex flex-col gap-6 soft-shadow">
             <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-on-surface">Filters</h3>
                <button className="text-[10px] font-black uppercase tracking-widest text-primary-container hover:underline">Reset</button>
             </div>
             
             <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Categories</h3>
                <div className="flex flex-col gap-1">
                   {[
                     { name: 'Hardware', count: 24, icon: Tag },
                     { name: 'Sustainability', count: 18, icon: Tag },
                     { name: 'Infrastructure', count: 12, icon: Tag },
                     { name: 'Civic Duty', count: 42, icon: Tag },
                   ].map((cat) => (
                      <button key={cat.name} className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all hover:bg-surface-container text-on-surface-variant`}>
                         <div className="flex items-center gap-3">
                            <cat.icon size={16} />
                            {cat.name}
                         </div>
                         <span className="text-[10px] bg-white px-2 py-0.5 rounded-md text-on-surface-variant border border-outline-variant/10 shadow-sm">{cat.count}</span>
                      </button>
                   ))}
                </div>
             </div>
             
             <div className="pt-6 border-t border-outline-variant/10">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">Radius (km)</h3>
                <div className="px-2">
                   <div className="w-full h-1 bg-surface-container rounded-full relative mb-4">
                      <div className="absolute left-0 top-0 h-full bg-primary-container w-2/3 rounded-full"></div>
                      <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary-container rounded-full shadow-lg"></div>
                   </div>
                   <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                      <span>0.5</span>
                      <span className="text-primary-container">15.0</span>
                      <span>50+</span>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="p-8 bg-tertiary-container/5 rounded-[32px] border border-tertiary-container/10 flex flex-col gap-4">
              <h4 className="font-bold text-on-surface text-sm">Join the Pro Council</h4>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                 Top contributors get invited to the governance board.
              </p>
              <button className="text-xs font-black uppercase tracking-widest text-primary-container bg-white py-2 rounded-xl border border-primary-container/10">
                 Learn More
              </button>
          </div>
        </aside>

        {/* Main Feed */}
        <div className="flex-1 flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="flex-1 flex items-center gap-4 bg-white px-6 py-1 rounded-2xl soft-shadow border border-outline-variant/30 w-full group focus-within:border-primary-container/50 transition-all">
                <Search className="text-on-surface-variant group-focus-within:text-primary-container transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search problems, keywords, or contributors..." 
                  className="flex-1 bg-transparent py-4 focus:outline-none text-sm font-bold text-on-surface"
                />
             </div>
             <button className="flex items-center gap-2 px-6 py-4 bg-white rounded-2xl text-sm font-bold border border-outline-variant/30 text-on-surface-variant shrink-0 w-full md:w-auto justify-center soft-shadow">
                Sort by: Trending <ChevronDown size={18} />
             </button>
          </div>

          {/* Featured Large Card */}
          {MOCK_PROBLEMS.filter(p => p.featured).map(problem => (
            <motion.div 
               key={problem.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[40px] overflow-hidden soft-shadow border border-outline-variant/20 flex flex-col md:flex-row group relative"
            >
               <div className="w-full md:w-[380px] h-80 md:h-auto shrink-0 relative overflow-hidden">
                  <img src={problem.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                  <div className="absolute top-6 left-6 flex gap-2">
                     <span className="bg-white/90 backdrop-blur-md text-primary-container px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg border border-primary-container/20">
                        {problem.status}
                     </span>
                  </div>
               </div>
               <div className="p-8 md:p-12 flex-1 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                     <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                           <span className="text-[10px] font-black uppercase tracking-widest text-white bg-tertiary-container px-3 py-1 rounded-lg">Featured</span>
                           {problem.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/10">
                                {tag}
                             </span>
                           ))}
                        </div>
                        <div className="flex gap-2">
                           <button className="p-2 text-on-surface-variant hover:text-primary-container transition-colors"><Bookmark size={20} /></button>
                           <ArrowUpRight className="text-outline group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                        </div>
                     </div>
                     <h2 className="text-3xl font-black font-display text-on-surface leading-tight tracking-tighter">
                        {problem.title}
                     </h2>
                     <p className="text-on-surface-variant leading-relaxed font-medium">
                        {problem.description}
                     </p>
                     <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-primary-container" /> {problem.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {problem.urgency} Priority</span>
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-surface-container overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${problem.author}`} className="w-full h-full object-cover" alt="" />
                        </div>
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
            {MOCK_PROBLEMS.filter(p => !p.featured).map((problem, idx) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
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
                    <div className="absolute bottom-4 left-4">
                       <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                          <MapPin size={10} /> {problem.location}
                       </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col gap-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold font-display leading-tight tracking-tight flex-1">{problem.title}</h3>
                      <ArrowUpRight className="text-outline group-hover:text-primary-container transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-medium line-clamp-2">
                      {problem.description}
                    </p>
                    <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border-2 border-surface-container overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?u=${problem.author}`} className="w-full h-full object-cover" alt="" />
                        </div>
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

