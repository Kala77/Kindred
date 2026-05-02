import { motion } from 'motion/react';
import { BadgeCheck, SlidersHorizontal, MapPin, Star, MessageCircle, User, ShieldCheck, Heart, Clock, Handshake } from 'lucide-react';

const CATEGORIES = [
  'All Specialists', 'Urban Planners', 'Carpenters', 'Legal Advisors', 'Civil Engineers', 'Environmentalists', 'Social Workers'
];

export default function Experts() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e5eeff] text-[#0048ce] text-xs font-semibold mb-4">
              <BadgeCheck size={14} className="mr-1" />
              Verified Local Talent
            </span>
            <h1 className="text-5xl font-bold font-display tracking-tight mb-4">Find expert neighbors for every challenge.</h1>
            <p className="text-lg text-[#434655]">
              Kindred connects you with skilled professionals in your community who volunteer their time to solve collective problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-white border border-[#c3c5d7] px-4 py-2.5 rounded-xl hover:bg-[#eff4ff] transition-colors shadow-sm text-sm font-semibold text-[#0b1c30]">
              <SlidersHorizontal size={18} className="text-[#737686]" />
              Filters
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#c3c5d7] px-4 py-2.5 rounded-xl hover:bg-[#eff4ff] transition-colors shadow-sm text-sm font-semibold text-[#0b1c30]">
              <MapPin size={18} className="text-[#737686]" />
              San Francisco, CA
            </button>
          </div>
        </header>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === 0 
                  ? 'bg-[#0048ce] text-white shadow-lg shadow-[#0048ce]/20' 
                  : 'bg-white border border-[#c3c5d7] text-[#434655] hover:border-[#0048ce] hover:text-[#0048ce]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Expert Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Expert Card 1 (Large Focus) */}
          <div className="md:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex flex-col justify-between group">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPK5wJbS9wHCq-VSaHyvw_UaOQ3zWHII3TIG89e94KCsv3nnQ6hHhPnvKyKKCs8mrUVkm9QVZuILWqWRvmD6_1x-QfuHEjJ_j58WMlNLQ1RkYfMlaT0_txMAVbfFDJIHURLRSf3SYBSRU0za9ye9Y1MSLLJuHptgEXoy_wk6XDUimhYoYATt2CsyFTe_urSytwuiqGkMLQbfc7kkT4_iJxibiUDic7Fqc5T9QreKFFaNG77sYRA9M_O0UWjhvQQ2ZdKuc6Bmi4tqQ" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#e5eeff]" 
                  alt="" 
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold font-display text-[#0b1c30]">Marcus Thorne</h3>
                    <BadgeCheck size={20} className="text-[#0048ce]" fill="#0048ce" color="white" />
                  </div>
                  <p className="text-[#0048ce] text-sm font-semibold">Senior Urban Planner • 12 years exp.</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star size={14} className="text-[#8f3c00]" fill="#8f3c00" />
                    <span className="text-xs font-semibold text-[#434655]">4.9 (42 consultations)</span>
                  </div>
                </div>
              </div>
              <span className="bg-[#86f898] text-[#00722f] px-3 py-1 rounded-full text-xs font-semibold">Active Now</span>
            </div>
            
            <div className="my-6">
              <p className="text-base text-[#434655] leading-relaxed line-clamp-3">
                Passionate about transforming underutilized urban spaces into thriving community hubs. I can help with zoning inquiries, public space design, and navigating city permit processes for community gardens or parklets.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Zoning Laws', 'Urban Design', 'Public Policy'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-[#e5eeff] text-[#434655] text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-[#0048ce] text-white py-3 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <MessageCircle size={18} />
                Ask for Advice
              </button>
              <button className="bg-[#e5eeff] text-[#434655] py-3 px-4 rounded-xl hover:bg-[#dce9ff] transition-colors">
                <User size={20} />
              </button>
            </div>
          </div>

          {/* Stats Card (Small) */}
          <div className="md:col-span-5 bg-[#0048ce] text-white rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-[32px] leading-10 font-bold tracking-tight mb-2 font-display">1,240+</h4>
              <p className="text-base opacity-90 mb-6">Problems solved by neighbors this month alone. Join the collective intelligence movement.</p>
              <div className="flex -space-x-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl7vgEDX3OZW1nPdt9RG_PXIoelMzWquc01ScrCkRM7bT6H3DxQGa8a1AV64OOZHNw0ogmOFBkVzItPwNCuu1IW0doXo-v-McAxn0UPWKH7PutjtkNn8wlFO1DsJTTWAlVYK25GFGToKYlB3jUjQGrY0-7MTr76NqqTCzSsQT1zJE5EkIzGjB30tNypMj4hbDLXbBZx9hF-i33vvmifa2IUcsoj3U1TXaPhNymFpy5-HYjqKXQIaUXFs2abh4E0f33xktHuE0FpGk" className="w-10 h-10 rounded-full border-2 border-[#0048ce]" alt="" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBppGKMQE0XP9UQhBvMAifRYMKf45gt918sO__bqvps-838T518tAzbu-rVHZMvX1FTHe9f4cygk-f8G9R9BvlelunYmmpVp7_7kfzAoOBU65Kv1LinA0uTnip9FUE9HBSBUxICD9juRZpTCM_bNuNC7EXTSGWOO1i_3B8c_bEmNqJN2fdhd-_1A0KkRGNLRpomoYOkfhDEI5JHVqfoiT-sP4mG5Bvi6LOXDEueNdjp-n3verrsYNvuyYmdZbvz2Zf5I64HzDc96Vs" className="w-10 h-10 rounded-full border-2 border-[#0048ce]" alt="" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByoVwrm7NPPFHnGvtBATZ9K8DibhDh6usvUqane68pyPNQHPz9HvmB-NoljNalzO-FhzVylet7lbhbCCjKUg1n9drGxTYO0O9n72-Yw8Xj9nKfGuQJpc709d-Z-0q0ruUdyDoEbpMwjoOHcb-ukZSW5JySiHoqAf7CU89ClbveGHlaS-RN1uIzZqRVfOWoVBZo78nT49Fy90_ccgUOD8tgKEEBlUMhnMxRw0JAMXIswX3qShevdS7KA3Kg_nUMNMlvjNaAzWw1e0s" className="w-10 h-10 rounded-full border-2 border-[#0048ce]" alt="" />
                <div className="w-10 h-10 rounded-full border-2 border-[#0048ce] bg-[#eff0ff] text-[#0048ce] flex items-center justify-center text-xs font-bold">+12</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          </div>

          {/* Expert Card 2 (Standard) */}
          <div className="md:col-span-4 bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex flex-col h-full group hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkcKHcJisW-vU2utnVVM1nVA6r-xCdA2IRKCfztFEjq5dBNkJ2jjbcglUrSZEMth8OQ3c00DaCRxv971CT_WRbQhqZYStx-qie3L5L0yL-Sp-cTGEk-GmD7FSi4tM1fCNHK4AM18r-w0MyVlG-sLQiRKUwzpRGP4xkgrgyoIkkGSzeX6pmA845mN86S8ZLWXfNQO98nuZuBJDe2WRiqpufwz1c3lJePWZdSxkySjrS90_znsmlqkdurqFd05-Y3eabKBAdQrLW2pc" className="w-16 h-16 rounded-2xl object-cover" alt="" />
              <div>
                <h3 className="text-sm font-semibold text-[#0b1c30]">David Chen</h3>
                <p className="text-[#434655] text-sm">Master Carpenter</p>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#006e2c]" />
                  <span className="text-xs text-[#737686]">2.4 miles away</span>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-[#434655] line-clamp-2">Expert in structural repair and sustainable wood sourcing. Can advise on patio builds and structural safety.</p>
            </div>
            <button className="mt-4 w-full border border-[#0048ce] text-[#0048ce] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0048ce]/5 transition-colors">Ask for Advice</button>
          </div>

          {/* Expert Card 3 (Standard) */}
          <div className="md:col-span-4 bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex flex-col h-full group hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNfEYzvc9aw7ipbyvoFvW9Dfgyb_-0wrXew941juvdQgkF9pSJRn3fdrgHMXSuoHsP65PzNPR-rVuePSa76nqd6-EnVhI2QOnN9cZRVa_n0t_F_1eXtctzErH6USfARu1Kl2Gmq3du77rCYE4p3rNPyV5w7FcJ14do3LB1TImDghGaV3whaqchprdRha0j9v9t6tyIFNY2VcJZsLixpPIrW_PBIS-AursTlZgtfhrfHwr0SjZTgDJucq1xNugGVBVIIKcHQ01g63A" className="w-16 h-16 rounded-2xl object-cover" alt="" />
              <div>
                <h3 className="text-sm font-semibold text-[#0b1c30]">Elena Rodriguez</h3>
                <p className="text-[#434655] text-sm">Environmental Law</p>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#006e2c]" />
                  <span className="text-xs text-[#737686]">1.1 miles away</span>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-[#434655] line-clamp-2">Helps communities understand water rights and local environmental compliance for urban farming initiatives.</p>
            </div>
            <button className="mt-4 w-full border border-[#0048ce] text-[#0048ce] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0048ce]/5 transition-colors">Ask for Advice</button>
          </div>

          {/* Expert Card 4 (Standard) */}
          <div className="md:col-span-4 bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex flex-col h-full group hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyCdm72nJFHQXmqg2kKG9zhzbWckzX9grAbgGFTiq-EG73oQ0S_z5J2irLBEtD68pnxRMlwsVB0yLZ95J8C9n_YThhC0ReYsroUKU0PenYTVqFFyYamr18MG5DZByQEQVRfjbOmqIrJ09uAVhnva03cOXVpKNkDJC4ioKEJuNU3cN6i0_y9xR3Hk9owHlr-kiLPjSBQ6ps18DIbOcDoWQNfnahACsDc4nvzJhMx9WdG0RPGvBNgqByGSRcyHm6_widksnwCgf1xSA" className="w-16 h-16 rounded-2xl object-cover" alt="" />
              <div>
                <h3 className="text-sm font-semibold text-[#0b1c30]">Sarah Jenkins</h3>
                <p className="text-[#434655] text-sm">Social Worker</p>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#006e2c]" />
                  <span className="text-xs text-[#737686]">0.8 miles away</span>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-[#434655] line-clamp-2">Specializing in community mental health resources and youth program development. Available for local workshop planning.</p>
            </div>
            <button className="mt-4 w-full border border-[#0048ce] text-[#0048ce] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0048ce]/5 transition-colors">Ask for Advice</button>
          </div>
          
        </div>

        {/* Become an Expert Section */}
        <section className="mt-12 bg-[#e5eeff] rounded-[40px] p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-[32px] leading-10 font-bold tracking-tight text-[#0b1c30] mb-4 font-display">Got skills to share?</h2>
            <p className="text-base text-[#434655] mb-8">Join our network of local experts and help your neighborhood solve problems more effectively. You decide how much time you give.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0048ce] text-white py-3 px-8 rounded-xl text-sm font-semibold hover:shadow-lg transition-shadow">Apply as an Expert</button>
              <button className="bg-white border border-[#c3c5d7] py-3 px-8 rounded-xl text-sm font-semibold text-[#434655] hover:bg-[#f8f9ff] transition-colors">Learn More</button>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#006e2c]" fill="#006e2c" color="white" />
                <span className="text-xs font-semibold">Secure Identity</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex items-center gap-3">
                <Heart size={24} className="text-[#8f3c00]" fill="#8f3c00" color="white" />
                <span className="text-xs font-semibold">Community Impact</span>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex items-center gap-3">
                <Clock size={24} className="text-[#0048ce]" fill="#0048ce" color="white" />
                <span className="text-xs font-semibold">Your Schedule</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_-2px_rgba(45,98,237,0.08)] flex items-center gap-3">
                <Handshake size={24} className="text-[#006e2c]" fill="#006e2c" color="white" />
                <span className="text-xs font-semibold">Networking</span>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
