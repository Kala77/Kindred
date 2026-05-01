import { motion } from 'motion/react';
import { Search, ArrowRight, Sparkles, MessageCircle, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col tonal-layer min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-[1.05] text-on-surface mb-8 tracking-tighter">
              Small problems,<br />
              <span className="text-primary-container">collective solutions.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-medium">
              Join a community where empathy meets engineering. Post real-world problems 
              and connect with people who can help you solve them.
            </p>
            
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl soft-shadow border border-outline-variant/30 max-w-xl mb-10">
              <Search className="text-on-surface-variant ml-2" size={24} />
              <input 
                type="text" 
                placeholder="Find a problem to solve..." 
                className="flex-1 bg-transparent py-3 focus:outline-none text-sm font-medium"
              />
              <button className="btn-gradient text-on-primary px-6 py-3 rounded-xl font-bold font-display text-sm tracking-wide shadow-lg shadow-primary-container/20">
                Search
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-bold text-on-surface-variant">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" />
                  </div>
                ))}
              </div>
              <span className="font-display">2,400+ neighbors solving problems today</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden soft-shadow border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                className="w-full aspect-[4/3] object-cover" 
                alt="Community Collaboration" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Overlay Card */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl soft-shadow max-w-[280px] border border-outline-variant/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-xs font-black font-display uppercase tracking-widest text-secondary-container">Recently Solved</div>
              </div>
              <h3 className="text-lg font-bold font-display leading-tight mb-2 text-on-surface">New bike lane on Main St.</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                "We rallied 120 residents to fix the blind spot on Main and 5th."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 tracking-tighter">How Kindred Works</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            A simple framework to turn local challenges into communal victories.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Describe', desc: 'Identify a problem in your neighborhood and share the details.', icon: MessageCircle, color: 'text-primary-container' },
             { title: 'Rally', desc: 'Gather neighbors and specialists to brainstorm solutions.', icon: Users, color: 'text-tertiary-container' },
             { title: 'Solve', desc: 'Implement the best solution and track the outcome together.', icon: Sparkles, color: 'text-secondary-container' },
           ].map((step, i) => (
             <div key={step.title} className="p-10 rounded-[32px] bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container transition-all flex flex-col gap-6 items-center text-center group">
                <div className={`p-5 rounded-2xl bg-white soft-shadow mb-2 transition-transform group-hover:scale-110`}>
                   <step.icon className={step.color} size={40} />
                </div>
                <h3 className="text-2xl font-bold font-display">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-on-primary mb-8 tracking-tighter leading-tight">
                Have a problem in mind?<br />
                Let's solve it together.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-white text-primary-container px-12 py-5 rounded-2xl font-bold font-display text-lg shadow-xl hover:scale-105 transition-transform">
                   Post a Problem
                 </button>
                 <button className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-bold font-display text-lg transition-colors">
                   See the Feed
                 </button>
              </div>
           </div>
           
           {/* Background decorative elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
}
