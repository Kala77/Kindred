"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/feed' },
    { name: 'Post Problem', path: '/post' },
    { name: 'Impact', path: '/impact' },
    { name: 'Experts', path: '/experts' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 dark:border-slate-800 shadow-sm shadow-[#2D62ED]/5 docked full-width top-0 z-50 sticky">
      <div className="flex justify-between items-center h-16 max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#2D62ED] font-['Plus_Jakarta_Sans']">
            Kindred
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
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
        <div className="flex items-center gap-2 sm:gap-4">

          <button className="hidden sm:block bg-[#2D62ED] text-white px-6 py-2 rounded-full font-semibold active:scale-95 transition-all shadow-md shadow-[#2D62ED]/20 text-sm">
            Sign In
          </button>
          <button 
            className="md:hidden text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg pb-4">
          <div className="flex flex-col px-6 pt-4 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-['Plus_Jakarta_Sans'] text-base font-medium py-2 transition-all duration-200 ${
                    isActive
                      ? 'text-[#2D62ED]'
                      : 'text-slate-600 hover:text-[#2D62ED]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button className="bg-[#2D62ED] text-white px-6 py-3 mt-2 rounded-full font-semibold active:scale-95 transition-all shadow-md shadow-[#2D62ED]/20 text-sm w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
