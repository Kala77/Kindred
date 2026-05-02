import { motion } from 'motion/react';
import { Calendar, Download, TrendingUp, CheckCircle2, Users, Heart, Info, Handshake } from 'lucide-react';

export default function Impact() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-6">
            <div>
              <h1 className="text-5xl font-bold font-display mb-2">Community Impact</h1>
              <p className="text-lg text-[#434655] max-w-2xl">
                Transparency in our collective progress. See how Kindred members are solving real-world challenges together.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#e5eeff] rounded-lg text-sm font-semibold text-[#0048ce] hover:bg-[#dce9ff] transition-colors">
                <Calendar size={20} />
                Last 30 Days
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#e5eeff] rounded-lg text-sm font-semibold text-[#0048ce] hover:bg-[#dce9ff] transition-colors">
                <Download size={20} />
                Export Data
              </button>
            </div>
          </div>
          
          {/* Bento Grid Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-xs font-semibold text-[#0048ce] uppercase tracking-widest">Active Solutions</span>
                <h2 className="text-[56px] font-extrabold text-[#0b1c30] mt-2 leading-tight">1,284</h2>
                <div className="flex items-center gap-2 text-[#00722f] mt-2">
                  <TrendingUp size={18} />
                  <span className="text-sm font-semibold">+12% from last month</span>
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <p className="text-sm text-[#434655]">Total Problems Solved</p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 size={160} fill="currentColor" strokeWidth={0.5} className="text-black" />
              </div>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100">
              <div className="bg-[#e5eeff] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="text-[#0048ce]" />
              </div>
              <p className="text-sm font-semibold text-[#434655]">Contributors</p>
              <h3 className="text-[32px] font-bold text-[#0b1c30] font-display">8.4k</h3>
              <div className="w-full bg-[#eff4ff] h-1.5 rounded-full mt-6">
                <div className="bg-[#0048ce] h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs font-semibold text-[#434655] mt-2">75% of target goal</p>
            </div>
            
            {/* Stat Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100">
              <div className="bg-[#ffdbca] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[#8f3c00]" />
              </div>
              <p className="text-sm font-semibold text-[#434655]">Hours Volunteered</p>
              <h3 className="text-[32px] font-bold text-[#0b1c30] font-display">12,650</h3>
              <p className="text-xs font-semibold text-[#8f3c00] mt-6">Top 5% among communities</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Data Visualization: Success Rate */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100 h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold font-display text-[#0b1c30]">Success Rate Over Time</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#0048ce]"></div>
                    <span className="text-xs font-semibold text-[#434655]">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#d3e4fe]"></div>
                    <span className="text-xs font-semibold text-[#434655]">Initiated</span>
                  </div>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="w-full aspect-[16/7] relative flex items-end justify-between px-2 pt-8">
                <div className="absolute inset-0 flex flex-col justify-between border-b border-slate-100 h-full py-4">
                  <div className="w-full border-t border-slate-50"></div>
                  <div className="w-full border-t border-slate-50"></div>
                  <div className="w-full border-t border-slate-50"></div>
                  <div className="w-full border-t border-slate-50"></div>
                </div>
                <div className="flex items-end gap-6 w-full justify-around h-full z-10 px-4">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[#d3e4fe] rounded-t-lg transition-all hover:bg-[#0048ce]/20" style={{ height: '40%' }}></div>
                    <div className="w-full bg-[#0048ce] rounded-t-lg -mt-8" style={{ height: '30%' }}></div>
                    <span className="text-xs font-semibold text-[#434655] mt-2">Jan</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[#d3e4fe] rounded-t-lg" style={{ height: '60%' }}></div>
                    <div className="w-full bg-[#0048ce] rounded-t-lg -mt-8" style={{ height: '45%' }}></div>
                    <span className="text-xs font-semibold text-[#434655] mt-2">Feb</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[#d3e4fe] rounded-t-lg" style={{ height: '55%' }}></div>
                    <div className="w-full bg-[#0048ce] rounded-t-lg -mt-8" style={{ height: '48%' }}></div>
                    <span className="text-xs font-semibold text-[#434655] mt-2">Mar</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[#d3e4fe] rounded-t-lg" style={{ height: '85%' }}></div>
                    <div className="w-full bg-[#0048ce] rounded-t-lg -mt-8" style={{ height: '72%' }}></div>
                    <span className="text-xs font-semibold text-[#434655] mt-2">Apr</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full bg-[#d3e4fe] rounded-t-lg" style={{ height: '90%' }}></div>
                    <div className="w-full bg-[#0048ce] rounded-t-lg -mt-8" style={{ height: '82%' }}></div>
                    <span className="text-xs font-semibold text-[#434655] mt-2">May</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[#eff4ff] rounded-lg flex items-center gap-4">
                <Info className="text-[#0048ce]" fill="currentColor" color="#eff4ff" />
                <p className="text-sm text-[#434655]">
                  May saw a <span className="text-[#0048ce] font-semibold">24% increase</span> in total issues resolved compared to the quarterly average.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Wins Feed */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-display text-[#0b1c30]">Recent Wins</h3>
              <a className="text-sm font-semibold text-[#0048ce] hover:underline decoration-2 underline-offset-4" href="#">View All</a>
            </div>
            <div className="space-y-4">
              {/* Win Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100 group cursor-pointer hover:border-[#eff0ff] transition-all">
                <div className="flex gap-4 items-start">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUaD743OaWJ2TQNoNzbS-hED3T2X0W7gYUKJUsBuwDgGi4tc35a3KpWmmRgnMQOMx7uXrzqA7rrzOYMUdVuOYhrjk9hO_DchRszvyri4Wya5mmNgBtPndnlLbrOeUObjvEazDlhyN3z-v4K2Uyt-vlLW6PfTFBzk_z8oDlvbEstW6phSxynU6I0B9y5oyeFHQHngSe8UcwSkkVQYaTduQ_QRhzWMVG7d8JRV3DLxwfn1h3ICHvpeFgc5h4H_5ixAPOb2FnkTvxn20" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#006e2c] bg-[#86f898] px-2 py-0.5 rounded-full">Solved</span>
                      <span className="text-xs font-semibold text-[#434655]">2h ago</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#0b1c30] group-hover:text-[#0048ce] transition-colors">Oak Street Park Lighting Fix</h4>
                    <p className="text-sm text-[#434655] mt-1 line-clamp-2">The local city council approved the new LED proposal submitted by the community board...</p>
                  </div>
                </div>
              </div>
              
              {/* Win Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100 group cursor-pointer hover:border-[#eff0ff] transition-all">
                <div className="flex gap-4 items-start">
                  <div className="flex -space-x-4">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJGg4wJei6FVCmwpGDsBUHqE1h7dZKl1Bn_XMbXkFP9MrNczivah3cCgFHSPR5V5y8XDMNMSYX_Cnlnxtk2S31BaKfVwmzbyr1K5_NCP03QbcdJnGcxpHhGGF5Bb-zafGmf4G3yWDdPFEe7ZOFNOAET1OInuOD9fOF2fVYzSwSvv1rwg3gZs6CSMKOjuqdNpSLm8WkMLjBg2kwnKCOHkBijN6up-VBBU8ooYBBO55Pc4aSppfmvehMwktQD24VUT9DnwL4t7PuYq0" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHg8AyVc6kCJyLgrC4EfcgOFbI4B3JX-G5Ly-ATHeJsx7k6VovHXEqySPN5lr8lAdfjCRbCPX-ZMEErchj742yHXzgxhc--WtqAh7I3t0jHGI1jZ-fAgn6VyJuys8-pq-syU4JYNfZ3jHW_JmLRrJSal69MUzWCHA4VDeCygDWkME3llvIpjFS31QN3cVvYrFChYDsYQkj07aIdY9-rtZVDLzr8TOz7tW5q7C1mNadwPuNx86wAytD7msa_2Dg1BKRtKQK0mjNKr0" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#8f3c00] bg-[#ffdbca] px-2 py-0.5 rounded-full">Impact Goal</span>
                      <span className="text-xs font-semibold text-[#434655]">5h ago</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#0b1c30] group-hover:text-[#0048ce] transition-colors">Community Fridge Fully Stocked</h4>
                    <p className="text-sm text-[#434655] mt-1 line-clamp-2">12 volunteers joined forces to source over 500 lbs of surplus produce for the week...</p>
                  </div>
                </div>
              </div>
              
              {/* Win Card 3 */}
              <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] border border-slate-100 group cursor-pointer hover:border-[#eff0ff] transition-all">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#2d62ed] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <Handshake className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#006e2c] bg-[#86f898] px-2 py-0.5 rounded-full">Solved</span>
                      <span className="text-xs font-semibold text-[#434655]">1d ago</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#0b1c30] group-hover:text-[#0048ce] transition-colors">Digital Literacy Workshop Success</h4>
                    <p className="text-sm text-[#434655] mt-1 line-clamp-2">Successfully onboarded 25 seniors to digital communication tools with 1-on-1 tutoring...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Impact Map */}
        <section className="mt-12">
          <div className="bg-[#0b1c30] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="relative z-10 md:w-1/2">
              <h2 className="text-[32px] leading-10 font-bold font-display text-white mb-4">Global Reach, Local Impact</h2>
              <p className="text-base text-[#d3e4fe] mb-8">
                Kindred is active in over 120 local communities worldwide. Our model of collective intelligence scales to solve problems of any size.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[#b5c4ff] text-2xl font-bold font-display">120+</p>
                  <p className="text-[#d3e4fe] text-xs font-semibold">Cities Reached</p>
                </div>
                <div>
                  <p className="text-[#b5c4ff] text-2xl font-bold font-display">15k</p>
                  <p className="text-[#d3e4fe] text-xs font-semibold">Active Threads</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative min-h-[300px] w-full flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK4xU1ZxKYXU6H8ukLgdSYYU6f9brfns8PFZFZjEmLZnGT3HrQb_T4W0u5jorbRjDh6tR89Cgvg0YPkI-kty0tOwCQl7wCaPgqs2iGRE4XtoyyATV3YvEt1hyN3g4ougrTRJryhiDoIWTNjvZ-VY44xZbhQX0IdoM1GvNHeXt_21RI08WREHg0pHV9vpv5TqOhYGJo1n668j-_-PlgxTV0DCUxkcydBMqbUWt4tJn5jlUFjMX_oDCOzWBU2Y2AGyYJOOEWSwvMa-c" 
                className="rounded-2xl opacity-40 mix-blend-screen" 
                alt="Impact Map" 
              />
              {/* Overlay decorative dots */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#0048ce] rounded-full animate-pulse shadow-[0_0_15px_rgba(45,98,237,0.8)]"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#6ddd81] rounded-full animate-pulse delay-100 shadow-[0_0_15px_rgba(109,221,129,0.8)]"></div>
              <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-[#0048ce] rounded-full animate-pulse delay-200 shadow-[0_0_15px_rgba(45,98,237,0.8)]"></div>
            </div>
            
            {/* Abstract Background Ornament */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d62ed]/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
