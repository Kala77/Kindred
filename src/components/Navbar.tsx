import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/feed' },
    { name: 'Post Problem', path: '/post' },
    { name: 'Impact', path: '/impact' },
    { name: 'Experts', path: '/experts' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-[#2D62ED]/5 docked full-width top-0 z-50 sticky h-16">
      <div className="flex justify-between items-center h-16 max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-[#2D62ED] font-['Plus_Jakarta_Sans']">
            Kindred
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-['Plus_Jakarta_Sans'] text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#2D62ED] border-b-2 border-[#2D62ED] pb-1'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#2D62ED] hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-400 text-sm font-['Plus_Jakarta_Sans'] border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-sm">search</span>
            <span>Find a problem...</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
