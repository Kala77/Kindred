import { motion } from 'motion/react';
import { Award, Star, Mail, MapPin, Grid, List as ListIcon, Filter, ChevronDown, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  'All Specialists', 'Urban Planners', 'Carpenters', 'Legal Advisors', 'Environmentalists', 'Engineers'
];

const EXPERTS = [
  {
    name: 'David Chen',
    role: 'Solar Engineer',
    bio: 'Helping neighborhoods transition to community-owned solar microgrids.',
    location: 'Oakland, CA',
    rating: 4.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBppGKMQE0XP9UQhBvMAifRYMKf45gt918sO__bqvps-838T518tAzbu-rVHZMvX1FTHe9f4cygk-f8G9R9BvlelunYmmpVp7_7kfzAoOBU65Kv1LinA0uTnip9FUE9HBSBUxICD9juRZpTCM_bNuNC7EXTSGWOO1i_3B8c_bEmNqJN2fdhd-_1A0KkRGNLRpomoYOkfhDEI5JHVqfoiT-sP4mG5Bvi6LOXDEueNdjp-n3verrsYNvuyYmdZbvz2Zf5I64HzDc96Vs',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Civil Lawyer',
    bio: 'Specializing in tenant rights and community land trust structures.',
    location: 'San Francisco, CA',
    rating: 5.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNfEYzvc9aw7ipbyvoFvW9Dfgyb_-0wrXew941juvdQgkF9pSJRn3fdrgHMXSuoHsP65PzNPR-rVuePSa76nqd6-EnVhI2QOnN9cZRVa_n0t_F_1eXtctzErH6USfARu1Kl2Gmq3du77rCYE4p3rNPyV5w7FcJ14do3LB1TImDghGaV3whaqchprdRha0j9v9t6tyIFNY2VcJZsLixpPIrW_PBIS-AursTlZgtfhrfHwr0SjZTgDJucq1xNugGVBVIIKcHQ01g63A',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Horticulturist',
    bio: 'Urban gardening consultant for drought-resistant public spaces.',
    location: 'San Jose, CA',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyCdm72nJFHQXmqg2kKG9zhzbWckzX9grAbgGFTiq-EG73oQ0S_z5J2irLBEtD68pnxRMlwsVB0yLZ95J8C9n_YThhC0ReYsroUKU0PenYTVqFFyYamr18MG5DZByQEQVRfjbOmqIrJ09uAVhnva03cOXVpKNkDJC4ioKEJuNU3cN6i0_y9xR3Hk9owHlr-kiLPjSBQ6ps18DIbOcDoWQNfnahACsDc4nvzJhMx9WdG0RPGvBNgqByGSRcyHm6_widksnwCgf1xSA',
  },
  {
    name: 'Thomas Builder',
    role: 'Master Carpenter',
    bio: 'Guiding communities in building accessible park infrastructure.',
    location: 'Berkeley, CA',
    rating: 4.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkcKHcJisW-vU2utnVVM1nVA6r-xCdA2IRKCfztFEjq5dBNkJ2jjbcglUrSZEMth8OQ3c00DaCRxv971CT_WRbQhqZYStx-qie3L5L0yL-Sp-cTGEk-GmD7FSi4tM1fCNHK4AM18r-w0MyVlG-sLQiRKUwzpRGP4xkgrgyoIkkGSzeX6pmA845mN86S8ZLWXfNQO98nuZuBJDe2WRiqpufwz1c3lJePWZdSxkySjrS90_znsmlqkdurqFd05-Y3eabKBAdQrLW2pc',
  },
];

export default function Experts() {
  return (
    <div className="bg-background min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 max-w-2xl">
             <h1 className="text-5xl font-extrabold font-display tracking-tight text-on-surface">Verified Local Talent</h1>
             <p className="text-on-surface-variant font-medium leading-relaxed">
                Find expert neighbors ready to help. Kindred connects you with verified 
                professionals and experienced hobbyists in your area.
             </p>
             <div className="flex gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-2xl text-sm font-bold border border-outline-variant/30 soft-shadow">
                   <Filter size={18} /> Filters
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container rounded-2xl text-sm font-bold border border-outline-variant/30">
                   <MapPin size={18} /> San Francisco, CA <ChevronDown size={16} />
                </button>
             </div>
          </div>
        </header>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
           {CATEGORIES.map((cat, i) => (
             <button 
              key={cat} 
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold border transition-all ${
                i === 0 ? 'bg-primary-container text-on-primary border-primary-container' : 'bg-white text-on-surface-variant border-outline-variant/30 hover:bg-surface-container-low'
              }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Featured Expert */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 soft-shadow border border-outline-variant/20 flex flex-col md:flex-row gap-8 group"
           >
              <div className="w-full md:w-64 h-64 shrink-0 rounded-3xl overflow-hidden relative">
                 <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPK5wJbS9wHCq-VSaHyvw_UaOQ3zWHII3TIG89e94KCsv3nnQ6hHhPnvKyKKCs8mrUVkm9QVZuILWqWRvmD6_1x-QfuHEjJ_j58WMlNLQ1RkYfMlaT0_txMAVbfFDJIHURLRSf3SYBSRU0za9ye9Y1MSLLJuHptgEXoy_wk6XDUimhYoYATt2CsyFTe_urSytwuiqGkMLQbfc7kkT4_iJxibiUDic7Fqc5T9QreKFFaNG77sYRA9M_O0UWjhvQQ2ZdKuc6Bmi4tqQ" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                  alt="" 
                 />
                 <div className="absolute top-4 left-4 bg-primary-container text-on-primary p-2 rounded-xl shadow-lg">
                    <CheckCircle2 size={24} />
                 </div>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-start">
                    <div>
                       <h2 className="text-3xl font-black font-display text-on-surface">Marcus Thorne</h2>
                       <div className="text-primary-container font-black text-xs uppercase tracking-widest mt-1">Senior Urban Planner</div>
                    </div>
                    <div className="flex items-center gap-1 text-tertiary-container font-black text-lg bg-tertiary-container/10 px-3 py-1 rounded-xl">
                       <Star size={18} fill="currentColor" /> 4.9
                    </div>
                 </div>
                 <p className="text-on-surface-variant leading-relaxed font-medium">
                    "12 years experience in municipal zoning and sustainable city growth. 
                    I've helped 40+ community groups navigate complex public policy to 
                    get their local initiatives approved."
                 </p>
                 <div className="flex flex-wrap gap-2 mt-2">
                    {['Zoning Laws', 'Urban Design', 'Public Policy'].map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                         {tag}
                      </span>
                    ))}
                 </div>
                 <button className="btn-gradient text-on-primary px-8 py-4 rounded-2xl font-bold font-display text-sm tracking-wide mt-4 self-start shadow-xl shadow-primary-container/25 active:scale-95 transition-transform">
                    Ask for Advice
                 </button>
              </div>
           </motion.div>

           {/* Metrics Sidebar */}
           <div className="lg:col-span-4 bg-tertiary-fixed text-on-tertiary-container rounded-[40px] p-8 flex flex-col justify-center items-center text-center gap-4 relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                 <div className="text-5xl font-black font-display tracking-tighter">1,240+</div>
                 <div className="text-sm font-black uppercase tracking-widest opacity-70 leading-tight">Problems solved<br />by local experts</div>
              </div>
              <p className="text-sm font-medium text-on-tertiary-container/80 relative z-10 mt-4 leading-relaxed">
                 Experts have contributed over 4,000 hours of free advice this year alone.
              </p>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
           </div>
        </div>

        {/* Regular Expert Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {EXPERTS.map((expert, i) => (
             <motion.div 
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-8 soft-shadow border border-outline-variant/20 flex flex-col gap-6 hover:border-primary-container/30 transition-all group"
             >
                <div className="flex justify-between items-start">
                   <img src={expert.image} className="w-20 h-20 rounded-2xl object-cover ring-4 ring-surface-container" alt="" />
                   <div className="flex items-center gap-1 text-tertiary-container font-black bg-tertiary-container/5 px-2 py-1 rounded-lg">
                      <Star size={14} fill="currentColor" /> {expert.rating}
                   </div>
                </div>
                <div className="space-y-1">
                   <h3 className="text-xl font-bold font-display group-hover:text-primary-container transition-colors">{expert.name}</h3>
                   <div className="text-xs font-black uppercase tracking-widest text-primary-container">{expert.role}</div>
                </div>
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic line-clamp-2">
                   "{expert.bio}"
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-outline-variant/10 mt-auto">
                   <MapPin size={14} className="text-on-surface-variant" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{expert.location}</span>
                   <button className="ml-auto p-2 hover:bg-surface-container rounded-lg transition-colors">
                      <Mail size={18} className="text-on-surface-variant group-hover:text-primary-container" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Apply Banner */}
        <section className="bg-surface-container-highest rounded-[40px] px-8 py-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 border border-outline-variant/30">
           <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-extrabold font-display tracking-tight text-on-surface">Got skills to share?</h2>
              <p className="text-on-surface-variant font-medium">Join our roster of verified experts and help your community grow.</p>
           </div>
           <div className="flex gap-4">
              <button className="btn-gradient text-on-primary px-8 py-4 rounded-2xl font-bold font-display text-sm tracking-wide shadow-lg active:scale-95 transition-transform">
                 Apply as an Expert
              </button>
              <button className="bg-white text-on-surface px-8 py-4 rounded-2xl font-bold font-display text-sm tracking-wide border border-outline-variant/30 soft-shadow hover:bg-surface-container-low transition-colors">
                 Learn More
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
