import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, Bell, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/feed' },
    { name: 'Experts', path: '/experts' },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass h-16 shadow-lg shadow-primary/5 border-b border-outline-variant/20' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-on-surface font-display flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary text-base">K</div>
            Kindred
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-display text-sm font-bold">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`transition-all duration-200 relative py-1 ${
                  location.pathname === link.path 
                    ? 'text-primary-container' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-container rounded-full" 
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="hidden md:flex p-2 text-on-surface-variant hover:text-primary-container transition-colors rounded-full hover:bg-surface-container relative">
            <Bell size={20} />
            {hasNotifications && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary-container rounded-full border-2 border-white"></span>
            )}
          </button>
          <button className="hidden md:flex p-2 text-on-surface-variant hover:text-primary-container transition-colors rounded-full hover:bg-surface-container">
            <Search size={20} />
          </button>
          <div className="h-6 w-px bg-outline-variant/20 mx-2 hidden md:block" />
          <button className="text-sm font-bold text-on-surface hover:text-primary-container transition-colors px-4 py-2 hidden md:block">
            Log in
          </button>
          <Link to="/post" className="btn-gradient text-on-primary px-6 py-2.5 rounded-2xl font-bold font-display text-sm active:scale-95 transition-transform shadow-xl shadow-primary-container/20">
            Get Started
          </Link>
          <button 
            className="md:hidden p-2 text-on-surface ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-outline-variant/30 overflow-hidden absolute top-full left-0 w-full z-40 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl font-black font-display tracking-tight ${
                    location.pathname === link.path ? 'text-primary-container' : 'text-on-surface-variant'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-outline-variant/10 flex flex-col gap-6">
                 <div className="flex items-center justify-between">
                    <button className="font-bold text-on-surface text-lg">Log in</button>
                    <div className="flex gap-4">
                       <button className="p-3 bg-surface-container rounded-xl text-on-surface-variant"><Search size={20} /></button>
                       <button className="p-3 bg-surface-container rounded-xl text-on-surface-variant"><Bell size={20} /></button>
                    </div>
                 </div>
                 <Link 
                  to="/post" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-gradient text-on-primary px-6 py-4 rounded-2xl font-bold font-display text-center shadow-xl shadow-primary-container/20"
                 >
                    Get Started
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
