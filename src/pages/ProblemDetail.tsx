import { ArrowLeft, MessageSquare, ThumbsUp, Share2, MoreHorizontal, CheckCircle2, Flag, Send, Users, Target, Info } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function ProblemDetail() {
  const { id } = useParams();

  const solutions = [
    {
      author: 'Dr. Elena Ross',
      role: 'Urban Planner',
      content: "I've reviewed the traffic data for Elm Street. The primary conflict point is the illegal right turn on red at 5th. A physical barrier or 'No Turn on Red' LED sign synchronized with the bike lane green would reduce incidents by 40%.",
      time: '1h ago',
      mostHelpful: true,
      votes: 42,
    },
    {
      author: 'Marcus T.',
      role: 'Civic Engineer',
      content: "We could also look into widening the lane by 2 feet, which is possible if we remove the unused loading zone on the north side.",
      time: '4h ago',
      votes: 12,
    }
  ];

  return (
    <div className="bg-background min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
           <Link to="/feed" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary-container transition-colors mb-2">
              <ArrowLeft size={16} strokeWidth={3} /> Back to feed
           </Link>

           <div className="bg-white rounded-[40px] soft-shadow border border-outline-variant/20 overflow-hidden">
              {/* Header Info */}
              <div className="p-8 md:p-12 pb-6 flex justify-between items-center bg-surface-container-low border-b border-outline-variant/10">
                 <div className="flex gap-4 items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-container bg-primary-container/10 px-3 py-1.5 rounded-lg border border-primary-container/20">Urban Mobility</span>
                    <span className="text-xs font-medium text-on-surface-variant">Posted 2 hours ago</span>
                 </div>
                 <div className="flex items-center gap-2 text-primary-container font-black text-[10px] uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-sm border border-outline-variant/20">
                    <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
                    In Progress
                 </div>
              </div>

              <div className="p-8 md:p-12 space-y-8">
                 <h1 className="text-3xl md:text-5xl font-extrabold font-display text-on-surface tracking-tighter leading-tight">
                    How might we improve bike safety on Elm Street during rush hour?
                 </h1>

                 {/* Action Bar */}
                 <div className="flex items-center justify-center gap-12 py-4 border-y border-outline-variant/10">
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-all hover:scale-110">
                       <ThumbsUp size={24} />
                       <span className="text-sm font-bold">42 upvotes</span>
                    </button>
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-all hover:scale-110">
                       <Share2 size={24} />
                       <span className="text-sm font-bold">Share</span>
                    </button>
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary-container transition-all hover:scale-110">
                       <Flag size={24} />
                       <span className="text-sm font-bold">Report</span>
                    </button>
                 </div>

                 {/* Problem Description */}
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="" />
                       <img src="https://images.unsplash.com/photo-1519003300449-424ad017505b?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="" />
                    </div>
                    <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
                       The intersection at Elm and 5th has seen a 20% increase in near-misses 
                       between cyclists and commercial vehicles during the 5 PM window. 
                       There's no dedicated turn signal for bikes, causing frequent conflict.
                    </p>
                 </div>

                 {/* Answer Box */}
                 <div className="pt-10 border-t border-outline-variant/10 flex flex-col gap-4">
                    <h2 className="text-xl font-bold font-display text-on-surface">Your Solution</h2>
                    <div className="relative">
                       <textarea 
                        rows={3} 
                        placeholder="Share your expertise or propose a solution..." 
                        className="w-full bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30 focus:outline-none focus:border-primary-container focus:bg-white transition-all text-sm font-bold text-on-surface resize-none"
                       ></textarea>
                       <button className="absolute bottom-4 right-4 bg-primary-container text-white p-3 rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all">
                          <Send size={20} strokeWidth={2.5} />
                       </button>
                    </div>
                 </div>

                 {/* Individual Solutions */}
                 <div className="space-y-6 pt-6">
                    <div className="flex justify-between items-center">
                       <h3 className="font-bold font-display text-xl text-on-surface">Community Solutions (12)</h3>
                    </div>
                    
                    <div className="space-y-4">
                       {solutions.map((sol, i) => (
                         <div key={i} className="bg-surface-container-lowest border border-outline-variant/20 rounded-[32px] p-8 soft-shadow relative overflow-hidden group">
                            {sol.mostHelpful && (
                              <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-6 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                 <CheckCircle2 size={14} /> Most Helpful
                              </div>
                            )}
                            <div className="flex gap-4 items-start mb-6">
                               <div className="w-12 h-12 rounded-2xl bg-slate-200"></div>
                               <div>
                                  <div className="font-bold text-on-surface">{sol.author}</div>
                                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-container">{sol.role}</div>
                               </div>
                               <div className="ml-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{sol.time}</div>
                            </div>
                            <p className="text-on-surface-variant leading-relaxed font-medium mb-6">
                               {sol.content}
                            </p>
                            <div className="flex items-center gap-4">
                               <button className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-xl text-xs font-black text-on-surface hover:bg-primary-container/20 transition-colors">
                                  <ThumbsUp size={16} /> Helpful ({sol.votes})
                               </button>
                               <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors">
                                  <MoreHorizontal size={20} />
                               </button>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
           {/* Problem Solver Card */}
           <div className="bg-white rounded-[40px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Problem Solver</h3>
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-[24px] bg-slate-200 ring-4 ring-surface-container-low"></div>
                 <div>
                    <h4 className="text-xl font-bold font-display text-on-surface">David Chen</h4>
                    <div className="text-xs font-medium text-on-surface-variant">Civil Engineering hobbyist</div>
                 </div>
              </div>
              <button className="w-full py-4 bg-surface-container border border-outline-variant/20 rounded-2xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
                 View Profile
              </button>
           </div>

           {/* Impact Stats Card */}
           <div className="bg-primary-container text-on-primary rounded-[40px] p-10 space-y-8 shadow-xl shadow-primary-container/20 relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                 <div className="flex items-center gap-3">
                    <Target size={24} />
                    <h3 className="text-sm font-black uppercase tracking-widest text-white/70">Community Impact</h3>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <div>
                          <div className="text-4xl font-black font-display tracking-tight">1,240</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Participants</div>
                       </div>
                       <Users className="text-white/20" size={48} />
                    </div>
                    
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                       <div className="h-full bg-secondary-container w-[65%]"></div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                       <span className="text-secondary-container">Status: Critical</span>
                       <span className="text-white/50">Goal: 2,000</span>
                    </div>
                 </div>
              </div>
              
              <div className="p-4 bg-white/10 rounded-2xl flex gap-3 relative z-10 border border-white/10">
                 <Info size={20} className="shrink-0" />
                 <p className="text-xs font-medium leading-relaxed opacity-80 italic">
                    "This problem has been trending in your local area for the past 48 hours."
                 </p>
              </div>
           </div>
        </aside>

      </div>
    </div>
  );
}
