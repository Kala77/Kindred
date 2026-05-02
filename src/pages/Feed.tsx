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
                <div className="w-10 h-1 hidden md:block bg-primary-container rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-container">Community Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black font-display text-on-surface tracking-tighter leading-[0.9]">
                The <span className="text-primary-container underline decoration-primary-container/20 underline-offset-8">Commons</span> Feed
              </h1>
            </div>
            <div className="flex flex-wrap gap-4">
               <div className="bg-white/50 backdrop-blur-sm border border-outline-variant/20 px-6 py-3 rounded-2xl flex flex-col gap-1 soft-shadow">
                  <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40">Network Health</span>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-sm font-black text-on-surface">98.4% Uptime</span>
                  </div>
               </div>
               <div className="bg-white/50 backdrop-blur-sm border border-outline-variant/20 px-6 py-3 rounded-2xl flex flex-col gap-1 soft-shadow">
                  <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40">Active Solvers</span>
                  <span className="text-sm font-black text-on-surface">1,248 Nodes</span>
               </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
            <div className="flex flex-col lg:flex-row items-center gap-4 p-2 bg-white rounded-[32px] soft-shadow border border-outline-variant/20 group-focus-within:border-primary-container/30 transition-all">
              <div className="flex-1 flex items-center gap-6 px-6 py-4">
                <Search className="text-on-surface-variant group-focus-within:text-primary-container transition-colors" size={24} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query current challenges, keywords, or collective intelligence..." 
                  className="flex-1 bg-transparent focus:outline-none text-base font-bold text-on-surface placeholder:text-on-surface-variant/30"
                />
              </div>
              <div className="h-10 w-px bg-outline-variant/10 hidden lg:block" />
              <div className="flex items-center gap-2 px-6">
                 <MapPin size={20} className="text-on-surface-variant" />
                 <select className="bg-transparent text-sm font-bold text-on-surface focus:outline-none cursor-pointer">
                    <option>All Regions</option>
                    <option>Within 15km</option>
                    <option>San Francisco</option>
                    <option>Oakland</option>
                 </select>
              </div>
              <button className="bg-black text-white px-10 py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/10">
                 Search Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 px-6 pb-24">
        
        {/* Sidebar / Control Panel */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-12 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar pb-10 will-change-transform">
          
          {/* Mode Navigation */}
          <div className="flex flex-col gap-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 px-4">Navigation Mode</h3>
             <div className="flex flex-col p-2 bg-white rounded-[28px] soft-shadow border border-outline-variant/20">
                <button 
                  onClick={() => setView('feed')}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                    view === 'feed' ? 'bg-primary-container text-on-primary shadow-lg' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                   <TrendingUp size={20} strokeWidth={view === 'feed' ? 3 : 2} />
                   <span className="text-sm font-bold uppercase tracking-widest">Global Feed</span>
                </button>
                <button 
                  onClick={() => setView('radar')}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                    view === 'radar' ? 'bg-primary-container text-on-primary shadow-lg' : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                   <MapPin size={20} strokeWidth={view === 'radar' ? 3 : 2} />
                   <span className="text-sm font-bold uppercase tracking-widest">Hyper-Local</span>
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
                            { name: 'Micro-Mechanics', percentage: 74, color: 'bg-indigo-500' },
                            { name: 'Community Infra', percentage: 89, color: 'bg-emerald-500' },
                            { name: 'Renewable Power', percentage: 42, color: 'bg-amber-500' },
                            { name: 'Civic Systems', percentage: 91, color: 'bg-rose-500' },
                          ].map((domain) => (
                             <div key={domain.name} className="space-y-2">
                                <div className="flex justify-between items-center text-xs font-bold text-on-surface-variant">
                                   <span>{domain.name}</span>
                                   <span className="text-[10px] font-black opacity-40">{domain.percentage}%</span>
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
          
          <div className="relative group p-10 bg-[#0B1C30] rounded-[48px] shadow-2xl overflow-hidden cursor-pointer">
              <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[18px] bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-container border border-white/5">
                       {account ? <Wallet size={24} /> : <CheckCircle2 size={24} />}
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-base leading-tight">
                          {account ? 'Identity Synced' : 'Trust Network'}
                       </h4>
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">
                          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Verified Access'}
                       </span>
                    </div>
                 </div>
                 <p className="text-white/60 text-xs font-medium leading-relaxed mb-8">
                    {account 
                      ? 'Your professional credentials and civic rating are now synced with your secure identity.' 
                      : 'Elevate your status by verifying your professional expertise or local civic standing.'}
                 </p>
                 
                 {error && (
                    <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-2">
                       <AlertCircle size={14} className="text-rose-400" />
                       <span className="text-[10px] font-bold text-rose-300">{error}</span>
                    </div>
                 )}

                 <button 
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className={`w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                 >
                    {isConnecting ? 'Authorizing...' : account ? 'Update Identity' : 'Verify Identity'}
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/20 rounded-full blur-[64px] -mr-24 -mt-24 group-hover:bg-primary-container/30 transition-colors"></div>
          </div>
        </aside>

        {/* Main Feed Content Area */}
        <div className="flex-1 flex flex-col gap-16">
          
          {/* Featured Problem Hero */}
          {MOCK_PROBLEMS.filter(p => p.featured).map((problem) => (
            <motion.div 
              key={problem.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative bg-white rounded-[64px] soft-shadow border border-outline-variant/20 overflow-hidden cursor-pointer hover:border-primary-container/40 transition-all duration-700 p-3"
              onClick={() => navigate(`/problem/${problem.id}`)}
            >
              <div className="flex flex-col xl:flex-row rounded-[56px] overflow-hidden bg-[#F8F9FA]/50 border border-outline-variant/10">
                 <div className="xl:w-[480px] relative overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform duration-[1.5s]">
                    <img src={problem.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C30]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 text-white space-y-2">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Primary Location</span>
                       <div className="text-xl font-bold font-display tracking-tight flex items-center gap-3">
                          <MapPin size={24} className="text-primary-container" />
                          {problem.location}
                       </div>
                    </div>
                 </div>
                 <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center gap-12">
                    <div className="space-y-8">
                       <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                             <TrendingUp size={12} strokeWidth={4} />
                             Priority Intelligence
                          </div>
                          {problem.tags.map(tag => (
                            <span key={tag} className="px-5 py-2 bg-white text-on-surface-variant text-[10px] font-black uppercase tracking-widest rounded-full border border-outline-variant/20 shadow-sm">{tag}</span>
                          ))}
                       </div>
                       <h2 className="text-5xl lg:text-7xl font-black font-display leading-[0.9] tracking-tighter text-on-surface group-hover:text-primary-container transition-colors duration-500">
                          {problem.title}
                       </h2>
                       <p className="text-xl text-on-surface-variant font-medium leading-relaxed opacity-60 line-clamp-3 max-w-2xl">
                          {problem.description}
                       </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-16">
                       <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl border-4 border-white shadow-xl overflow-hidden ring-1 ring-outline-variant/10">
                             <img src={`https://i.pravatar.cc/100?u=${problem.author}`} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div>
                             <div className="text-base font-bold text-on-surface tracking-tight">{problem.author}</div>
                             <div className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] leading-none mt-1">Source Agent</div>
                          </div>
                       </div>
                       <div className="flex gap-12">
                          <div className="flex flex-col gap-1">
                             <span className="text-2xl font-black text-on-surface tracking-tighter">{problem.solutions}</span>
                             <span className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em]">Collective Responses</span>
                          </div>
                          <div className="flex flex-col gap-1">
                             <span className="text-2xl font-black text-on-surface tracking-tighter">{problem.reactions}</span>
                             <span className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em]">Interest Signals</span>
                          </div>
                       </div>
                    </div>

                    <button className="w-fit btn-gradient text-on-primary px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 shadow-2xl shadow-primary-container/40 hover:scale-[1.05] transition-transform active:scale-[0.95]">
                       Analyze Data <ArrowUpRight size={24} strokeWidth={3} />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}

          {/* Section Divider */}
          <div className="flex items-center gap-6 px-4">
             <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/30 shrink-0">Open Collective Signal</h3>
             <div className="flex-1 h-px bg-outline-variant/10" />
             <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded-lg bg-white border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary-container transition-all">
                   <ChevronDown size={18} />
                </button>
             </div>
          </div>

          {/* Problem Feed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MOCK_PROBLEMS.filter(p => !p.featured).map((problem, idx) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => navigate(`/problem/${problem.id}`)}
                className="group bg-white rounded-[48px] overflow-hidden soft-shadow border border-outline-variant/20 flex flex-col cursor-pointer hover:border-primary-container/30 transition-all duration-700 p-4"
              >
                <div className="h-72 relative rounded-[36px] overflow-hidden">
                   <img src={problem.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="bg-black/40 backdrop-blur-md text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/20 shadow-xl">
                         {problem.status}
                      </span>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-on-surface border border-white">
                         <MapPin size={14} className="text-primary-container" /> {problem.location}
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white text-on-surface flex items-center justify-center shadow-2xl">
                         <ArrowUpRight size={20} />
                      </div>
                   </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col gap-10">
                   <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         <div className="w-6 h-1 bg-primary-container rounded-full" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container">{problem.tags[0]}</span>
                      </div>
                      <h3 className="text-3xl font-black font-display leading-[1.1] tracking-tighter text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">
                         {problem.title}
                      </h3>
                      <p className="text-on-surface-variant font-medium leading-relaxed line-clamp-2 opacity-50 pb-2">
                         {problem.description}
                      </p>
                   </div>

                   <div className="mt-auto pt-10 border-t border-outline-variant/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden shadow-lg ring-1 ring-outline-variant/10">
                            <img src={`https://i.pravatar.cc/100?u=${problem.author}`} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-on-surface tracking-tight">{problem.author}</div>
                            <div className="text-[9px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] leading-none mt-1">Contributor</div>
                         </div>
                      </div>
                      <div className="flex gap-8">
                         <div className="flex flex-col items-end gap-1">
                            <span className="text-base font-black text-on-surface leading-none">{problem.solutions}</span>
                            <span className="text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest">Solutions</span>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                            <span className="text-base font-black text-on-surface leading-none">{problem.reactions}</span>
                            <span className="text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest">Signals</span>
                         </div>
                      </div>
                   </div>
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

