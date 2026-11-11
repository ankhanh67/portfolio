import React from 'react';
import { Compass, GraduationCap, Building2, Lightbulb, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ChapterThree: React.FC = () => {
  const chapter = PORTFOLIO_DATA.chapters.chapter3;

  return (
    <article className="relative py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              <span>Chapter {chapter.number}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{chapter.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight text-balance">
              {chapter.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 shrink-0">
            Phase 3 / 3 · The Horizon
          </p>
        </div>

        {/* Narrative & Visual Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-display font-medium text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
              {chapter.lead}
            </p>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {chapter.narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Strategic Aspirations Cards */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                Strategic Dimensions & Future Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {chapter.strategicAspirations.map((aspiration, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                      {idx === 0 && <Compass className="w-4 h-4" />}
                      {idx === 1 && <Lightbulb className="w-4 h-4" />}
                      {idx === 2 && <GraduationCap className="w-4 h-4" />}
                    </div>
                    <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-2">
                      {aspiration.dimension}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {aspiration.vision}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual and SMU Connection Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[16/10] bg-slate-900 shadow-sm group">
              <img
                src={chapter.image}
                alt="Singapore Management University and Urban Tech Hub"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  Singapore · Global Business & Innovation Hub
                </span>
                <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                  Where Asia-Pacific enterprise challenges intersect with state-of-the-art computational analytics.
                </p>
              </div>
            </div>

            {/* Why SMU MITB Context Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/5 via-slate-50 to-white dark:from-emerald-950/20 dark:via-slate-900/50 dark:to-slate-900 border border-emerald-500/20 dark:border-emerald-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
                  Why SMU MITB
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                The Master of IT in Business program at SMU offers the exact curriculum synergy I seek: rigorous technical training in machine learning and analytics, grounded deeply in real-world business cases and corporate governance.
              </p>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Institution:</span>
                  <span className="font-medium text-slate-900 dark:text-white">Singapore Management University</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Program:</span>
                  <span className="font-medium text-slate-900 dark:text-white">Master of IT in Business (MITB)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Track:</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Analytics / Artificial Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
