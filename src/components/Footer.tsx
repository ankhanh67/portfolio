import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e] text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
          <span>Candidate for Master of IT in Business (MITB)</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
          <span>Singapore Management University</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Return to top"
            aria-label="Return to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
