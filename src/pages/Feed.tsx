import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowUpRight, MessageCircle, Heart, Tag, TrendingUp, Clock, Plus, ChevronDown, CheckCircle2, Bookmark, MapPin, Wallet, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [view, setView] = useState<'feed' | 'radar'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed. Please install it to continue.');
      }
      
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        throw new Error('No accounts found. Please unlock MetaMask.');
      }
    } catch (err: any) {
      console.error('Wallet connection error:', err);
      if (err.code === 4001) {
        setError('Connection rejected. Please try again.');
      } else {
        setError('Failed to connect to MetaMask. Please ensure it is unlocked and try again.');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      };
      
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Cleanup is usually harder with window.ethereum as it doesn't always 
      // support removeListener the same way, but it's good practice.
      return () => {
        if (window.ethereum?.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen relative dot-pattern selection:bg-primary-container/20">
      {/* Top Banner / Header Context */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-on-surface-variant">Community Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black font-display text-on-surface tracking-tighter leading-[0.9]">
                The Commons Feed
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
             <div className="flex-1 flex flex-col lg:flex-row items-center gap-4 p-2 bg-white rounded-2xl soft-shadow border border-outline-variant/20 group-focus-within:border-primary-container/30 transition-all w-full lg:w-auto">
               <div className="flex-1 flex items-center gap-4 px-4 py-2 w-full">
                 <Search className="text-on-surface-variant" size={20} />
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search problems..." 
                   className="flex-1 bg-transparent focus:outline-none text-base font-bold text-on-surface placeholder:text-on-surface-variant/50 w-full"
                 />
               </div>
               <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm w-full lg:w-auto hover:bg-primary-container transition-colors">
                  Search
               </button>
             </div>
             
             <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar py-2">
                <button className="shrink-0 px-6 py-2.5 rounded-full border-2 border-primary-container text-primary-container font-bold text-sm bg-primary-container/5">
                   Unsolved
                </button>
                <button className="shrink-0 px-6 py-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant font-bold text-sm bg-white hover:bg-surface-container-low transition-colors">
                   In Progress
                </button>
                <button className="shrink-0 px-6 py-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant font-bold text-sm bg-white hover:bg-surface-container-low transition-colors">
                   Solved
                </button>
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 px-6 pb-24">
        
        {/* Sidebar / Control Panel */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-8 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pb-10 will-change-transform">
          
          {/* Hero Banner */}
          <div className="bg-on-surface text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-48 shadow-lg">
             <div className="relative z-10 w-3/4">
                <h3 className="text-2xl font-bold font-display leading-tight">Be the hero someone needs today.</h3>
             </div>
             <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2" />
             </div>
          </div>

          {/* Mode Navigation */}
          <div className="flex flex-col gap-4">
             <h3 className="text-sm font-bold text-on-surface-variant">Navigation Mode</h3>
             <div className="flex flex-col p-1.5 bg-white rounded-2xl soft-shadow border border-outline-variant/20">
                <button 
                  onClick={() => setView('feed')}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    view === 'feed' ? 'bg-primary-container/10 text-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-low font-medium'
                  }`}
                >
                   <TrendingUp size={18} strokeWidth={view === 'feed' ? 3 : 2} />
                   <span className="text-sm">Global Feed</span>
                </button>
                <button 
                  onClick={() => setView('radar')}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    view === 'radar' ? 'bg-primary-container/10 text-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-low font-medium'
                  }`}
                >
                   <MapPin size={18} strokeWidth={view === 'radar' ? 3 : 2} />
                   <span className="text-sm">Hyper-Local</span>
                </button>
             </div>
          </div>

          <div className="glass p-10 rounded-[48px] border border-outline-variant/30 flex flex-col gap-10 soft-shadow bg-white/40">
             <AnimatePresence mode="wait">
               {view === 'radar' ? (
                 <motion.div
                   key="radar-controls"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-8"
                 >
                    <div>
                       <div className="flex items-center justify-between mb-6">
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Discovery Radius</h3>
                          <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-black">15.0 KM</span>
                       </div>
                       <div className="relative pt-6 pb-2 px-1">
                          <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                             <div className="h-full bg-primary-container w-[65%] rounded-full shadow-[0_0_12px_rgba(var(--primary-container-rgb),0.3)]"></div>
                          </div>
                          <div className="absolute left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-primary-container rounded-full shadow-xl cursor-pointer hover:scale-125 transition-transform" />
                       </div>
                       <div className="flex justify-between mt-4 text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40">
                          <span>0.5km</span>
                          <span>15km</span>
                          <span>50km+</span>
                       </div>
                    </div>
                    <div className="pt-8 border-t border-outline-variant/10">
                       <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-6">Local Activity</h3>
                       <div className="space-y-4">
                          <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 flex items-center justify-between">
                             <span className="text-xs font-bold text-emerald-700">Live signals</span>
                             <span className="text-[10px] font-black bg-white px-2 py-1 rounded-lg text-emerald-600">High</span>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               ) : (
                 <motion.div
                   key="feed-controls"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-10"
                 >
                    <div>
                       <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-8">Intelligence Domains</h3>
                       <div className="flex flex-col gap-3">
                           {[
                            { name: 'Micro-Mechanics', percentage: 74, color: 'bg-primary' },
                            { name: 'Community Infra', percentage: 89, color: 'bg-primary' },
                            { name: 'Renewable Power', percentage: 42, color: 'bg-primary' },
                            { name: 'Civic Systems', percentage: 91, color: 'bg-primary' },
                          ].map((domain) => (
                             <div key={domain.name} className="space-y-2">
                                <div className="flex justify-between items-center text-sm font-medium text-on-surface">
                                   <span>{domain.name}</span>
                                   <span className="text-xs font-bold text-on-surface-variant">{domain.percentage}%</span>
                                </div>
                                <div className="h-1 bg-surface-container rounded-full overflow-hidden">
                                   <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: `${domain.percentage}%` }}
                                      className={`h-full ${domain.color}`}
                                   />
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="pt-8 border-t border-outline-variant/10">
                       <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-6">Expert Council</h3>
                       <div className="flex -space-x-3">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-10 h-10 rounded-xl border-4 border-white overflow-hidden bg-surface-container hover:z-10 transition-transform hover:-translate-y-1 cursor-pointer">
                               <img src={`https://i.pravatar.cc/100?u=expert${i}`} alt="" />
                            </div>
                          ))}
                       </div>
                       <p className="text-[10px] font-bold text-on-surface-variant/40 mt-4 uppercase tracking-widest">
                          +42 Registered Experts
                       </p>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
          
        </aside>

        {/* Main Feed Content Area */}
        <div className="flex-1 flex flex-col gap-16">
          
          {/* Problem Feed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_PROBLEMS.map((problem, idx) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => navigate(`/problem/${problem.id}`)}
                className="group bg-white rounded-3xl overflow-hidden soft-shadow border border-outline-variant/20 flex flex-col cursor-pointer hover:border-primary-container/40 transition-all duration-300"
              >
                <div className="h-64 relative overflow-hidden">
                   <img src={problem.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                   <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded bg-opacity-90 text-[10px] font-black uppercase tracking-widest shadow-sm">
                         EXPERT NEEDED
                      </span>
                   </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col gap-5">
                   <div className="flex gap-2">
                      <span className="px-3 py-1 bg-surface-container-low border border-outline-variant/20 text-on-surface-variant rounded-full text-[10px] font-bold">
                         {problem.tags[0] || 'General'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${problem.status === 'Unsolved' ? 'bg-primary-container/10 text-primary-container' : problem.status === 'In Progress' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container text-on-surface-variant'}`}>
                         {problem.status}
                      </span>
                   </div>
                   
                   <div className="space-y-2">
                      <h3 className="text-xl font-bold font-display leading-tight text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                         {problem.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant font-medium leading-relaxed line-clamp-2">
                         {problem.description}
                      </p>
                   </div>

                   <div className="mt-auto pt-5 border-t border-outline-variant/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container">
                            <img src={`https://i.pravatar.cc/100?u=${problem.author}`} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="text-sm font-bold text-on-surface">{problem.author}</div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-1.5 text-on-surface-variant">
                            <MessageCircle size={16} />
                            <span className="text-sm font-bold">{problem.solutions}</span>
                         </div>
                         <div className="flex items-center gap-1.5 text-on-surface-variant">
                            <TrendingUp size={16} />
                            <span className="text-sm font-bold">{problem.reactions}</span>
                         </div>
                      </div>
                   </div>

                   <button className="w-full py-3 mt-1 bg-surface-container-low hover:bg-primary-container hover:text-white text-primary-container rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                      Help Now <ArrowUpRight size={16} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/post')}
        className="fixed bottom-10 right-10 w-24 h-24 rounded-[40px] bg-black text-white flex flex-col items-center justify-center soft-shadow z-50 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all overflow-hidden border border-white/10"
      >
         <div className="absolute inset-0 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         <Plus size={32} strokeWidth={3} className="relative z-10" />
         <span className="text-[8px] font-black uppercase tracking-[0.2em] mt-1 relative z-10">Post Signal</span>
      </motion.button>
    </div>
  );
}

