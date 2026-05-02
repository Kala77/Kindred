"use client";

import { ArrowLeft, MessageSquare, ThumbsUp, Share2, MoreHorizontal, CheckCircle2, Flag, Send, Users, Target, Info, MapPin, Sparkles, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
           <Link href="/feed" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary-container transition-colors mb-2">
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
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6XMYBmcbX5ww53iekdH9xLADt6ti3MjAurhCDz_wwoR0hnbTCE4mIZr9jEhFvNBEPKYvkmV1cfEbKRvkJk2tBqbhhYXEsDmtpx_q-7rK4s8B13xURvYVgZO90YJ5CABPstAxnTkkUIMQx4QfElRSLjiM9dlE1FHeyYwa1HefJaVF7nt8hqSKILBi-TPxBvwyu_yI-QrmlrILXjBigoWVNCtPvHFKmeaa_qvYVya4o83MogtfRb6aVFv72egGwn0VvzHg_4tnTWtU" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="" />
                       <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJboW5Bwf9ZRhR1emAgQxcZ6E-Xn_6pgfO6gB-iH77u5rD5X7dA_j1_hcTYURJ1cOkTCKOmYrSSSlDf2mzyEjcCBmwH01wYQFTuc7Zd0Il3QDfUtJPzFUA5cUdVA_hMuL8zrUD5SuAaCF2-3mY07_-wC24KZfSOmwYVdM6J69JdlWRoTBhZO_j8YGztiqKUExMu1wyWf9XfeV7akbNzDaoop54r9gRaL_ixZCsSBCJGq53N8w58yaJVdZ9x-ebd1ue3zA_XBfMv4" className="rounded-3xl h-64 w-full object-cover shadow-md" alt="" />
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
                 <div className="space-y-12 pt-6">
                    <div className="flex justify-between items-center">
                       <h2 className="text-2xl font-bold font-display text-on-surface">Community Intelligence (12)</h2>
                    </div>

                    {/* Proof of Work Milestones */}
                    <div className="space-y-6">
                       <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-primary-container" /> Project Milestones
                       </h3>
                       <div className="flex flex-col gap-4">
                          {[
                            { label: 'Problem Validated by 50+ Residents', status: 'Completed', date: 'Oct 12' },
                            { label: 'Technical Feasibility Study', status: 'Completed', date: 'Oct 14' },
                            { label: 'Budget Approval', status: 'In Progress', date: 'Exp. Oct 20' },
                          ].map((m, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-surface-container rounded-2xl border border-outline-variant/10">
                               <div className="flex items-center gap-4">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${m.status === 'Completed' ? 'bg-primary-container text-white' : 'bg-white text-on-surface-variant border border-outline-variant'}`}>
                                     {m.status === 'Completed' ? <CheckCircle2 size={14} /> : <div className="w-2 h-2 rounded-full bg-surface-container-highest animate-pulse" />}
                                  </div>
                                  <span className="text-sm font-bold text-on-surface">{m.label}</span>
                               </div>
                               <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{m.date}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                       {solutions.map((sol, i) => (
                         <div key={i} className="bg-white border border-outline-variant/20 rounded-[40px] p-8 soft-shadow relative overflow-hidden group hover:border-primary-container/30 transition-all">
                            {sol.mostHelpful && (
                              <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-6 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                 <Sparkles size={14} /> Top Rated Solution
                              </div>
                            )}
                            <div className="flex gap-4 items-start mb-6">
                               <div className="w-12 h-12 rounded-2xl bg-slate-200 overflow-hidden border-2 border-surface-container shadow-sm">
                                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUexFgPsifhydXAl73htRnzrDdqZqZ3PeBed386w6BJGExNCOGoUaK1vQiLaLRLQefoskxW6FS3mUQ8ExYTrXdYdvBI7T3V98D8FSt__kZypsL2qULZNrLC612zTBK4f2MF79QzoSyNz4eP1YBkWs9rJSvFYjCFhZg0HSk3iCBNXew5YPM-FB_Dl3jeIhhjXzJuWy-4UicHKTQBLXuzu5gqtJ0_CL_pPC97rvglb1T4Zyy6EzJqqRe7G2ht6I0SeTFSg9KwL_6EA" className="w-full h-full object-cover" alt="" />
                               </div>
                               <div>
                                  <div className="font-bold text-on-surface flex items-center gap-1">
                                     {sol.author} 
                                     <CheckCircle2 size={14} className="text-blue-500" />
                                  </div>
                                  <div className="text-[10px] font-black uppercase tracking-widest text-primary-container">{sol.role}</div>
                               </div>
                               <div className="ml-auto text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-1">
                                  <Clock size={12} /> {sol.time}
                               </div>
                            </div>
                            <p className="text-on-surface-variant leading-relaxed font-medium mb-8 text-base">
                               {sol.content}
                            </p>
                            <div className="flex items-center justify-between">
                               <div className="flex items-center gap-3">
                                  <button className="flex items-center gap-2 bg-surface-container-high px-5 py-2.5 rounded-2xl text-xs font-black text-on-surface hover:bg-primary-container hover:text-on-primary transition-all active:scale-95">
                                     <ThumbsUp size={16} /> Helpful • {sol.votes}
                                  </button>
                                  <button className="flex items-center gap-2 text-xs font-black text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2">
                                     <MessageCircle size={16} /> 4 Replies
                                  </button>
                               </div>
                               <button className="p-3 text-on-surface-variant hover:bg-surface-container rounded-2xl transition-colors">
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
        <aside className="lg:col-span-4 flex flex-col gap-8 sticky top-24">
           {/* Problem Solver Card */}
           <div className="bg-white rounded-[40px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Lead Solver</h3>
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-[24px] bg-slate-200 ring-4 ring-surface-container-low overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrUexFgPsifhydXAl73htRnzrDdqZqZ3PeBed386w6BJGExNCOGoUaK1vQiLaLRLQefoskxW6FS3mUQ8ExYTrXdYdvBI7T3V98D8FSt__kZypsL2qULZNrLC612zTBK4f2MF79QzoSyNz4eP1YBkWs9rJSvFYjCFhZg0HSk3iCBNXew5YPM-FB_Dl3jeIhhjXzJuWy-4UicHKTQBLXuzu5gqtJ0_CL_pPC97rvglb1T4Zyy6EzJqqRe7G2ht6I0SeTFSg9KwL_6EA" className="w-full h-full object-cover" alt="" />
                 </div>
                 <div>
                    <h4 className="text-xl font-bold font-display text-on-surface">David Chen</h4>
                    <div className="text-xs font-medium text-on-surface-variant">San Francisco, CA</div>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="flex-1 py-4 bg-surface-container border border-outline-variant/20 rounded-2xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
                    View Profile
                 </button>
                 <button className="p-4 bg-primary-container/10 text-primary-container rounded-2xl border border-primary-container/20">
                    <MessageSquare size={20} />
                 </button>
              </div>
           </div>

           {/* Collaborator Leaderboard */}
           <div className="bg-white rounded-[40px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Top Collaborators</h3>
              <div className="space-y-4">
                 {[
                   { name: 'Dr. Elena Ross', role: 'Planner', score: 450 },
                   { name: 'Sarah Miller', role: 'Designer', score: 320 },
                   { name: 'Marcus T.', role: 'Engineer', score: 180 },
                 ].map((c, i) => (
                   <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-sm">
                         {i + 1}
                      </div>
                      <div className="flex-1">
                         <div className="text-sm font-bold text-on-surface">{c.name}</div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{c.role}</div>
                      </div>
                      <div className="text-xs font-black text-primary-container">+{c.score}</div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Funding Progress Card */}
           <div className="bg-white rounded-[40px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                 <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Funding Needed</h3>
                 <span className="text-xs font-bold text-tertiary-container">$4,200 total</span>
              </div>
              
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <div className="text-3xl font-black font-display text-on-surface tracking-tight">$1,450</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">34% complete</div>
                 </div>
                 <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container-container w-[34%]"></div>
                 </div>
              </div>

              <div className="space-y-3">
                 <button className="w-full py-4 btn-gradient text-on-primary rounded-2xl font-bold font-display text-sm tracking-wide shadow-xl shadow-primary-container/25 active:scale-95 transition-transform">
                    Back this Project
                 </button>
                 <p className="text-[10px] text-center text-on-surface-variant/60 font-medium">
                    All funds go towards hardware and local permits.
                 </p>
              </div>
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
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
           </div>
        </aside>

      </div>
    </div>
  );
}
