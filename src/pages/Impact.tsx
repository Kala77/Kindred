import { motion } from 'motion/react';
import { Target, TrendingUp, Users, Globe, Clock, CheckCircle2, FileText, ChevronDown, AlertCircle } from 'lucide-react';

export default function Impact() {
  const stats = [
    { 
      label: 'ACTIVE SOLUTIONS', 
      value: '1,284', 
      change: '+12% from last month',
      description: 'Total Problems Solved',
      icon: CheckCircle2, 
      color: 'text-primary-container',
      bg: 'bg-primary-container/10',
      large: true 
    },
    { 
      label: 'Contributors', 
      value: '8.4k', 
      progress: 75,
      description: '75% of target goal',
      icon: Users, 
      color: 'text-tertiary-container',
      bg: 'bg-tertiary-container/10'
    },
    { 
      label: 'Hours Volunteered', 
      value: '12,650', 
      description: 'Top 5% among communities',
      icon: Clock, 
      color: 'text-secondary-container',
      bg: 'bg-secondary-container/10'
    },
  ];

  const recentWins = [
    { title: 'Community Garden Bloom', user: '@green_thumb', time: '2h ago' },
    { title: 'New Bike Lane Advocacy', user: '@cycle_path', time: '5h ago' },
    { title: 'Local Library Revamp', user: '@book_worm', time: '1d ago' },
  ];

  return (
    <div className="bg-background min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
          <div className="space-y-2">
             <h1 className="text-4xl font-extrabold font-display tracking-tight text-on-surface">Community Impact</h1>
             <p className="text-on-surface-variant font-medium">Transparency in our collective progress across the globe.</p>
          </div>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-xl text-sm font-bold border border-outline-variant/30">
                Last 30 Days <ChevronDown size={16} />
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm font-bold border border-outline-variant/30 soft-shadow">
                <FileText size={16} /> Export Data
             </button>
          </div>
        </header>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Large Main Stat */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-white rounded-[32px] p-8 soft-shadow border border-outline-variant/20 relative overflow-hidden flex flex-col justify-between min-h-[240px]"
           >
              <div className="space-y-1 relative z-10">
                 <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-on-surface-variant">
                    {stats[0].label}
                 </div>
                 <div className="text-6xl font-black font-display text-on-surface tracking-tighter">{stats[0].value}</div>
                 <div className="text-sm font-bold text-secondary">{stats[0].change}</div>
              </div>
              <div className="text-sm text-on-surface-variant font-medium relative z-10">{stats[0].description}</div>
              
              {/* Background Decoration */}
              <CheckCircle2 className="absolute -right-8 -bottom-8 text-primary-container/5" size={240} strokeWidth={1} />
           </motion.div>

           <div className="flex flex-col gap-6">
              {stats.slice(1).map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[32px] p-6 soft-shadow border border-outline-variant/20 flex flex-col gap-4"
                >
                   <div className="flex justify-between items-start">
                      <div className="p-3 rounded-2xl bg-surface-container">
                         <stat.icon className={stat.color} size={24} />
                      </div>
                      <div className="text-sm font-black text-on-surface-variant">{stat.label}</div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-black font-display tracking-tight leading-none">{stat.value}</div>
                      {stat.progress && (
                        <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                           <div className="h-full bg-tertiary-container" style={{ width: `${stat.progress}%` }}></div>
                        </div>
                      )}
                      <div className="text-xs font-medium text-on-surface-variant">{stat.description}</div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Charts & Activity Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-white rounded-[32px] p-8 soft-shadow border border-outline-variant/20">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="text-xl font-bold font-display">Success Rate over time</h3>
                 <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-container"></div> Completed</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-container/30"></div> Initiated</span>
                 </div>
              </div>
              
              {/* Dummy Chart Visualization */}
              <div className="flex items-end justify-between h-48 gap-4 px-4 overflow-hidden">
                 {[40, 65, 45, 80, 55, 90].map((h, i) => (
                   <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                      <div className="w-full bg-primary-container/20 rounded-t-lg transition-all group-hover:bg-primary-container/40" style={{ height: `${h}%` }}></div>
                      <div className="w-full bg-primary-container rounded-t-lg transition-all" style={{ height: `${h * 0.7}%` }}></div>
                   </div>
                 ))}
              </div>
              <div className="flex justify-between mt-4 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                 {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => <span key={m}>{m}</span>)}
              </div>

              <div className="mt-8 p-4 bg-primary-container/5 border border-primary-container/10 rounded-2xl flex items-center gap-3">
                 <AlertCircle className="text-primary-container" size={20} />
                 <p className="text-sm font-medium text-on-surface-variant">
                    <span className="font-bold text-on-surface">May saw a 24% increase</span> in community involvement. Great job!
                 </p>
              </div>
           </div>

           <div className="bg-white rounded-[32px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6">
              <h3 className="text-xl font-bold font-display">Recent Wins</h3>
              <div className="flex flex-col gap-4">
                 {recentWins.map((win, i) => (
                   <div key={win.title} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/10">
                      <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                      <div className="flex-1 min-w-0">
                         <div className="text-sm font-bold text-on-surface truncate">{win.title}</div>
                         <div className="text-[10px] font-medium text-on-surface-variant">{win.user}</div>
                      </div>
                      <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{win.time}</div>
                   </div>
                 ))}
              </div>
              <button className="mt-auto w-full py-4 border-2 border-outline-variant/30 rounded-2xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-low transition-colors">
                 See All Wins
              </button>
           </div>
        </div>

        {/* Global Reach Row */}
        <div className="bg-on-surface text-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
           <div className="flex-1 space-y-6 relative z-10">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                 Global Metrics
              </div>
              <h2 className="text-4xl font-extrabold font-display leading-[1.1] tracking-tighter text-white">Global Reach,<br />Local Impact.</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">Matching contributors to localized problems in 42 countries and counting.</p>
              <div className="flex gap-4">
                 <button className="bg-white text-on-surface px-8 py-4 rounded-2xl font-bold font-display transition-transform active:scale-95">
                    Impact Map
                 </button>
                 <button className="border border-white/20 px-8 py-4 rounded-2xl font-bold font-display hover:bg-white/10 transition-colors">
                    Our Network
                 </button>
              </div>
           </div>
           
           <div className="flex-1 relative aspect-video w-full max-w-lg bg-white/5 rounded-[32px] overflow-hidden flex items-center justify-center border border-white/10">
              <Globe size={180} className="text-white/5 absolute -right-20 -bottom-20 scale-150" />
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Visualizing Network Nodes...</div>
              
              {/* Simulated Map Pins */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-primary-container animate-ping"></div>
              <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-tertiary-container animate-pulse shadow-[0_0_20px_rgba(181,79,0,0.5)]"></div>
              <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-secondary-container"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
