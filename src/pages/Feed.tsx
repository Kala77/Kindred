import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronDown, 
  ArrowRight,
  MessageCircle,
  Lightbulb,
  PlayCircle,
  Home,
  Cpu,
  Wrench,
  Leaf,
  Clock,
  Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_PROBLEMS = [
  {
    id: 'large-1',
    title: 'Repairing a 1940s analog timepiece',
    description: 'The internal balance wheel is slightly skewed. Looking for someone with micro-mechanical experience or a local clocksmith who knows vintage Omega movements.',
    author: 'Julian Thorne',
    authorRole: 'Collector',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVjihH5dcOM6v3DGwYhjybBTo5XaLSc-njlXB2Ry6udcLL6HOhARbNGb7fc1D2WD-3ieWmKdaQTasLpFQGkC5C9YQGYO1xQzbbNOF7Qr69MQkjA-86P82qIjscYohQhxkNsmSSzDkU9JSPhGPhUEUhO5qysy-ZTccvu2Lep8DZM8dhWd6jVPY3StFo8NhMEpCDnSZ8Ta0sdNjD0I8uclBPu-IQhwHtZSF6H05WtyaxZBFWMRLMkLA5V3R0i0ATrFHCdkbnLJFEIPk',
    tags: ['Micro-Mechanics', 'Preservation'],
    status: 'In Progress',
    reactions: 42,
    solutions: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCND5C8l51S7evUl-_l-67ljwdMMDT0l9DVPli8S9GDhAA9TJWqttzj3qiKhuQkD_pb9n-diXiylMuv6k49ifk1BOmr-m1XxydwCnGuhKSNp7vjtl_7qLOKCWbZmqDEtQyRSKHO80WYZUTplqsKQx4O56tXr00u5Omsvm1opgbtjVTPYXmcfbY2RvUGoyA9jVwLVpCQWIqxJ-B91eIbfmXL9VbPH4_UwL_8lz0ivJ7a9K_QxCDHcGRvngcOCGbyk71gh6PdyhiuWuk',
    featured: true,
    urgency: 'Medium',
    location: 'Mission District',
    time: 'Posted 2 hours ago'
  },
  {
    id: '1',
    title: 'Solar panel cleaning robot',
    description: 'Designing a modular robot to clean dust from panels without water. Need mechanical feedback on the brush system.',
    author: 'Liam Green',
    authorRole: 'Engineer',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmCzvoOVEtbeCg3iSLiUTHSWgtG9HXUNOd2Lc2HMimNY2MLXubN_bgDNdMi3RVxQUhVnAv3ZnMO5UlMObweJBCniR9jaG6vLQcgoKygbndqOq22Pi8z7SSri6mIq0Lz1GMr801k-7judIWfKI-5MsanzbcX65j7AVdfXUqHFhShy9P_VqMDwxELf9ZWvDOB_Ga7pQ1pSQSxdHbojoCOd1spZT7szHTvrhDOzheWq2Y9CNJfnqHfQszvfZWXqN8o6zJ83ZMOWuH_nM',
    status: 'Unsolved',
    tags: ['Robotics', 'Energy'],
    reactions: 124,
    solutions: 12,
    image: 'https://images.unsplash.com/photo-1559302995-f09fb9067b5a?q=80&w=2070&auto=format&fit=crop',
    location: 'Palo Alto',
    time: 'Posted 4 hours ago'
  },
  {
    id: '2',
    title: 'Community book exchange box',
    description: 'Building a weather-proof library for local park. Need advice on wood sealant that is safe for environment.',
    author: 'Dr. Anna Chen',
    authorRole: 'Architect',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByoVwrm7NPPFHnGvtBATZ9K8DibhDh6usvUqane68pyPNQHPz9HvmB-NoljNalzO-FhzVylet7lbhbCCjKUg1n9drGxTYO0O9n72-Yw8Xj9nKfGuQJpc709d-Z-0q0ruUdyDoEbpMwjoOHcb-ukZSW5JySiHoqAf7CU89ClbveGHlaS-RN1uIzZqRVfOWoVBZo78nT49Fy90_ccgUOD8tgKEEBlUMhnMxRw0JAMXIswX3qShevdS7KA3Kg_nUMNMlvjNaAzWw1e0s',
    status: 'Solved',
    tags: ['Community', 'DIY'],
    reactions: 342,
    solutions: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1D5T_HA_8qV4-JrWYRpEXEih0sTWfc0ANRYCuHrqs_XKLhp_UcArVJeeTJdjudkSP_5iJCSqcZQ9g7DgsMYd8MJBSdUx4NiUX39cYr-wSzh93yEaaKrpPIabqa4Fe3u0ownDg8OXAj1sXO2wwNhvAX2yM4hBP_DnbTdRcPStl8lyHnV5XjeR_XbM6aHActVFfAF_rhh-gGjfkL2idzMvfBh3WaiW4mOOv_lu-2IhaY9hR88BCwWE0AiLBZxl6k-_mozGvKQODuT4',
    location: 'Oakland',
    time: 'Posted 1 day ago'
  },
  {
    id: '3',
    title: 'Optimizing urban garden irrigation',
    description: 'Looking to set up a smart drip irrigation system using local rainfall data. Anyone with experience in Arduino water control?',
    author: 'Sarah Jenkins',
    authorRole: 'Community Gardener',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7vgEDX3OZW1nPdt9RG_PXIoelMzWquc01ScrCkRM7bT6H3DxQGa8a1AV64OOZHNw0ogmOFBkVzItPwNCuu1IW0doXo-v-McAxn0UPWKH7PutjtkNn8wlFO1DsJTTWAlVYK25GFGToKYlB3jUjQGrY0-7MTr76NqqTCzSsQT1zJE5EkIzGjB30tNypMj4hbDLXbBZx9hF-i33vvmifa2IUcsoj3U1TXaPhNymFpy5-HYjqKXQIaUXFs2abh4E0f33xktHuE0FpGk',
    status: 'Unsolved',
    tags: ['Garden', 'Tech'],
    reactions: 89,
    solutions: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtZsNkxVxvPArOQsqGRxCR0m_qE0c_Q7kWFhdqbqMiak_g0ULhC6O2VQREZtLHpp7nHqjXkUR7FpyM6aw6u1Cai4H-PBrU5rPHWSvaOtseFIijt8oPKKVG-sgfei5IZPZkmpFB5yyQjQ9PrXTtTWWY9ALN7sPjdD4sYncoQqoQw-6h4csYCoqNFVGvOEzQCM1cc7jy2nP3Z5vmuQFPCKgxGLKsGKLAStKJvClDH3e3LWo7UCMXJTrJMnIBzlntiZCq1wGLFUxWD8A',
    location: 'Brooklyn',
    time: 'Posted 2 days ago'
  },
  {
    id: '4',
    title: 'Redesigning intersection traffic flow',
    description: 'We need urban planning insights for the 5th and Main st intersection. It is currently very dangerous for cyclists and pedestrians.',
    author: 'Michael Chang',
    authorRole: 'Urban Planner',
    authorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo-xN0z70cMhHWJ5tRQ_5HW4scFdj0WJWF1X_GgujZpOOv5lCmeji1oTJ3Q9Lnh-0s_lrT5g5hoIJn8BOABAGVZpjxXOINiYoGDW66ShBnNVSQwOyIRrpn9JqtvLrIUMn5PlCE3U2WhzSUZs1mCQ3TQ05jR3SOWVEO1Ws7TMWhowVrtns585Slu6YUO8UIAbdOajYEFsC73CutAI_xHY4L__rkX5lZesEDfJjaRAzW9Y7IPXtp9EjqEYNFHQqYopyyaqeRJFyzRHM',
    status: 'In Progress',
    tags: ['Civic', 'Safety'],
    reactions: 215,
    solutions: 34,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6XMYBmcbX5ww53iekdH9xLADt6ti3MjAurhCDz_wwoR0hnbTCE4mIZr9jEhFvNBEPKYvkmV1cfEbKRvkJk2tBqbhhYXEsDmtpx_q-7rK4s8B13xURvYVgZO90YJ5CABPstAxnTkkUIMQx4QfElRSLjiM9dlE1FHeyYwa1HefJaVF7nt8hqSKILBi-TPxBvwyu_yI-QrmlrILXjBigoWVNCtPvHFKmeaa_qvYVya4o83MogtfRb6aVFv72egGwn0VvzHg_4tnTWtU',
    location: 'Downtown',
    time: 'Posted 3 days ago'
  }
];

const CATEGORIES = [
  { name: 'Home', count: 24, icon: Home },
  { name: 'Tech', count: 12, icon: Cpu },
  { name: 'Life Hacks', count: 8, icon: Wrench },
  { name: 'Garden', count: 15, icon: Leaf },
];

export default function Feed() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Home');
  const [activeStatus, setActiveStatus] = useState('Unsolved');

  return (
    <div className="bg-[#F8FAFC] min-h-screen relative pb-24 font-sans">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-slate-900 mb-2">Community Feed</h1>
            <p className="text-slate-500">Real-life problems that need your expertise.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
            Sort by: Latest <ChevronDown size={16} />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-6 pt-8">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-8">
          
          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-display">Categories</h3>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-primary/10 text-primary font-bold' : 'text-slate-600 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <span className="text-sm">{cat.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isActive ? 'bg-primary/20 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                      {cat.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-display">Status</h3>
            <div className="flex flex-col gap-3">
              {['Unsolved', 'In Progress', 'Solved'].map(status => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold transition-colors ${
                    activeStatus === status 
                      ? 'border-primary text-primary bg-primary/5' 
                      : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${status === 'Unsolved' ? 'bg-red-500' : status === 'In Progress' ? 'bg-yellow-500' : 'bg-emerald-500'}`} />
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#2D62ED] to-[#1041B8] text-white p-6 rounded-2xl relative overflow-hidden mt-4 shadow-lg shadow-primary/20">
            <div className="relative z-10">
              <h3 className="text-lg font-bold font-display mb-6 leading-tight">Be the hero someone needs today.</h3>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-white/30 transition-colors">
                <PlayCircle size={20} fill="white" className="text-primary" />
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>
          
        </aside>

        {/* Main Feed Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          {MOCK_PROBLEMS.map((problem, idx) => (
            <motion.div 
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/problem/${problem.id}`)}
              className={`bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group ${
                problem.featured ? 'flex flex-col md:flex-row' : 'flex flex-col'
              }`}
            >
              {problem.featured && (
                <div className="md:w-[45%] h-64 md:h-auto relative shrink-0">
                  <img src={problem.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                  <div className="absolute top-4 left-4 bg-[#2D62ED] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-sm">
                    Expert Needed
                  </div>
                </div>
              )}
              
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-3">
                    <img src={problem.authorImage || `https://i.pravatar.cc/150?u=${problem.author}`} className="w-10 h-10 rounded-full bg-slate-100 object-cover" alt="" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{problem.author}</div>
                      <div className="text-xs font-medium text-slate-500 flex items-center gap-1 mt-0.5">
                        <Clock size={12} /> {problem.time}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    problem.status === 'Unsolved' ? 'bg-red-50 text-red-600' : 
                    problem.status === 'In Progress' ? 'bg-yellow-50 text-yellow-700' : 
                    'bg-emerald-50 text-emerald-600'
                  }`}>
                    {problem.status}
                  </span>
                </div>
                
                {/* Body */}
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm mb-8 line-clamp-2 leading-relaxed">
                  {problem.description}
                </p>
                
                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-5 text-sm text-slate-500 font-bold">
                    <div className="flex items-center gap-1.5 hover:text-slate-700 transition-colors">
                      <MessageCircle size={16} /> {problem.solutions} Answers
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-slate-700 transition-colors">
                      <Lightbulb size={16} /> {problem.reactions} Solutions
                    </div>
                  </div>
                  
                  {problem.featured ? (
                    <button className="bg-white text-[#2D62ED] border border-[#2D62ED] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors">
                      View Details
                    </button>
                  ) : (
                    <button className="bg-[#2D62ED] text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#1A4BCC] transition-colors shadow-sm shadow-primary/20">
                      Help Now <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 pb-12">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 transition-colors">&lt;</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#2D62ED] text-white font-bold shadow-sm shadow-primary/20">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 font-bold transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 font-bold transition-colors">3</button>
            <span className="text-slate-400 px-2 font-bold">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 font-bold transition-colors">12</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 transition-colors">&gt;</button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/post')}
        className="fixed bottom-8 right-8 bg-[#2D62ED] text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-xl shadow-primary/30 hover:bg-[#1A4BCC] transition-colors z-50 font-bold tracking-wide"
      >
        <Plus size={22} strokeWidth={3} />
        Post Problem
      </motion.button>
    </div>
  );
}

