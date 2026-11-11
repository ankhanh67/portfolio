import React, { useState } from 'react';
import { Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ChapterOne: React.FC = () => {
  const [activeTouchpoint, setActiveTouchpoint] = useState(0);
  const chapter = PORTFOLIO_DATA.chapters.chapter1;

  return (
    <article className="relative py-20 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Chapter Header with Editorial Styling */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
              <span>Chapter {chapter.number}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{chapter.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight text-balance">
              {chapter.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 shrink-0">
            Phase 1 / 3 · The Foundation
          </p>
        </div>

        {/* Asymmetrical Editorial Composition: Left Story & Visual, Right Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-display font-medium text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
              {chapter.lead}
            </p>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {chapter.narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Strategic Pillars */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                Core Conceptual Anchors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {chapter.corePillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 transition-colors"
                  >
                    <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1">
                      0{idx + 1}
                    </div>
                    <div className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1.5">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Editorial Photography with Caption */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-100 dark:bg-slate-900 shadow-sm group">
              <img
                src={chapter.image}
                alt="Marketing Strategy & Customer Journey Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                  Case Formulation
                </span>
                <p className="text-xs text-slate-200 font-sans mt-0.5 leading-snug">
                  Customer journey funnels, brand economics & empirical hypothesis testing.
                </p>
              </div>
            </div>

            {/* Interactive Concept Tool: Marketing to Data Translation Explorer */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Interactive Framework
                </span>
                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                  Business → Data Bridge
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Click a lifecycle stage to see how a strategic business goal maps directly to data requirements:
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {chapter.journeyTouchpoints.map((tp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTouchpoint(idx)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      activeTouchpoint === idx
                        ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {tp.phase.split('.')[1] || tp.phase}
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2.5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    Commercial Objective
                  </span>
                  <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                    {chapter.journeyTouchpoints[activeTouchpoint].businessObjective}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">
                    Data Telemetry Required
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {chapter.journeyTouchpoints[activeTouchpoint].dataRequirement}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
