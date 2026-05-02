import { Search, ArrowRight, Heart, MessageCircle, PlusCircle, FileText, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary-fixed text-primary font-label-md text-label-md">Community Intelligence</span>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6 leading-[1.1]">
                Small problems, <br/><span className="text-primary">collective solutions</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Kindred connects neighbors and experts to solve hyper-local challenges together. From broken streetlights to community garden planning, your problem is our mission.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-outline w-6 h-6" />
                </div>
                <input 
                  className="block w-full pl-12 pr-32 py-4 bg-white border-2 border-outline-variant rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-body-md text-body-md shadow-sm outline-none" 
                  placeholder="Search problems in your neighborhood..." 
                  type="text"
                />
                <div className="absolute inset-y-2 right-2 flex items-center">
                  <button className="btn-gradient text-white px-6 h-full rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                    Search
                  </button>
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgHp-3UeLdCLTdSovM5d87TMHWnSTkW6XURAaVGDFanokcCeoqgBB2bDBGm-sZdU8siIsF61nz85cGbydssykP6xLYOGk-PiJS820gaZa3B8T69dalaTSQ9RS-GJAkyvGH7mdx8Vq8QSkMl5wzLcTqoxF3b26_SEXK8p361kDBrf7aO1agjAUuJF_np4AohHh5NpHNiryCvKDwix7T6_8OMyhLCYLmGOzQVYtHbGDgIxGjY0mu9YXCNIuROUArXpy6QCeZAOzRBZA" alt="Community member" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo-xN0z70cMhHWJ5tRQ_5HW4scFdj0WJWF1X_GgujZpOOv5lCmeji1oTJ3Q9Lnh-0s_lrT5g5hoIJn8BOABAGVZpjxXOINiYoGDW66ShBnNVSQwOyIRrpn9JqtvLrIUMn5PlCE3U2WhzSUZs1mCQ3TQ05jR3SOWVEO1Ws7TMWhowVrtns585Slu6YUO8UIAbdOajYEFsC73CutAI_xHY4L__rkX5lZesEDfJjaRAzW9Y7IPXtp9EjqEYNFHQqYopyyaqeRJFyzRHM" alt="Community member" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNsg-VXi-pW5qa6AoPlFskhoye_pto4NxdiJeKgROrhZkUu3pHnl-kcNo27cWv9rVt-cqi1kTDS_NHPtx5rcBDh59M71WGffEwQg91e0rNRr10qDTm8TM068-pvLZ4C91G8vAPXvudbsi54VMgvcKwfwgRnY5GFSToxOGy442guM6Ol3uOJ6gAb9nqPzC0L-wywhmM-Wad0Rg3r0BhVuEDK7PaAsRvt71gP5c9JS6OxLYRDlSCUTARaY8-L4rs7EBHoGyuS5QDPTE" alt="Community member" />
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant"><span className="font-bold text-primary">2,400+</span> neighbors solving problems today</p>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-xxl bg-gradient-to-tr from-surface-container to-surface-bright border border-outline-variant/30 flex items-center justify-center p-gutter">
                <img className="rounded-xl shadow-2xl shadow-primary/20 transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEiqLC17Xx4CD9Rcqpa8l0KQiEZ3aNW_xIgBeA_xrhdQUtg5hPSDcjgf6eJAv1YwFoAJZNoyqwZW6iQkl_pD8QHu6NRYiSNq3YSfjytDsBp9cO8yY3ylCh_SBgqbagYxMBhZUsavxPK9kC-DAc5ZcadMYInLbXWopa0xSDxZstECcR3qRIsFH9B_3H2r7ALI4xLIy0pKQbwu_2IIDYRm9CaHHyEejWXlJsC2um5kYYkMIbZpPJ7Pg2VhSCBoAuKVp5gShKSBeuj-I" alt="Community collaboration" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md text-secondary">Recently Solved</span>
                </div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">New bike lane on Main St.</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">42 contributors • 2 weeks</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="0" fill="url(#paint0_radial)" r="400" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(400) rotate(135) scale(600)" gradientUnits="userSpaceOnUse" id="paint0_radial" r="1">
                <stop stopColor="#2D62ED"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-xxl bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">How Kindred Works</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              We've streamlined the path from "someone should fix this" to "we fixed it together."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">1. Describe the Problem</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Spot something that needs fixing? Post it with photos and a location. Keep it clear, simple, and neighborly.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">2. Rally Your Neighbors</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The community discusses, votes, and adds ideas. Together, you define the scale and urgency of the solution.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed-dim/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-tertiary w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">3. Solve Collectively</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Implement the fix. Whether it's a DIY afternoon or petitioning the city, Kindred tracks progress to the finish line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Problems (Bento Style) */}
      <section className="py-xxl">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Featured Problems</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">High-impact threads in your area that need your voice.</p>
            </div>
            <Link to="/feed" className="flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4">
              View All Active Problems
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            {/* Large Card */}
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtZsNkxVxvPArOQsqGRxCR0m_qE0c_Q7kWFhdqbqMiak_g0ULhC6O2VQREZtLHpp7nHqjXkUR7FpyM6aw6u1Cai4H-PBrU5rPHWSvaOtseFIijt8oPKKVG-sgfei5IZPZkmpFB5yyQjQ9PrXTtTWWY9ALN7sPjdD4sYncoQqoQw-6h4csYCoqNFVGvOEzQCM1cc7jy2nP3Z5vmuQFPCKgxGLKsGKLAStKJvClDH3e3LWo7UCMXJTrJMnIBzlntiZCq1wGLFUxWD8A" alt="Community garden project" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="flex gap-2 mb-6">
                  <span className="bg-surface-variant text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Urban Planning</span>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm">High Impact</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface">Transform the abandoned lot on 5th into a Parklet</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  That corner has been empty for years. We're proposing a community-managed green space with seating and a tiny library. We need 200 more signatures to present this to the local council.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Heart className="text-primary w-5 h-5" />
                    <span className="font-label-md text-label-md text-on-surface">412 Neighbors Helping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="text-tertiary w-5 h-5" />
                    <span className="font-label-md text-label-md text-on-surface">84 Comments</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 pt-8">
                <button className="btn-gradient text-white px-8 py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-transform">
                  Join the Discussion
                </button>
              </div>
            </div>
            
            {/* Small Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-error-container text-on-error-container px-2 py-1 rounded-full font-label-sm text-label-sm">Safety</span>
                  <span className="text-outline text-xs font-label-sm">2h ago</span>
                </div>
                <h4 className="font-headline-md text-[18px] leading-tight mb-2 text-on-surface">Dim lighting on River Walk trail</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">The solar lights between bridge 3 and 4 have stopped working after the storm.</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-primary">15 neighbors joined</span>
                <button className="p-2 rounded-full hover:bg-slate-50 transition-colors text-outline">
                  <PlusCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Small Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-surface-container-high text-primary px-2 py-1 rounded-full font-label-sm text-label-sm">Logistics</span>
                  <span className="text-outline text-xs font-label-sm">5h ago</span>
                </div>
                <h4 className="font-headline-md text-[18px] leading-tight mb-2 text-on-surface">Community tool-sharing library</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Looking for a secure location to house our shared lawnmowers and drills.</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-primary">28 neighbors joined</span>
                <button className="p-2 rounded-full hover:bg-slate-50 transition-colors text-outline">
                  <PlusCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xxl">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decor */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-white mb-6">Have a problem in mind?</h2>
              <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto">
                Don't wait for someone else to notice. Start a thread today and see how many of your neighbors are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/post" className="bg-white text-primary px-10 py-4 rounded-xl font-label-md text-label-md font-bold shadow-lg shadow-black/10 hover:bg-slate-50 active:scale-95 transition-all inline-block">
                  Post a Problem Now
                </Link>
                <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-white/10 active:scale-95 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
